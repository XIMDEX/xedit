import { Component, AfterViewInit, OnInit, QueryList, OnDestroy, ViewChild } from '@angular/core';
import pretty from 'pretty';
import { is } from 'ramda';
import { AceEditorComponent } from 'ng2-ace-editor/src/component';

import { StateService } from '@services/state-service/state.service';
import { EditorService } from '@services/editor-service/editor.service';
import { Converters } from '@utils/converters';

import 'brace/index';
import 'brace/theme/dreamweaver';
import 'brace/mode/html';
import 'brace/snippets/html';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

declare let ace: any;

@Component({
    selector: 'app-text-view',
    templateUrl: './text-view.component.html',
    styleUrls: ['./text-view.component.scss']
})
export class TextViewComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('aceEditor') editor: AceEditorComponent;

    public editorNodes: Array<any> = null;
    private reload: boolean;
    public isHtmlValid: boolean;
    private subscribeFile;

    public openEditor: Object;

    public styleMode: Object;
    public reloadAceEditor: boolean;

    constructor(private _editorService: EditorService, private _stateService: StateService) {
        this.openEditor = {};
        this.reloadAceEditor = false;

        this.reload = false;
        this.isHtmlValid = true;

        this.styleMode = {
            height: '100%',
            width: '100%',
            overflow: 'auto'
        };
    }

    /************* LIFE CYCLE *************/
    ngOnInit() {
        this._editorService.setLoading(true);
        this.config();
        this._editorService.setLoading(false);
    }

    ngAfterViewInit() {
        this.initEditor();
    }

    ngOnDestroy() {
        this.subscribeFile.unsubscribe();
    }

    /************* END LIFE CYCLE *************/
    public changeView(openEditor: Object, index: any) {
        this.openEditor = openEditor;
        this.openEditor['index'] = index;

        this.reloadAceEditor = true;

        if (!this.openEditor['editable']) {
            this.styleMode['backgroundColor'] = '#e8e8e8';
        } else {
            delete this.styleMode['backgroundColor'];
        }
    }

    public getId() {
        return this.openEditor.hasOwnProperty('id') ? this.openEditor['id'] : null;
    }

    public isReadOnly() {
        return this.openEditor.hasOwnProperty('editable') && !this.openEditor['editable'];
    }

    public getRenderContent() {
        return this.openEditor.hasOwnProperty('renderContent') ? this.openEditor['renderContent'] : '';
    }

    private config() {
        this.subscribeFile = this._editorService.getFile().subscribe(file => {
            this.editorNodes = this.parseToHtmlToEditors(file.getState().content);
            for (const key in this.editorNodes) {
                if (this.editorNodes[key].editable) {
                    this.changeView(this.editorNodes[key], key);
                    return;
                }
            }
        });
    }

    /**
     *
     * @param content
     */
    private parseToHtmlToEditors(content) {
        const editorNodes = [];

        Object.keys(content).forEach(property => {
            const node = content[property];
            editorNodes.push({
                id: property,
                title: node.title,
                editable: node.editable,
                renderContent: is(String, node.content)
                    ? node.content
                    : pretty(Converters.json2html(node.content, false, false)),
                editor: null
            });
        });

        return editorNodes;
    }

    initEditor() {
        const _editor = this.editor.getEditor();
        const session = _editor.getSession();

        _editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: false
        });

        _editor.on('focus', e => {
            this.reloadAceEditor = false;
        });

        _editor.on('blur', e => {
            this.reloadAceEditor = true;
            setTimeout(() => {
                this._editorService.getFileStateValue().snapshot();
            }, 1000);
        });

        session.on('change', e => {
            if (_editor.curOp && _editor.curOp.command.name) {
                // Only if is user trigger event
                this.editorNodes[this.openEditor['index']].renderContent = _editor.getValue();

                if (this.editor.timeoutSaving != null) {
                    clearTimeout(this.editor.timeoutSaving);
                }

                this.editor.timeoutSaving = setTimeout(() => {
                    this._editorService.save(this.openEditor['id'], _editor.getValue(), 'Edit mode text');
                    this.editor.timeoutSaving = null;
                }, this.editor._durationBeforeCallback);
            }
        });
    }
}

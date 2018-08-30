import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { equals, merge, isNil, reduce } from 'ramda';
import validator from 'html-validator';
import htmlTagValidator from 'html-tag-validator';

import { File } from '@models/file';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { ClipboardConfigs } from '@models/configs/clipboardConfigs';

import { EditorService } from '@services/editor-service/editor.service';
import { StateService } from '@services/state-service/state.service';

import { TaskbarComponent } from '@components/taskbar/taskbar.component';
import { WysiwygViewComponent } from '@components/editor/views/wysiwyg-view/wysiwyg-view.component';
import { TextViewComponent } from '@components/editor/views/text-view/text-view.component';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, AfterViewChecked {

    private currentView: string;
    private clipboardConfigs: ClipboardConfigs;
    private cConfigs: Array<Object>;

    constructor(private _stateService: StateService, private _editorService: EditorService, private _elementRef: ElementRef) { }

    ngOnInit() {
        // Suscribe view state
        this._stateService.getCurrentView().subscribe(currentView => {
            this.currentView = currentView;
        });

        this.clipboardConfigs = new ClipboardConfigs();
    }

    ngAfterViewChecked() {
        this.cConfigs = this.clipboardConfigs.getConfigs();
    }

    setCurrentNode(uuid: string) {
        let node = null;
        if (!isNil(uuid)) {
            const element = this._elementRef.nativeElement.querySelector(`[${XeditMapper.TAG_UUID}='${uuid}']`);
            if (!isNil(element)) {
                node = this._editorService.parseToNode(element);
            }
        }
        this._editorService.setCurrentNode(node);
    }
    /**
     *
     * @param view
     */
    showComponent(view) {
        return equals(view, this.currentView);
    }

    saveClipboardConfigs(evt) {
        this.cConfigs = evt;
        this.clipboardConfigs.setConfigs(evt);
    }

    /**
     *
     */
    static executeIfvalidateHtmlTags(content, callback, errorCallback, options = {}) {
        options = merge({
            settings: {
                format: 'html', // 'plain', 'html', or 'markdown'
            },
            attributes: {
                '_': {
                    mixed: /.*/
                }
            }
        }, options);

        htmlTagValidator(content, options, (err, ast) => {
            if (err) {
                errorCallback();
            } else {
                callback();
            }
        });
    }

    /**
     * @todo Check if validate html with w3c
     */
    static validateHtml() {
        /* const options = {
            data: content,
            format: 'html5',
            fragment: true,
            validator: 'https://validator.w3.org/nu/',
            ignore: [
              'Error: Start tag seen without seeing a doctype first. Expected “<!DOCTYPE html>”.',
              'Error: Element “head” is missing a required instance of child element “title”.',
              'Error: Attribute “xe_uuid” not allowed on element “section” at this point',
              'Error: Attribute “xe_uuid” not allowed on element “section” at this point.',
              'Error: Attribute “xe_section” not allowed on element “section” at this point.',
              'Error: Attribute “xe_uuid” not allowed on element “h1” at this point.',
            ]
          }
          validator(options)
            .then((data) => {
              var newState = clone(this.content);
              var json = File.html2json(content, false);
              newState['s4sdf89'].content.child = json;
              this._editorService.newState(newState);
            })
            .catch((error) => {
              console.error(error)
            })*/
    }

    /**
     *
     */
    static checkIfContentChange(currentFile, file) {
        return isNil(currentFile) || (!isNil(file) && currentFile.getState().getHash() !== file.getState().getHash());
    }

}

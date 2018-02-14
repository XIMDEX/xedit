import { Component, ViewChildren, AfterViewInit, OnInit, QueryList, OnDestroy } from '@angular/core';
import pretty from 'pretty';
import { isNil, is } from 'ramda';
import { AceEditorComponent } from 'ng2-ace-editor/src/component';

import { File } from '@models/file';
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
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;

  private editorNodes: Array<any> = null;
  private reload: boolean;
  private isHtmlValid: boolean;
  private subscribeFile;

  constructor(private _editorService: EditorService, private _stateService: StateService) {
    this.reload = false;
    this.isHtmlValid = true;
  }

  /************* LIFE CYCLE *************/
  ngOnInit() {
    this._editorService.setLoading(true);
    this.config();
    this._editorService.setLoading(false);
  }

  ngAfterViewInit() {
    this.initEditor();
    this.editors.changes.subscribe(() => { this.initEditor(); });
  }

  ngOnDestroy() {
    this.subscribeFile.unsubscribe();
  }


  /************* END LIFE CYCLE *************/
  private config() {
    this.subscribeFile = this._editorService.getFile().subscribe(file => {
      this.editorNodes = this.parseToHtmlToEditors(file.getState().content);
    });

  }

  /**
   *
   * @param content
   */
  private parseToHtmlToEditors(content) {
    const editorNodes = [];

    // Clean editors if exist
    if (!isNil(this.editors)) {
      this.editors.forEach(editor => {
        editor.getEditor().destroy();
      });
    }

    Object.keys(content).forEach(property => {
      const node = content[property];
      editorNodes.push({
        'id': property,
        'title': node.title,
        'renderContent': is(String, node.content) ? node.content : pretty(Converters.json2html(node.content, false)),
        'editor': null
      });
    });

    return editorNodes;
  }

  initEditor() {
    this.editors.forEach((editor, i) => {
      const _editor = editor.getEditor();
      const session = _editor.getSession();

      this.editorNodes[i].editor = _editor;

      _editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
      });
      // session.setOption('minLines', 2);

      /*_editor.commands.addCommand({
        name: 'showOtherCompletions',
        bindKey: 'Ctrl-.',
        exec: function (editor) {
        }
      });*/

      /*session.selection.on('changeSelection', function (e) {
        let selectionRange = _editor.getSelectionRange();
        let startLine = selectionRange.start.row;
        let endLine = selectionRange.end.row;
      });*/
      _editor.on('blur', (e) => {
        setTimeout(() => {
          this._editorService.getFileStateValue().snapshot();
        }, 1000);
      });
      session.on('change', (e) => {
        if (_editor.curOp && _editor.curOp.command.name) { // Only if is user trigger event

          if (editor.timeoutSaving != null) {
            clearTimeout(editor.timeoutSaving);
          }

          editor.timeoutSaving = setTimeout(() => {
            this._editorService.save(_editor.container.id, _editor.getValue(), 'Edit mode text');
            editor.timeoutSaving = null;
          }, editor._durationBeforeCallback);

          /*let content = _editor.getValue();
          let options = {
            settings: {
              format: 'html', // 'plain', 'html', or 'markdown'
            },
            attributes: {
              '_': {
                mixed: /.
              }
            }
          };
          EditorComponent.executeIfvalidateHtmlTags(content,
            _ => {
              let newState = clone(this.file.getState().getContent());
              let json = File.html2json(content, false);
              newState[_editor.container.id].content.child = json;
              this.isHtmlValid = true;
              this._editorService.newStateFile(newState);
              this._stateService.setAvailableViews(['form', 'wysiwyg']);
            },
            _ => {
              this.isHtmlValid = false;
              this._stateService.setAvailableViews(['form']);
            })*/
        }
      });
    });
  }
}

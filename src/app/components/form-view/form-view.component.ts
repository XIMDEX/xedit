import { EditorComponent } from '../editor/editor.component';
import { Component, ViewChildren, AfterViewInit, OnInit, QueryList } from '@angular/core';
import pretty from 'pretty';
import { clone, merge, isNil, is } from 'ramda';
import { File } from '../../models/file'
import { AceEditorComponent } from 'ng2-ace-editor/src/component';
import { StateService } from '../../services/state-service/state.service';
import { EditorService } from '../../services/editor-service/editor.service';
import { debounceTime } from 'rxjs/operators'

import 'brace/index';
import 'brace/theme/dreamweaver';
import 'brace/mode/html';
import 'brace/snippets/html';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

declare var ace: any;


@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit, AfterViewInit {
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;

  private editorNodes: Array<any> = null;
  private reload: boolean = false;
  private isHtmlValid: boolean = true;
  private subscribeFile;

  constructor(private _editorService: EditorService, private _stateService: StateService) { }

  /************* LIFE CYCLE *************/
  ngOnInit() {
    this._editorService.setLoading(true);
    this.config();
    this._editorService.setLoading(false);
  }

  ngAfterViewInit() {
    this.initEditor();
    this.editors.changes.subscribe(() => { this.initEditor() });
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
    var editorNodes = [];

    // Clean editors if exist
    if (!isNil(this.editors)) {
      this.editors.forEach(editor => {
        editor.getEditor().destroy();
      });
    }

    Object.keys(content).forEach(property => {
      var node = content[property];
      editorNodes.push({
        'id': property,
        'title': node.title,
        'renderContent': is(String, node.content) ? node.content : pretty(File.json2html(node.content, false)),
        'editor': null
      });
    });

    return editorNodes;
  }

  initEditor() {
    this.editors.forEach((editor, i) => {
      var _editor = editor.getEditor();
      var session = _editor.getSession();

      this.editorNodes[i].editor = _editor;

      _editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
      });
      //session.setOption("minLines", 2);

      _editor.commands.addCommand({
        name: "showOtherCompletions",
        bindKey: "Ctrl-.",
        exec: function (editor) {
        }
      });

      /*session.selection.on('changeSelection', function (e) {
        var selectionRange = _editor.getSelectionRange();
        var startLine = selectionRange.start.row;
        var endLine = selectionRange.end.row;
      });*/

      /* _editor.on('blur', () => {
         this._editorService.save(_editor.container.id, _editor.getValue())
       });*/
      session.on('change', (e) => {
        if (_editor.curOp && _editor.curOp.command.name) { // Only if is user trigger event

          if (editor.timeoutSaving != null) {
            clearTimeout(editor.timeoutSaving);
          }

          editor.timeoutSaving = setTimeout(e => {
            this._editorService.save(_editor.container.id, _editor.getValue())
            editor.timeoutSaving = null;
          }, editor._durationBeforeCallback);

          /*var content = _editor.getValue();
 
          var options = {
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
              var newState = clone(this.file.getState().getContent());
              var json = File.html2json(content, false);
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
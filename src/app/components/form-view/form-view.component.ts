import { EditorComponent } from '../editor/editor.component';
import { Component, ViewChildren, AfterViewChecked, QueryList } from '@angular/core';
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
export class FormViewComponent implements AfterViewChecked {
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;

  private editorNodes: Array<any> = [];
  private reload: boolean = false;
  private isHtmlValid: boolean = true;
  private subscribeFileState;

  constructor(private _editorService: EditorService, private _stateService: StateService) { }

  /************* LIFE CYCLE *************/
  ngOnInit() {
    this.config();
  }

  ngAfterViewChecked() {
    this.initEditor();
  }

  ngOnDestroy() {
    this.subscribeFileState.unsubscribe();
  }


  /************* END LIFE CYCLE *************/

  private config() {
    var content = this._editorService.getFileValue().getState().getContent();
    this.editorNodes = this.parseToHtmlEditor(content);

    this.subscribeFileState = this._editorService.getFileState().subscribe(file => {
      this.editorNodes = this.parseToHtmlEditor(content);
    });

  }

  /**
   * 
   * @param content 
   */
  private parseToHtmlEditor(content) {
    var editorNodes = [];
    Object.keys(content).forEach(property => {
      var node = content[property];
      editorNodes.push({
        'id': property,
        'title': node.title,
        'renderContent': is(String, node.content) ? node.content : pretty(File.json2html(node.content))
      });
    });

    return editorNodes;
  }

  onChange(editorId, content) {
    //EditorComponent.executeIfvalidateHtmlTags(content,
    // _ => {
    //var newState = clone(this.file.getState().getContent());
    //var json = File.html2json(content, false);
    //newState[editorId].content.child = json;
    //this.isHtmlValid = true;
    //this._editorService.newStateFile(newState);
    //this._stateService.setAvailableViews(['form', 'wysiwyg']);
    //},
    //_ => {
    //this.isHtmlValid = false;
    //this._stateService.setAvailableViews(['form']);
    //})
    this._editorService.save(content, editorId)
    //var newState = clone(this.file.getState().getContent());
    //var json = File.html2json(content, false);
    //newState[editorId] = content;
    //this.isHtmlValid = true;
    //this._editorService.newStateFile(newState);
    //this._stateService.setAvailableViews(['form', 'wysiwyg']);
  }

  initEditor() {
    this.editors.forEach(editor => {
      var _editor = editor.getEditor();
      var session = _editor.getSession();

      editor.setTheme("dreamweaver");
      editor.setMode("html");

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

      session.selection.on('changeSelection', function (e) {
        var selectionRange = _editor.getSelectionRange();
        var startLine = selectionRange.start.row;
        var endLine = selectionRange.end.row;
      });

      /*session.on('change', (e) => {
        if (_editor.curOp && _editor.curOp.command.name) { // Only if is user trigger event
          var content = _editor.getValue();

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
            })
        }
      });*/
    });
  }

}
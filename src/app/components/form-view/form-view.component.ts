import { EditorComponent } from '../editor/editor.component';
import { Component, ViewChildren, AfterViewChecked, QueryList } from '@angular/core';
import pretty from 'pretty';
import validator from 'html-validator';
import htmlTagValidator from 'html-tag-validator';
import { clone } from 'ramda';
import { File } from '../../models/file'
import { AceEditorComponent } from 'ng2-ace-editor/src/component';

import 'brace/index';
import 'brace/theme/dreamweaver';
import 'brace/mode/html';
import 'brace/snippets/html';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import { StateService } from '../../services/state-service/state.service';
import { EditorService } from '../../services/editor-service/editor.service';

declare var ace: any;


@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements AfterViewChecked {
  @ViewChildren(AceEditorComponent) editors: QueryList<AceEditorComponent>;

  private content: string;
  private editorNodes: Array<any> = [];
  private reload: boolean = false;
  private isHtmlValid: boolean = true;

  constructor(private _editorService: EditorService, private _stateService: StateService) { }

  /************* LIFE CYCLE *************/
  ngOnInit() {
    this._editorService.getFile().subscribe(message => {
      if (message.getState()) {
        this.content = message.getState()
        this.editorNodes = [];
        Object.keys(this.content).forEach(property => {
          var node = this.content[property];
          this.editorNodes.push({
            'title': node.title,
            'renderContent': pretty(File.json2html(node.content, false))
          });
        });
        // Parse content to html
        this.reload = true;
      }
    });
  }

  ngAfterViewChecked() {

    if (this.reload) {
      this.initEditor();
      this.reload = false;
    }

  }
  /************* END LIFE CYCLE *************/
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
          alert("OK");
        }
      });

      session.selection.on('changeSelection', function (e) {
        var selectionRange = _editor.getSelectionRange();
        var startLine = selectionRange.start.row;
        var endLine = selectionRange.end.row;
        console.log(startLine, endLine);
      });

      session.on('change', (e) => {
        if (_editor.curOp && _editor.curOp.command.name) { // Only if is user trigger event
          var content = _editor.getValue();

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
          var options = {
            settings: {
              format: 'html', // 'plain', 'html', or 'markdown' 
            },
            attributes: {
              '_': {
                mixed: /.*/
              }
            }
          };
          htmlTagValidator(content, options, (err, ast) => {
            if (err) {
              console.log(err);
              this.isHtmlValid = false;
              this._stateService.setAvailableViews(['form']);
            } else {
              var newState = clone(this.content);
              var json = File.html2json(content, false);
              newState['s4sdf89'].content.child = json;
              this._editorService.newStateFile(newState);
              this.isHtmlValid = true;
              this._stateService.setAvailableViews(['form', 'wysiwyg']);
            }
          });
        }
      });
    });
  }

}
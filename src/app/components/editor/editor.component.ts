import { TaskbarComponent } from '../taskbar/taskbar.component';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { PropertiesViewComponent } from '../properties-view/properties-view.component';
import { WysiwygViewComponent } from '../wysiwyg-view/wysiwyg-view.component';
import { FormViewComponent } from '../form-view/form-view.component';
import { equals, merge } from 'ramda';
import { File } from '../../models/file';
import { isNil, clone, reduce } from 'ramda';
import { StateService } from '../../services/state-service/state.service';
import validator from 'html-validator';
import htmlTagValidator from 'html-tag-validator';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  private currentView: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    // Suscribe view state
    this._stateService.getCurrentView().subscribe(currentView => {
      this.currentView = currentView;
    });
  }

  /**
   * 
   * @param view 
   */
  showComponent(view) {
    return equals(view, this.currentView);
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
      if (err)
        errorCallback()
      else
        callback()
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
    return isNil(currentFile) || (!isNil(file) && currentFile.getState().getHash() != file.getState().getHash());
  }

}

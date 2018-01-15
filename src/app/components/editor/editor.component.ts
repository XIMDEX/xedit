import { TaskbarComponent } from '../taskbar/taskbar.component';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { PropertiesViewComponent } from '../properties-view/properties-view.component';
import { WysiwygViewComponent } from '../wysiwyg-view/wysiwyg-view.component';
import { FormViewComponent } from '../form-view/form-view.component';
import { equals } from 'ramda';
import { File } from '../../models/file';
import { isNil, clone, reduce } from 'ramda';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  @ViewChild(WysiwygViewComponent) wysiwygViewComponent;
  @ViewChild(FormViewComponent) formViewComponent;

  private view = 'form';

  constructor() { }

  ngOnInit() {
  }

  showComponent(view) {
    return equals(view, this.view);
  }

  /**
    * Transform json content to html with xedit root tag
    * 
    * @param content 
    */
  public static parseContentToXedit = function (content) {
    var renderContent = '';
    Object.keys(content).forEach(property => {
      renderContent += "<xedit xe_id='" + property + "'>";
      renderContent += File.json2html(content[property].content);
      renderContent += "</xedit>";
    });
    return renderContent;
  }

  public static getUuidPath = function (element, rootTag = 'xedit', path = []) {
    var parent = element.parentNode;

    if (!isNil(element))
      path.unshift(element.getAttribute('xe_uuid') || element.getAttribute('xe_id'))

    return (element.nodeName.toLowerCase() == rootTag || isNil(parent)) ?
      path : this.getUuidPath(parent, rootTag, path);
  }

}

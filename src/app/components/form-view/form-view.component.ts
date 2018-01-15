import { FileService } from '../../services/file-service/file.service';
import { Component, OnInit } from '@angular/core';
import { EditorComponent } from '../editor/editor.component';


@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {

  private renderContent: string;
  private content: string;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this._fileService.obsFile.subscribe(message => {
      if (message.getState()) {
        // Assign state to content
        this.content = message.getState()
        // Parse content to html
        this.renderContent = EditorComponent.parseContentToXedit(this.content);
      }
      console.log('FormViewComponent', 'ngOnInit', this.content, this.renderContent);
    });
  }
}
import { FileService } from '../../services/file-service/file.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {

  content: string;
  vContetn: string;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this._fileService.currentMessage.subscribe(message => this.content = message);
    //TODO parser content and create directives in div#xedit
  }

}

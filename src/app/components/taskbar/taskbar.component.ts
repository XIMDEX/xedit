
import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file-service/file.service';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent implements OnInit {

  htmlFile: string;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this._fileService.currentMessage.subscribe(htmlFile => this.htmlFile = htmlFile);
  }

  openFile() {
    this.htmlFile = '<h1>Hola pepe</h1>';
    this._fileService.insertData(this.htmlFile);
  }

}

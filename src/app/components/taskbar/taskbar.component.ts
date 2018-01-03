
import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file-service/file.service';
import { FileReaderEvent } from '../../interfaces/file-reader-event-target';

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
    (<HTMLInputElement>document.getElementById('open_html')).value = ""
    document.getElementById('open_html').click();
  }

  onFileSelect(event) {
    const files = event.target.files[0];
    if (files.type === 'text/html') {
      const reader: FileReader = new FileReader();
      reader.readAsText(files, "UTF-8");

      reader.onload = (fileReaderEvent: FileReaderEvent) => {
        this.htmlFile = fileReaderEvent.target.result;
        this._fileService.insertData(this.htmlFile);
      }

      reader.onerror = (evt) => {
        this.htmlFile = "Error loading file";
        this._fileService.insertData(this.htmlFile);
      }

    }
  }

}

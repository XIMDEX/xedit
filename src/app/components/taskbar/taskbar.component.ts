
import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file-service/file.service';
import { FileReaderEvent } from '../../interfaces/file-reader-event-target';
import { files } from 'jasmine-core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent implements OnInit {

  htmlFile: JSON;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this._fileService.obsContent.subscribe(htmlFile => this.htmlFile = htmlFile);
  }

  load() {
    (<HTMLInputElement>document.getElementById('open_html')).value = ""
    document.getElementById('open_html').click();
  }

  onFileSelect(event) {
    const file = event.target.files[0];
    if (file.type === 'application/json') {
      const reader: FileReader = new FileReader();
      reader.readAsText(file, "UTF-8");

      reader.onload = (fileReaderEvent: FileReaderEvent) => {
        var jsonFile = JSON.parse(fileReaderEvent.target.result);

        if (file.name === 'content.json') {
          this._fileService.setFile(jsonFile.result.content, null);
        } else if (file.name === 'schema.json') {
          this._fileService.setFile(null, jsonFile.result);
        }

        //this.htmlFile = jsonFile.result.content;
        //console.log(this.htmlFile);

        //this._fileService.setFile(this.htmlFile, this._fileService.obsContent);
      }

      reader.onerror = (evt) => {
        console.log('Error loading file');
      }

    }
  }

}

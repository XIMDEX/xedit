
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../services/file-service/file.service';
import { FileReaderEvent } from '../../interfaces/file-reader-event-target';
import { files } from 'jasmine-core';
import { File } from '../../models/file';
import { equals } from 'ramda';
import { equal } from 'assert';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent implements OnInit {

  file: File;

  constructor(private _fileService: FileService) { }

  ngOnInit() {
    this._fileService.obsFile.subscribe(obsFile => {
      if (obsFile.getState()) {
        this.file = obsFile;
      }
    });
  }

  undo() {
    this._fileService.lastStateFile();
  }


  redo() {
    this._fileService.nextStateFile();
  }

  show(component) {

  }

  nextAvailable() {
    return this.file != null && this.file.hasNextState();
  }

  previousAvailable() {
    return this.file != null && this.file.hasPreviousState();
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
        var json = JSON.parse(fileReaderEvent.target.result);
        var nodes = json.result;
        this._fileService.setFile(nodes);
      }

      reader.onerror = (evt) => {
        console.log('Error loading file');
      }

    }
  }

}

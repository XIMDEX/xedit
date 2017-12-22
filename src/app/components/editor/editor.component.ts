import { FileService } from '../../services/file-service/file.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  url: SafeResourceUrl;

  constructor(private _fileService: FileService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._fileService.currentMessage.subscribe(message =>
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('data:text/html;charset=utf-8,' + message)
    );
  }

}

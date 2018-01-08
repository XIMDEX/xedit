import { FileService } from '../../services/file-service/file.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { json2html } from 'html2json';
import { File } from '../../models/file';

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})
export class WysiwygViewComponent implements OnInit {

    content: string;
    vContetn: string;

    constructor(private _fileService: FileService) { }

    ngOnInit() {
        this._fileService.obsContent.subscribe(message => this.content = File.json2html(message));
        //TODO parser content and create directives in div#xedit
    }
}

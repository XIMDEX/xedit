import { FileService } from '../../services/file-service/file.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
        this._fileService.currentMessage.subscribe(message => this.content = message);
        //TODO parser content and create directives in div#xedit
    }
}

import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ViewEncapsulation } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ImageModalComponent implements OnInit {

    constructor(private ngxModal: NgxSmartModalService) { }

    ngOnInit() {
    }
}

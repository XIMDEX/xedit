import { isNil } from 'ramda';
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CropperSettings, CanvasCropperResult } from 'lib/images';
import { CropperjsComponent } from '../cropperjs/cropperjs.component';

@Component({
    selector: 'edit-image',
    templateUrl: './edit-image.component.html',
    styleUrls: ['./edit-image.component.scss']
})
export class EditImageComponent {

    @Input() style: object;
    @Input() src: string;

    @ViewChild('image') image: CropperjsComponent;

    @Output() change = new EventEmitter();

    public reload: boolean = false;

    public config: {} = {
        viewMode: 1,
        dragMode: 'move',
        checkCrossOrigin: false,
        checkOrientation: false,
        guides: false,
        center: true,
        movable: true,
        rotatable: true,
        zoomable: true,
        highlight: false,
        autoCrop: false,
        cropBoxMovable: false,
        cropBoxResizable: false,
        toggleDragModeOnDblclick: false
    };

    constructor() { }

    cropperOptions() : any {
        return {
            ...this.config,
            minCropBoxWidth: this.cropperSettings().size.width,
            minCropBoxHeight: this.cropperSettings().size.height
        }
    }

    cropperSettings() : CropperSettings {
        const { width, height } = this.style as any;
        const size = {
            width: '400px',
            height: '400px'
        }

        if (!isNil(width)) {
            size.width = width;
        }

        if (!isNil(height)) {
            size.height= height;
        }

        const cropbox = {
            left: 0,
            top: 0,
            width:  parseInt(size.width),
            height:  parseInt(size.height)
        }

        return {
            size,
            cropbox
        }
    }

    imageSettings(evt) {
        this.change.emit(evt);
    }
}

import { isNil } from 'ramda';
import { Component, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CropperSettings, CanvasCropperResult } from 'lib/images';
import { CropperjsComponent } from '../cropperjs/cropperjs.component';

@Component({
    selector: 'edit-image',
    templateUrl: './edit-image.component.html',
    styleUrls: ['./edit-image.component.scss']
})
export class EditImageComponent implements OnChanges {
    @Input() style: object = null;
    @Input() src: string;
    @Input() cropData: Cropper.CanvasData = null;

    @ViewChild('image') image: CropperjsComponent;

    @Output() change = new EventEmitter();

    public reload: boolean = false;
    public cropbox = null;

    public get container() {
        return this.cropperSettings().size;
    }

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

    constructor() {}

    ngOnChanges({ src }: SimpleChanges) {
        if (!isNil(src) && src.previousValue !== src.currentValue) {
            this.cropbox = this.cropperSettings().cropbox;
        }
    }

    cropperOptions(): any {
        const cropper = this.cropperSettings();
        return {
            ...this.config,
            minCropBoxWidth: cropper.size.width,
            minCropBoxHeight: cropper.size.height
        };
    }

    cropperSettings(): CropperSettings {
        const size = {
            width: '400px',
            height: '400px'
        };

        if (!isNil(this.style)) {
            const { width, height } = this.style as any;

            if (!isNil(width)) {
                size.width =
                    width +
                    ((typeof width === 'string' && !width.indexOf('px')) || typeof width === 'number' ? 'px' : '');
            }

            if (!isNil(height)) {
                size.height =
                    height +
                    ((typeof height === 'string' && !height.indexOf('px')) || typeof height === 'number' ? 'px' : '');
            }
        }

        const cropbox = {
            left: 0,
            top: 0,
            width: parseInt(size.width),
            height: parseInt(size.height)
        };

        return {
            size,
            cropbox
        };
    }

    imageSettings(evt) {
        this.change.emit(evt);
    }
}

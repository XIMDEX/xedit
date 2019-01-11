import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import Cropper from 'cropperjs';
import { isNil, empty } from 'ramda';
import { CanvasCropperResult } from 'lib/images';

@Component({
    selector: 'cropperjs',
    templateUrl: './cropperjs.component.html',
    styleUrls: ['./cropperjs.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CropperjsComponent implements OnChanges {

    @ViewChild('image') image: ElementRef;

    @Input() src: string;
    @Input() options: {} = {};
    @Input() cropbox: Cropper.CropBoxData;
    @Input() containerSize: {width: string|Number, height: string|Number};

    @Output() change = new EventEmitter<CanvasCropperResult | Cropper.CanvasData>();

    private cropperjs: Cropper;
    private reload: boolean = false;

    private zoom = {
        marker: true,
        counter: 0,
        counter1: 0
    }

    constructor() { }

    ngOnChanges({ src }: SimpleChanges) {
        if (!isNil(src) && !empty(src.currentValue) && src.currentValue !== src.previousValue) {
            this.reload = true;
        }
    }

    loadCropper() {
        if (!this.reload) {
            return;
        }

        if (isNil(this.src)) {
            throw new Error('Image must be a string and "null" recive');
        }
        const image = this.getImage();

        if (isNil(this.cropperjs)) {
            this.cropperjs = new Cropper(image, this.cropperOptions());

            image.addEventListener('cropend', () => {
                this.change.emit(this.cropperjs.getCanvasData());
            });

            image.addEventListener('zoom', (evt: any) => {
                this.zoom.counter += 1;
                if (this.zoom.marker) {
                    this.zoom.marker = false;
                    this.zoomAct();
                }
            });

        } else {
            this.cropperjs.replace(this.src);
        }

        if (this.cropbox) {
            this.cropperjs.setCropBoxData(this.cropbox);
        }

        this.reload = false;
    }

    hasImage() {
        return !isNil(this.src);
    }

    getImage() : HTMLImageElement {
        return this.image.nativeElement as HTMLImageElement
    }

    protected cropperOptions() {
        let aspectRatio = NaN;

        const defaults = {
            aspectRatio,
            movable: false,
            scalable: false,
            zoomable: false,
            viewMode: 1,
            checkCrossOrigin: true,
            background: true,
        };

        return { 
            ...defaults,
            ...this.options 
        }
    }

    protected zoomAct() {
        this.zoom.counter1 = this.zoom.counter;
        setTimeout(() => {
            if (this.zoom.counter === this.zoom.counter1) {
                this.zoom.counter = 0;
                this.zoom.counter = 1;
                this.zoom.marker = true;
                this.change.emit(this.cropperjs.getCanvasData());
            } else {
                this.zoomAct();
            }
        }, 150);
    }
}

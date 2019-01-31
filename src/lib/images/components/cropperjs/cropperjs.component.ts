import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import Cropper from 'cropperjs';
import { isNil, empty } from 'ramda';
import { CanvasCropperResult } from 'lib/images';
import { faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import {
    faAlignCenter,
    faAlignRight,
    faAlignLeft,
    faSync,
    faCompress,
    faExpand
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'cropperjs',
    templateUrl: './cropperjs.component.html',
    styleUrls: ['./cropperjs.component.scss']
})
export class CropperjsComponent implements OnChanges {
    @ViewChild('image') image: ElementRef;

    @Input() src: string;
    @Input() options: {} = {};
    @Input() cropbox: Cropper.CropBoxData;
    @Input() containerSize: { width: string | number; height: string | number };
    @Input() canvasData: Cropper.CanvasData = null;

    @Output() change = new EventEmitter<CanvasCropperResult | Cropper.CanvasData>();

    public icon = {
        contain: faCompress,
        cover: faExpand,
        reset: faSync,
        left: faAlignLeft,
        center: faAlignCenter,
        right: faAlignRight,
        zoomin: faSearchPlus,
        zoomout: faSearchMinus
    };

    public canvasZoom = 0;

    private cropperjs: Cropper;
    private reload: boolean = false;

    private zoom = {
        marker: true,
        counter: 0,
        counter1: 0
    };

    private ALIGN_CENTER = 1;
    private ALIGN_LEFT = 0;
    private ALIGN_RIGHT = 2;

    constructor() {}

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

            image.addEventListener('ready', (evt: any) => {
                if (this.canvasData) {
                    this.cropperjs.setCanvasData(this.canvasData);
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

    getImage(): HTMLImageElement {
        return this.image.nativeElement as HTMLImageElement;
    }

    reset() {
        const width = this.image.nativeElement.width;
        const height = this.image.nativeElement.height;

        const canvas = { ...this.canvasData, width, height, left: 0, top: 0 };
        this.cropperjs.setCanvasData(canvas);

        this.change.emit(this.cropperjs.getCanvasData());
    }

    cover() {
        this.calculateImageWith(true);
    }

    contain() {
        this.calculateImageWith();
    }

    align(type: number) {
        const canvas = this.cropperjs.getCanvasData();
        let { width: coWidth, height: coHeight } = this.containerSize;
        coWidth = typeof coWidth === 'string' ? Number(coWidth.replace('px', '')) : coWidth;
        coHeight = typeof coHeight === 'string' ? Number(coHeight.replace('px', '')) : coHeight;

        const { width, height } = canvas;
        let left = 0;
        let top = coHeight / 2 - height / 2;

        if (type === this.ALIGN_CENTER) {
            left = coWidth / 2 - width / 2;
        } else if (type === this.ALIGN_RIGHT) {
            left = coWidth - width;
        }

        this.cropperjs.setCanvasData({ width, height, left, top });
        this.change.emit(this.cropperjs.getCanvasData());
    }

    zoomImage(zoomin: boolean = true) {
        let amount = 0.1;
        if (!zoomin) {
            amount *= -1;
        }
        this.cropperjs.zoom(amount);
    }

    private calculateImageWith(isCover: boolean = false) {
        const width = this.image.nativeElement.width;
        const height = this.image.nativeElement.height;
        let { width: coWidth, height: coHeight } = this.containerSize;
        coWidth = typeof coWidth === 'string' ? Number(coWidth.replace('px', '')) : coWidth;
        coHeight = typeof coHeight === 'string' ? Number(coHeight.replace('px', '')) : coHeight;

        const ap = width / coWidth / (height / coHeight);
        let newWidth = coWidth;

        if (isCover ? ap > 1 : ap < 1) {
            const coe = height / coHeight;
            newWidth = width / coe;
        }

        const canvas = { ...this.canvasData, width: newWidth, left: 0, top: 0 };
        this.cropperjs.setCanvasData(canvas);

        this.change.emit(this.cropperjs.getCanvasData());
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
            background: true
        };

        return {
            ...defaults,
            ...this.options
        };
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

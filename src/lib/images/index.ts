import { ImagesModule } from './images.module';
import Cropper from 'cropperjs';

interface Size {
    width: string | Number;
    height: string | Number;
}

interface CropBox {
    left: Number;
    top: Number;
    width: Number;
    height: Number;
}

export interface CropperSettings {
    size: Size,
    cropbox: CropBox
}

export interface CanvasCropperResult {
    data: Cropper.CanvasData;
    src: string;
}

export {
    ImagesModule,
}
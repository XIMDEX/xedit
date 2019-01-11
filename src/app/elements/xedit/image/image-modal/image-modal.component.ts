import { hasIn, isNil } from 'ramda';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ImageModalComponent implements OnInit {

    public searchIcon = faSearch;

    public file: string = '';
    public src: string = null;
    public name: string = null;
    public size: Dimesion = null;

    private imageStyle: any;

    constructor() { }

    ngOnInit() {
    }

    imagePath() {
        let path: string = null;
        if (!isNil(this.file)) {
            path = this.file;
        }

        return path;
    }

    hasImagePath() {
        return !isNil(this.imagePath());
    }

    fileName() {
        let name = 'Elemento no seleccionado...';
        if (!isNil(this.name)) {
            name = this.name
        } else if (isNil(this.name) && !isNil(this.file)) {
            name = this.file;
        }

        return name;
    }

    fileRoute() {
        let route = 'Elemento no seleccionado...';
        if (!isNil(this.src)) {
            route = this.src;
        } else if (isNil(this.src) && !isNil(this.file)) {
            route = this.file;
        }

        return route;
    }

    setFormData(data) {
        const { fields } = data;

        for (const field of Object.keys(fields)) {
            if (hasIn(field, this)) {
                this[field] = fields[field];
            }
        }
    }

    cleanFormData() {
    }

    setImage(modal) {
        if (modal.hasData()) {
            const { save } = modal.getData();

            if (typeof save === 'function') {
                const data = {
                    src: this.file,
                    xe_link: this.file,
                    style: this.imageStyle
                };
                save(data);
            }
        }

        this.closeModal(modal);
    }

    imageData({ left, top, width, height }: Cropper.CanvasData) {
        this.imageStyle = `position: absolute; left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px`;
    }

    closeModal(modal) {
        modal.close();
    }
}

interface Dimesion {
    width: Number,
    height: Number;
    naturalWidth: Number;
    naturalHeight: Number;
}

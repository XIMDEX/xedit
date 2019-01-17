import { hasIn, isNil } from 'ramda';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Plugins } from '@app/core/plugins';
import { DamService } from '@app/services/dam-service/dam.service';
import { HttpClient } from '@angular/common/http';
import isUrl from 'is-valid-http-url';

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
    public size: Dimesion = {
        width: 300,
        height: 300
    };

    private imageStyle: any;
    public cropData: Cropper.CanvasData = null;

    constructor(private _damService: DamService, private http: HttpClient) { }

    ngOnInit() {
    }

    imagePath() {
        let path: string = null;
        if (!isNil(this.file)) {
            if (isUrl(this.file)) {
                path = this.file;
            }else {
                path = Plugins.MediaManagerUrl(this.file);
            }
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
        const { fields, settings } = data;

        for (const field of Object.keys(fields)) {
            if (hasIn(field, this)) {
                this[field] = fields[field];
            }
        }

        if (hasIn('image_size', settings)) {
            this.size.width = settings.image_size.width;
            this.size.height = settings.image_size.height;
        }

        if (hasIn('crop_data', settings)) {
            this.cropData = settings.crop_data;
        }
    }

    cleanFormData() {
    }

    setImage(modal) {
        if (modal.hasData()) {
            const { save } = modal.getData();

            if (typeof save === 'function') {
                const data = {
                    src: this.imagePath(),
                    xe_link: this.file,
                    style: this.imageStyle,
                };
                save(data);
            }
        }

        this.closeModal(modal);
    }

    imageData(cropData: Cropper.CanvasData) {
        const { left, top, width, height } = cropData;
        this.imageStyle = `position: absolute; left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px`;
    }

    closeModal(modal) {
        modal.close();
    }

    openMediaManager() {
        this._damService.setIsOpen(true);
        this._damService.setOnSelect(data => {
            Plugins.MediaMAnagerSelect(data, this.http, this.setImageData.bind(this))
            this._damService.setIsOpen(false);
        });
    }

    private setImageData({name, nodeid, path}) {
        this.file = nodeid;
        this.name = name;
        this.src = Object.values(path).join('/');
    }
}

interface Dimesion {
    width: Number;
    height: Number;
}

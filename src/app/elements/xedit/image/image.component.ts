import { XeditBaseComponent } from '../xedit.base.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { isNil, hasIn } from 'ramda';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ElementRef, HostListener, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ToolbarI } from '@app/models/interfaces/ToolbarI';
import { DOM } from '@app/models/dom';

@Component({
    selector: 'app-image',
    template: '<ng-content></ng-content>',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent extends XeditBaseComponent implements OnInit, AfterViewInit, OnChanges {
    public static hasSlot = true;

    private contentHtml: HTMLElement;
    private selectedImage;

    private toolbarOptions: Array<ToolbarI> = [
        {
            icon: faImage,
            callback: this.openImageModal.bind(this),
            active: true
        }
    ];

    constructor(private ngxModal: NgxSmartModalService, public host: ElementRef) {
        super();
    }

    ngOnInit() {}

    ngOnChanges({ selected }: SimpleChanges) {
        if (!isNil(selected) && selected.currentValue !== selected.previousValue) {
            const element = new DOM(this.contentHtml);
            if (this.isSelected()) {
                element.addClass('xe_selected');
            } else {
                element.removeClass('xe_selected');
            }
        }
    }

    ngAfterViewInit() {
        this.contentHtml = this.host.nativeElement.querySelector('[xe_section]') as HTMLElement;
    }

    openImageModal() {
        const modal = this.ngxModal.getModal('imageModal');
        modal.removeData();
        modal.setData({
            fields: this.getImageAttrs(),
            settings: {
                image_size: this.containerSize(),
                crop_data: this.cropData()
            },
            save: this.changeImage.bind(this)
        });
        modal.open();
    }

    @HostListener('click', ['$event'])
    onClick(evt: MouseEvent) {
        const { target } = evt;
        evt.stopPropagation();

        if (!isNil(target)) {
            if (hasIn('tagName', target) && target['tagName'].toLowerCase() === 'img') {
                this.selectedImage = target;
            } else {
                const image = this.contentHtml.querySelector('img');
                if (!isNil(image)) {
                    this.selectedImage = image;
                }
            }
        }

        const { uuid } = this.content;
        this.selectNode.emit(uuid);

        this.toolbar.emit(this.toolbarOptions);
    }

    changeImage(data) {
        const { uuid } = this.content;

        for (const attr of Object.keys(data)) {
            this.selectedImage.setAttribute(attr, data[attr]);
        }

        const element = this.contentHtml.firstChild as HTMLElement;

        this.change.emit({
            uuid,
            element: element,
            content: element.innerHTML
        });
    }

    private containerSize() {
        const container: HTMLElement = this.contentHtml;
        const size = {
            width: container.offsetWidth,
            height: container.offsetHeight
        };

        return size;
    }

    private cropData() {
        const container = this.selectedImage as HTMLElement;
        const result = {};

        const styles = window.getComputedStyle(container);

        for (const style of ['width', 'height', 'left', 'top']) {
            const value = styles[style];
            result[style] = typeof value === 'string' ? Number.parseFloat(value) : value;
        }

        return result;
    }

    private getImageAttrs() {
        const attrs = {
            file: 'xe_link',
            alt: 'alt',
            description: 'longDesc'
        };

        const values = {};
        for (const attr of Object.keys(attrs)) {
            values[attr] = this.selectedImage.getAttribute(attrs[attr]);
        }

        return values;
    }
}

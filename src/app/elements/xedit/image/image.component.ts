import { XeditBaseComponent } from '../xedit.base.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { isNil, hasIn } from 'ramda';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToolbarI } from '@app/models/interfaces/ToolbarI';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent extends XeditBaseComponent implements OnInit {

    @ViewChild('image') contentHtml: ElementRef;

    private selectedImage;

    private toolbarOptions: Array<ToolbarI> = [
        {
            icon: faImage,
            callback: this.openImageModal.bind(this)
        }
    ];

    constructor(private ngxModal: NgxSmartModalService) {
        super();
     }

    ngOnInit() {
    }
    
    openImageModal() {
        const modal = this.ngxModal.getModal('imageModal');
        modal.removeData();
        modal.setData({
            fields: this.getImageAttrs(),
            save: this.changeImage.bind(this)
        });
        modal.open();
    }

    onClick(evt: MouseEvent) {
        const { target } = evt;
        evt.stopPropagation();

        if (!isNil(target) && hasIn('tagName', target) && target['tagName'].toLowerCase() === 'img') {
            this.selectedImage = target;
        }
        
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
        this.toolbar.emit(this.toolbarOptions);
    }

    changeImage(data){
        const { uuid } = this.content;

        for (const attr of Object.keys(data)) {
            this.selectedImage.setAttribute(attr, data[attr]);
        }

        let element = this.contentHtml.nativeElement.firstChild;

        //TODO CHECK IF HAS ANY Position
        let styles = element.getAttribute('style');
        styles = (isNil(styles)? '' : `${styles} ` ) + 'position:relative;'; 
        element.setAttribute('style', styles);

        this.onChange.emit({
            uuid,
            element: element,
            content: element.innerHTML
        });
    }


    private getImageAttrs() { 
        const attrs = {
            file: 'src',
            alt: 'alt',
            description: 'longDesc'
        };

        let values = {};
        for (const attr of Object.keys(attrs)) {
            values[attr] = this.selectedImage.getAttribute(attrs[attr]);
        }

        return values;
    }
}

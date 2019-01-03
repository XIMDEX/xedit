import { XeditBaseComponent } from '../xedit.base.component';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ToolbarI } from '@app/models/interfaces/ToolbarI';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent extends XeditBaseComponent implements OnInit {

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
    
    openImageModal(evt) {
        alert('open');
        this.ngxModal.getModal('imageModal').open();
    }

    onClick(evt: MouseEvent) {
        evt.stopPropagation();
        
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
        this.toolbar.emit(this.toolbarOptions);
    }

    changeImage(element){
        console.log(element);
    }

}

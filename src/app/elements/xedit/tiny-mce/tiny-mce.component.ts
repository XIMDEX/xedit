import { Component, OnInit } from '@angular/core';
import { XeditBaseComponent } from '../xedit.base.component';

@Component({
    selector: 'app-tiny-mce',
    templateUrl: './tiny-mce.component.html',
    styleUrls: ['./tiny-mce.component.scss']
})
export class TinyMCEComponent extends XeditBaseComponent implements OnInit {
    configs: object;
    constructor() {
        super();
        this.configs = {
            fixed_toolbar_container: '#toolbar',
            skin_url: 'assets/skins/x-edit',
            plugins: 'link table image',
            inline: true,
            menubar: false,
            valid_elements: '*[*]'
        };
    }
}

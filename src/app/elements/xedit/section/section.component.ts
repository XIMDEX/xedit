import { Component, OnInit } from '@angular/core';
import { XeditBaseComponent } from '../xedit.base.component';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent extends XeditBaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

    onClick(evt: MouseEvent) {
        evt.stopPropagation();
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
    }

}

import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { BlurEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { XeditBaseComponent } from '../xedit.base.component';

@Component({
    selector: 'app-ckeditor',
    templateUrl: './ckeditor.component.html',
    styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent extends XeditBaseComponent implements OnInit, OnDestroy {

    public editor;

    constructor() { 
        super();
    }

    ngOnInit() {
        this.editor = InlineEditor;
    }

    ngOnDestroy() {
        this.editor = null;
    }

    onBlur({ editor: evt }: BlurEvent) {
        const { uuid } = this.content;
        const { element } = evt;

        this.onChange.emit({
            uuid,
            element, 
            content: evt.getData()
        });
        this.selectNode.emit(null);
    }

    onFocus() {
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
    }

    onClick(evt: MouseEvent) {
        evt.stopPropagation();
    }

}

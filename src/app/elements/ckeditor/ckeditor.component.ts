import { HandlerEditor } from '../../core/handler-editor/handler-editor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { BlurEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
    selector: 'app-ckeditor',
    templateUrl: './ckeditor.component.html',
    styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
    @Input() content: any;
    @Output() selectNode: EventEmitter<string> = new EventEmitter();

    public editor = InlineEditor;

    private args;

    constructor() { }

    ngOnInit() {
        // this.args = {
        //     node: currentNode,
        //     service: this._editorService,
        //     clipboardConfigs: clipboardConfigs,
        //     http: this.http,
        //     getInfo: (selectedId, type, setData, errorCallback, extra) => {
        //         Api.getInfoNode(this.http, selectedId, type, setData, errorCallback, extra);
        //     },
        //     callback: (evt, windowM, type, pathIds, setData) => {
        //         this._damService.setIsOpen(true);
        //         this._damService.setOnSelect((item) => {
        //             if (!isNil(item)) {
        //                 Api.getInfoNode(this.http, item.hash, type, setData, null, null);
        //                 this._damService.setIsOpen(false);
        //             }
        //         });
        //         // window['treeModal']
        //         //     .openModal('modal-1', type, pathIds)
        //         //     .then(selectedId => {
        //         //         Api.getInfoNode(this.http, selectedId, type, setData, null, null);
        //         //     })
        //         //     .catch(err => console.log(err));
        //     }
        // };
    }

    onBlur({ editor: evt }: BlurEvent) {
        const { uuid } = this.content;
        const { element } = evt;
        // console.log(uuid, evt.getData(), element);

        // HandlerEditor.saveDoc(element, evt.getData())
    }

    onFocus() {
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
    }

}

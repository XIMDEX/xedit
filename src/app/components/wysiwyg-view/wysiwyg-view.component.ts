import { Component, OnInit, AfterViewInit, EventEmitter, OnDestroy, Input, Output, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { File } from '../../models/file';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { isNil, clone, reduce } from 'ramda';
import { EditorComponent } from '../editor/editor.component';

import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import { EditorService } from '../../services/editor-service/editor.service';

declare var tinymce: any;

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})

export class WysiwygViewComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() elementId: String;

    private editor: any;
    private renderContent: string;
    private content: string;
    private currentNode: Array<any>;


    constructor(private _editorService: EditorService, private _elementRef: ElementRef) { }

    /************* LIFE CYCLE *************/
    ngOnInit() {
        this._editorService.getFile().subscribe(message => {
            if (message.getState()) {
                this.content = message.getState()
                // Parse content to html
                this.renderContent = EditorComponent.parseContentToXedit(this.content);
            }
            console.log('WysiwygViewComponent', 'ngOnInit', this.content, this.renderContent);
        });

        this._editorService.getCurrentNode().subscribe(currentNode => this.currentNode = currentNode);
    }

    ngAfterViewInit() {
        this.reloadTinymce();
    }

    ngOnDestroy() {
        this.removeTinymce();
    }

    /************* END LIFE CYCLE *************/

    /**
     * Init tinymce editor and added events
     */
    initTinymce = function () {
        tinymce.init({
            selector: 'section.editable',
            inline: true,
            branding: false,
            plugins: ['link', 'table'],
            skin_url: 'assets/skins/lightgray',
            valid_elements: '*[xe_uuid]',
            setup: editor => {
                this.editor = editor;
                editor.on('NodeChange', (e) => {
                    console.log(e);
                });
                editor.on('change', (evt: Event) => {
                    var contentTag = editor.bodyElement;
                    var element, uuidPath = null;

                    // Get tag modified
                    let xeid = '';
                    for (let i = 0; i < contentTag.attributes.length; i++) {
                        if (contentTag.attributes[i].nodeName == 'xe_uuid') {
                            xeid = contentTag.attributes[i].value
                            break;
                        }
                    }
                    element = this._elementRef.nativeElement.querySelector('[xe_uuid="' + xeid + '"]');
                    uuidPath = EditorComponent.getUuidPath(element);

                    //Modify file with new changes
                    var elementContent = clone(this.content);
                    var editContent = reduce(function (acc, value) {
                        return acc.child[value];
                    }, elementContent[uuidPath.shift()].content, uuidPath);
                    editContent.child = File.html2json(editor.getContent(), false)

                    // Save new state
                    this._editorService.newStateFile(elementContent);

                });
            }
        });
    }

    /**
     * Remove tinymce editor
     */
    removeTinymce = function () {
        tinymce.remove(this.editor);
    };

    /**
     * Reload tinymce editor
     */
    reloadTinymce = function () {
        this.removeTinymce();
        this.renderContent = EditorComponent.parseContentToXedit(this.content);
        this.initTinymce();
    }

}

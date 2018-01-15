import { FileService } from '../../services/file-service/file.service';
import { Component, OnInit, AfterViewInit, EventEmitter, OnDestroy, Input, Output, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { File } from '../../models/file';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { isNil, clone, reduce } from 'ramda';

import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import { EditorComponent } from '../editor/editor.component';
import { EditorComponent } from '../../../../../dev/src/app/editor/editor.component';

declare var tinymce: any;

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})

export class WysiwygViewComponent implements OnInit, AfterViewChecked, OnDestroy {

    @Input() elementId: String;
    @Output() onEditorContentChange = new EventEmitter();

    private editor: any;
    private renderContent: string;
    private content: string;
    private reload: boolean = false;

    constructor(private _fileService: FileService, private _elementRef: ElementRef) { }

    /************* LIFE CYCLE *************/
    ngOnInit() {
        this._fileService.obsFile.subscribe(message => {
            if (message.getState()) {
                this.content = message.getState()
                // Parse content to html
                this.renderContent = EditorComponent.parseContentToXedit(this.content);
                this.reload = true;
            }
            console.log('WysiwygViewComponent', 'ngOnInit', this.content, this.renderContent);
        });
    }

    ngAfterViewChecked() {
        // Only reload if file object has been modified
        if (this.reload) {
            this.reload = false;
            this.reloadTinymce();
            console.log('WysiwygViewComponent', 'ngAfterViewChecked', this.renderContent);
        }
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
                editor.on('keyup change', () => {
                    const content = editor.getContent();
                    this.onEditorContentChange.emit(content);
                });
                editor.on('change', (evt: Event) => {
                    var contentTag = editor.bodyElement;
                    var element, uuidPath = null;

                    // Get tag modified
                    let xeid = '';
                    for (let i = 0; i < contentTag.attributes.length; i++) {
                        if (contentTag.attributes[i].nodeName == 'xe_uuid') {
                            xeid = contentTag.attributes[i].nodeValue
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
                    this._fileService.file._value.newState(elementContent);

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

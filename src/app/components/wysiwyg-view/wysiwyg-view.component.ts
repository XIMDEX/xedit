import { Component, OnInit, EventEmitter, OnDestroy, Output, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { File } from '../../models/file';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventListener } from '@angular/core/src/debug/debug_node';
import { isNil, clone, reduce, path, equals, remove, is } from 'ramda';
import { EditorComponent } from '../editor/editor.component';
import { EditorService } from '../../services/editor-service/editor.service';
import { Node } from '../../models/node';
import { UUID } from 'angular2-uuid';
import { XeditMapper } from '../../models/schema/xedit-mapper';
import { ViewChild } from '@angular/core';
import $ from "jquery";

import { promise } from 'protractor';
import { WysiwygHandler } from './wysiwyg-handler';

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})

export class WysiwygViewComponent implements OnInit, OnDestroy {

    @ViewChild('xedit') xedit: ElementRef;

    private renderContent: string;
    private subscribeFile;

    constructor(private _editorService: EditorService, private _elementRef: ElementRef) { }

    /************************************** Life Cycle **************************************/
    ngOnInit() {
        this.config();
    }

    ngOnDestroy() {
        this.subscribeFile.unsubscribe();
    }

    /************************************** Private Methods **************************************/

    /**
     * Config component
     */
    config() {
        this.renderContent = this.parseContentToWysiwygEditor(this._editorService.getFileValue().getState().getContent());
        // Suscribe to file changes
        this.subscribeFile = this._editorService.getFileState().subscribe(file => {
            // Parse content to html
            this.renderContent = this.parseContentToWysiwygEditor(file.getState().getContent());
        });

        // Suscribe to node change
        this._editorService.getCurrentNodeModify().subscribe(currentNode => {
            var element = this.xedit.nativeElement.querySelector('[xe_uuid="' + currentNode.getUuid() + '"]');
            Object.keys(currentNode.getAttributes()).forEach(attribute => {
                element.setAttribute(attribute, currentNode.getAttribute(attribute))
            });
        });
    }

    /**
    * Transform json content to html with xedit root tag
    * 
    * @param content 
    */
    private parseContentToWysiwygEditor(content) {
        var renderContent = '';
        Object.keys(content).forEach(property => {
            renderContent += "<" + XeditMapper.TAG_EDITOR + " xe_id='" + property + "'>";
            renderContent += is(String, content[property].content) ? content[property].content : File.json2html(content[property].content);
            renderContent += "</" + XeditMapper.TAG_EDITOR + ">";
        });
        return renderContent;
    }
    /************************************** Public Methods **************************************/

    onclick(evt) {

        var currentNode = evt.target;
        var section = this.getSection(currentNode);

        if (section)
            this.applyHandler(currentNode, section);
    }

    getSection(currentNode, rootTag = 'section') {
        var section = null;

        if (!isNil(currentNode) && currentNode.nodeName.toLowerCase() == rootTag)
            section = currentNode;

        return !isNil(section) || isNil(currentNode) || isNil(currentNode.parentNode) ?
            section : this.getSection(currentNode.parentNode, rootTag)
    }

    applyHandler(currentNode, section) {
        var sectionType = this.getAttributeValue(section.attributes, XeditMapper.TAG_SECTION_TYPE)

        var args = { section: section, node: currentNode, service: this._editorService }
        WysiwygHandler.executeHandler(sectionType, args);
    }

    /**
     * 
     */
    getAttributeValue(attributes, name): any {
        var value = null;
        for (let i = 0; i < attributes.length; i++) {
            if (attributes[i].nodeName == name) {
                value = attributes[i].value
                break;
            }
        }
        return value;
    }

}

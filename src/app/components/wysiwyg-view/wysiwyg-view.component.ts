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

import { WysiwygHandler } from './wysiwyg-handler';
import { equal } from 'assert';

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})

export class WysiwygViewComponent implements OnInit, OnDestroy {

    @ViewChild('xedit') xedit: ElementRef;

    private renderContent: string;
    private subscribeFile;
    private subscribeCN;
    public breadcrumb: Array<string> = [];

    constructor(private _editorService: EditorService, private _elementRef: ElementRef) { }

    /************************************** Life Cycle **************************************/
    ngOnInit() {
        this._editorService.setLoading(true);
        this.config();
        this._editorService.setLoading(false);
    }

    ngOnDestroy() {
        this.subscribeFile.unsubscribe();
        this.subscribeCN.unsubscribe();
        this._editorService.setCurrentNode(null);
        this._editorService.setCurrentNodeModify(null);
    }

    ngAfterViewInit() {
    }

    /************************************** Private Methods **************************************/

    /**
     * Config component
     */
    config() {
        // Suscribe to file changes
        this.subscribeFile = this._editorService.getFile().subscribe(file => {
            // Parse content to html
            this.renderContent = this.parseContentToWysiwygEditor(file.getState().getContent());
        });

        // Suscribe to node change
        this.subscribeCN = this._editorService.getCurrentNodeModify().subscribe(currentNode => {
            var element = this.xedit.nativeElement.querySelector('[' + XeditMapper.TAG_UUID + '="' + currentNode.getUuid() + '"]');
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
            renderContent += File.json2html((is(String, content[property].content) ?
                File.html2json(content[property].content) : content[property].content));
            renderContent += "</" + XeditMapper.TAG_EDITOR + ">";
        });
        return renderContent;
    }
    /************************************** Public Methods **************************************/

    onclick(evt) {

        var currentNode = evt.target;
        var section = this.getSection(currentNode);
        this.breadcrumb = this.getBreadCrumb(currentNode);

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

    getBreadCrumb(currentNode, rootTag = 'xedit', path = []) {
        var section = null;
        var key = null;

        if (!isNil(currentNode) && !isNil(section = currentNode.getAttribute(XeditMapper.TAG_SECTION_TYPE)) &&
            !isNil(key = currentNode.getAttribute(XeditMapper.TAG_UUID)))
            path.unshift({ key: key, name: section })

        return isNil(currentNode) || isNil(currentNode.parentNode) || equals(currentNode.nodeName.toLowerCase(), rootTag) ?
            path : this.getBreadCrumb(currentNode.parentNode, rootTag, path);
    }

    applyHandler(currentNode, section) {
        var sectionType = section.getAttribute(XeditMapper.TAG_SECTION_TYPE);

        var args = { section: section, node: currentNode, service: this._editorService }
        WysiwygHandler.executeHandler(sectionType, args);
    }

    changeSelection(key) {
        console.log(key);
    }
}

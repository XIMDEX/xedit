import { Component, OnInit, EventEmitter, OnDestroy, Output, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { File } from '../../models/file';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { EventListener } from '@angular/core/src/debug/debug_node';
import {
    isNil,
    clone,
    reduce,
    equals,
    remove,
    is,
    props,
    has,
    merge,
    divide,
    hasIn
} from 'ramda';
import { EditorComponent } from '../editor/editor.component';
import { EditorService } from '../../services/editor-service/editor.service';
import { Node } from '../../models/node';
import { UUID } from 'angular2-uuid';
import { XeditMapper } from '../../models/schema/xedit-mapper';
import { ViewChild } from '@angular/core';
import $ from 'jquery';

import { WysiwygHandler } from './wysiwyg-handler';
import { equal } from 'assert';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
import { Element } from '@angular/compiler';

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})

export class WysiwygViewComponent implements OnInit, OnDestroy {

    @ViewChild('xedit') xedit: ElementRef;
    @ViewChild('myContextMenu') public basicMenu: ContextMenuComponent;

    private renderContent: string;
    private subscribeFile;
    private subscribeCN;
    public breadcrumb: Array<string> = [];
    public contextMenuActions: Array<any> = [];

    constructor(private _editorService: EditorService, private contextMenuService: ContextMenuService, private _elementRef: ElementRef) { }

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
            const element = this.xedit.nativeElement.querySelector('[' + XeditMapper.TAG_UUID + '="' + currentNode.getUuid() + '"]');
            Object.keys(currentNode.getAttributes()).forEach(attribute => {
                element.setAttribute(attribute, currentNode.getAttribute(attribute));
            });
        });
    }

    /**
    * Transform json content to html with xedit root tag
    *
    * @param content
    */
    private parseContentToWysiwygEditor(content) {
        let renderContent = '';
        Object.keys(content).forEach(property => {
            renderContent += '<' + XeditMapper.TAG_EDITOR + ' ' + XeditMapper.TAG_UUID + '="' + property + '">';
            renderContent += File.json2html((is(String, content[property].content) ?
                File.html2json(content[property].content) : content[property].content));
            renderContent += '</' + XeditMapper.TAG_EDITOR + '>';
        });
        return renderContent;
    }
    /************************************** Public Methods **************************************/

    onclick(evt) {

        const currentNode = evt.target;
        const section = this.getSection(currentNode);
        this.breadcrumb = this.getBreadCrumb(currentNode);

        if (section) {
            this.applyHandler(currentNode, section);
        }
    }

    getSection(currentNode, attribute = XeditMapper.TAG_SECTION_TYPE) {
        let section = null;

        if (!isNil(currentNode) && currentNode.hasAttribute(attribute)) {
            section = currentNode;
        }

        return !isNil(section) || isNil(currentNode) || isNil(currentNode.parentNode) ?
            section : this.getSection(currentNode.parentNode, attribute);
    }

    getBreadCrumb(currentNode, rootTag = 'xedit', path: Array<Object> = []) {
        let section = null;
        let key = null;

        if (!isNil(currentNode) && !isNil(section = currentNode.getAttribute(XeditMapper.TAG_SECTION_TYPE)) &&
            !isNil(key = currentNode.getAttribute(XeditMapper.TAG_UUID))) {
            path.unshift({ key: key, name: section });
        }

        return isNil(currentNode) || isNil(currentNode.parentNode) || equals(currentNode.nodeName.toLowerCase(), rootTag) ?
            path : this.getBreadCrumb(currentNode.parentNode, rootTag, path);
    }

    applyHandler(currentNode, section) {
        const sectionType = section.getAttribute(XeditMapper.TAG_SECTION_TYPE);

        const args = { section: section, node: currentNode, service: this._editorService };
        WysiwygHandler.executeHandler(sectionType, args);
    }

    /************************************** MENU *****************************************/

    public onContextMenu($event: KeyboardEvent, item: any): void {
        this.updateContextMenuActions($event.target);
        setTimeout(() => {
            this.contextMenuService.show.next({
                contextMenu: this.basicMenu,
                event: $event,
                item: item,
            });
        }, 50);
        $event.preventDefault();
        $event.stopPropagation();
    }

    private updateContextMenuActions(element) {
        const actions = this.getAvailableActions(element);
        const contextMenuActions = [];

        // TAG
        contextMenuActions.push(this.createAction((i) => actions.name, null, true, false, (i) => false));
        contextMenuActions.push(this.createAction(null, null, true, true));

        // Childs
        actions.childs.forEach(action => {
            contextMenuActions.push(
                this.createAction((i) => 'Añadir hijo ' + action.name,
                    (evt) => element.insertBefore(this.createElementFromHTML(action.template), element.childNodes[0]), true)
            );
        });

        // Divider
        if (actions.childs.length > 0 && actions.siblings.length > 0) {
            contextMenuActions.push(this.createAction(null, null, true, true));
        }

        // Siblings
        actions.siblings.forEach(action => {
            contextMenuActions.push(
                this.createAction((i) => 'Añadir hermano ' + action.name,
                    (evt) => element.parentNode.insertBefore(action.template, element.nextSibling), true)
            );
        });
        // this.contextMenuActions = [
        //    this.createAction((i) => `Say hi!`, (evt) => console.log(this.getSection(element)), true),
        /* {
            html: (i) => `Say hi!`,
            click: (evt) => { console.log(this.getSection(evt)) },
            enabled: () => true,
            visible: () => true,
        },
        {
            divider: true,
            visible: true,
        },*/
        /* {
            html: (item) => `Something else`,
            click: (item) => alert('Or not...'),
            enabled: (item) => false,
            visible: (item) => item.type === 'type1',
        },*/
        // ];

        this.contextMenuActions = contextMenuActions;
    }



    private createAction(html, click, visible, divider = false, enabled = (item) => true) {
        return {
            html: html,
            click: click,
            enabled: enabled,
            divider: divider,
            visible: visible,
        };
    }



    getAvailableActions(element: Element) {
        const actions = {
            name: null,
            childs: [],
            siblings: [],
        };
        /** @todo Corregir obtener ruta */
        const sectionPath = this.getBreadCrumb(element).map(ele => props(['name'], ele));
        sectionPath.unshift(EditorService.getUuidPath(element, XeditMapper.TAG_EDITOR, [], true)[0]);
        let section = this._editorService.getFileStateValue().getSchema(sectionPath.shift());
        let parent = null;

        // Get schema
        section = reduce(function (sect, value) {
            parent = sect;
            return sect.sections[value];
        }, section, sectionPath);

        actions.name = this.getSectionLang(section, 'es');

        // Get childs
        if (hasIn('sections', section) && !isNil(section.sections)) {
            for (const key in section.sections) {
                if (hasIn(key, section.sections)) {
                    actions.childs.push({
                        name: this.getSectionLang(section.sections[key], 'es'),
                        template: this.getSectionTemplate(section.sections[key])
                    });
                }
            }
        }

        // Get siblings
        if (hasIn('sections', parent) && !isNil(parent.sections)) {
            for (const key in parent.sections) {
                if (hasIn(key, parent.sections)) {
                    actions.siblings.push({
                        name: this.getSectionLang(parent.sections[key], 'es'),
                        template: this.getSectionTemplate(parent.sections[key])
                    });
                }
            }
        }

        return actions;
    }

    getSectionLang(section, lang) {
        let name = section.name;
        if (hasIn('lang', section) && is(Object, section.lang) && hasIn(lang, section.lang)) {
            name = section.lang[lang];
        }
        return name;
    }


    getSectionTemplate(section) {
        let template = null;
        if (hasIn('template', section) && is(String, section.template)) {
            template = File.json2html(File.html2json(section.template));
        }
        return template;
    }

    createElementFromHTML(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
}

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
    union,
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
import { Converters } from '../../../utils/converters';
import { Element } from '@angular/compiler';
import { DOM } from '../../models/dom';

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})

export class WysiwygViewComponent implements OnInit, OnDestroy {

    @ViewChild('xedit') xedit: ElementRef;
    @ViewChild('myContextMenu') public basicMenu: ContextMenuComponent;
    @Output() selectNode: EventEmitter<string> = new EventEmitter();

    private renderContent: string;
    private subscribeFile;
    private subscribeCN;
    private subscribeCNM;
    public contextMenuActions: Array<any> = [];
    private currentNode: Node;
    private schemas;

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
        this.subscribeCNM.unsubscribe();
        this._editorService.setCurrentNode(null);
        this._editorService.setCurrentNodeModify(null);
        WysiwygHandler.clearTinymce();
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
            this.schemas = file.getSchemas();
        });

        // Suscribe to node change
        this.subscribeCNM = this._editorService.getCurrentNodeModify().subscribe(currentNode => {
            const element = this.xedit.nativeElement.querySelector('[' + XeditMapper.TAG_UUID + '="' + currentNode.getUuid() + '"]');
            Object.keys(currentNode.getAttributes()).forEach(attribute => {
                element.setAttribute(attribute, currentNode.getAttribute(attribute));
            });
        });

        this.subscribeCN = this._editorService.getCurrentNode().subscribe(currentNode => {
            if (!isNil(currentNode)) {
                this.setSelection(currentNode);
            }
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
            renderContent += Converters.json2html((is(String, content[property].content) ?
                Converters.html2json(content[property].content) : content[property].content));
            renderContent += '</' + XeditMapper.TAG_EDITOR + '>';
        });
        return renderContent;
    }


    private clearAttributes() {
        if (!isNil(this.currentNode.getSection())) {
            this.currentNode.getSection().removeAttribute(XeditMapper.ATTR_SELECTED);
        }

        if (!isNil(this.currentNode.getTarget())) {
            this.currentNode.getTarget().removeAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED);
        }
    }

    /************************************** Public Methods **************************************/
    onclick(evt) {
        this.changeSelection(evt.target.getAttribute(XeditMapper.TAG_UUID));
    }

    changeSelection(elementKey) {
        this.selectNode.emit(elementKey);
    }

    setSelection(curretNode) {

        if (!isNil(this.currentNode)) {
            this.clearAttributes();
        }

        this.currentNode = curretNode;

        // Add selected class
        const name = Node.getSectionLang(curretNode.getSchema(), 'es');
        this.currentNode.getSection().setAttribute(XeditMapper.ATTR_SELECTED, name);

        // Add selected class
        this.currentNode.getTarget().setAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED, this.currentNode.getTarget().nodeName);

        if (!isNil(this.currentNode.getSection())) {
            this.applyHandler(this.currentNode);
        }
    }


    applyHandler(currentNode) {
        const sectionType = currentNode.getSection().getAttribute(XeditMapper.TAG_SECTION_TYPE);

        const args = { node: currentNode, service: this._editorService, schemas: this.schemas };
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

        const node = EditorService.parseToNode(element, this._editorService.getFileStateValue().getSchemas());

        const actions = this.getAvailableActions(node.getSchema(), node.getSchemaParent());
        let contextMenuActions = [];
        const contextMenuActionsChild = [];
        const contextMenuActionsSiblings = [];

        // TAG
        contextMenuActions.push(this.createAction((i) => actions.name, null, true, false, (i) => false));
        contextMenuActions.push(this.createAction(null, null, true, true));

        const clickFunc = (currentNode: any, afterNode: any, strTemplate: string, child = false) => {
            const nodeTemplate = Converters.html2json(strTemplate, false);
            DOM.element(currentNode).insertNode(Converters.json2html(Converters.addWrapJson(nodeTemplate)), afterNode, true);
            this._editorService.addNodeToArea(node, nodeTemplate, child);
        };

        // Childs
        actions.childs.forEach(action => {
            if (hasIn('template' in action) && !isNil(action.template)) {
                contextMenuActionsChild.push(
                    this.createAction((i) => 'Añadir hijo ' + action.name,
                        (evt) => clickFunc(
                            node.getSection(),
                            node.getSection().childNodes[node.getSection().childNodes.length],
                            action.template,
                            true
                        ), true)
                );
            }
        });

        // Siblings
        actions.siblings.forEach(action => {
            if (hasIn('template' in action) && !isNil(action.template)) {
                contextMenuActionsSiblings.push(
                    this.createAction((i) => 'Añadir hermano ' + action.name,
                        (evt) => clickFunc(
                            node.getSection().parentNode,
                            node.getSection().nextSibling,
                            action.template
                        ), true)
                );
            }
        });

        contextMenuActions = union(contextMenuActions, contextMenuActionsChild);
        // Divider
        if (contextMenuActionsChild.length > 0 && contextMenuActionsSiblings.length > 0) {
            contextMenuActions.push(this.createAction(null, null, true, true));
        }
        contextMenuActions = union(contextMenuActions, contextMenuActionsSiblings);

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



    getAvailableActions(section, parent) {
        const actions = {
            name: null,
            childs: [],
            siblings: [],
        };

        actions.name = Node.getSectionLang(section, 'es');

        // Get childs
        if (hasIn('sections', section) && !isNil(section.sections)) {
            for (const key in section.sections) {
                if (hasIn(key, section.sections)) {
                    actions.childs.push({
                        name: Node.getSectionLang(section.sections[key], 'es'),
                        template: Node.getSectionTemplate(section.sections[key])
                    });
                }
            }
        }

        // Get siblings
        if (hasIn('sections', parent) && !isNil(parent.sections)) {
            for (const key in parent.sections) {
                if (hasIn(key, parent.sections)) {
                    actions.siblings.push({
                        name: Node.getSectionLang(parent.sections[key], 'es'),
                        template: Node.getSectionTemplate(parent.sections[key])
                    });
                }
            }
        }

        return actions;
    }
}

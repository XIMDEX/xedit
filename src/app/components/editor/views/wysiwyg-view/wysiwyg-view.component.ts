import { Component, OnInit, EventEmitter, OnDestroy, Output, ElementRef, ViewChild } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
import { isNil, reduce, equals, is, props, has, union, hasIn } from 'ramda';

import { Node } from '@models/node';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { File } from '@models/file';
import { DOM } from '@models/dom';
import { EditorService } from '@services/editor-service/editor.service';
import { Converters } from '@utils/converters';
import { WysiwygHandler } from '@components/editor/views/wysiwyg-view/wysiwyg-handler';
import $ from 'jquery';
import { NotificationsService } from 'angular2-notifications';
import { Xedit } from '@app/xedit';

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
    private subscribeFileState;
    private subscribeCN;
    private subscribeCNM;
    public contextMenuActions: Array<any> = [];
    private currentNode: Node;
    private cssLinks: Array<string>;
    private jsLinks: Array<string>;

    private copyAction: any;

    constructor(private _editorService: EditorService, private contextMenuService: ContextMenuService,
        private _elementRef: ElementRef, private _notification: NotificationsService) { }

    /************************************** Life Cycle **************************************/
    ngOnInit() {
        this._editorService.setLoading(true);
        this.config();
        this._editorService.setLoading(false);
    }

    ngOnDestroy() {
        this.subscribeFile.unsubscribe();
        this.subscribeFileState.unsubscribe();
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
            this.cssLinks = file.getCss();
            this.jsLinks = file.getJs();
            // Parse content to html
            this.renderContent = this.parseContentToWysiwygEditor(file.getState().getContent());
            WysiwygHandler.clearTinymce();
        });

        // Suscribe to file changes
        this.subscribeFileState = this._editorService.getFileState().subscribe(file => {
            // Parse content to html
            setTimeout(() => {
                // TODO FIX atovar
                const xedit = this.xedit.nativeElement;
                const links = xedit.getElementsByTagName('a');
                if (!isNil(links)) {
                    for (let i = 0; i < links.length; i++) {
                        links[i].onclick = (evt) => {
                            evt.preventDefault();
                            return false;
                        };
                    }
                }
            }, 1000);
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

            const data = is(String, content[property].content) ?
                Converters.html2json(content[property].content) : content[property].content;
            renderContent += this.parseContentToWysiwygEditorWrapper(property,
                content[property].editable, Converters.json2html(data));

        });
        return renderContent;
    }

    private parseContentToWysiwygEditorWrapper(property, editable, content) {
        const START_TAG = editable ? XeditMapper.TAG_EDITOR + ' ' + XeditMapper.TAG_UUID + '="' + property + '"' :
            'div class="no-editable"';
        const END_TAG = editable ? XeditMapper.TAG_EDITOR : 'div';
        return '<' + START_TAG + '>' + content + '</' + END_TAG + '>';
    }


    private clearAttributes() {
        if (!isNil(this.currentNode)) {
            if (!isNil(this.currentNode.getSection())) {
                this.currentNode.getSection().removeAttribute(XeditMapper.ATTR_SELECTED);
            }

            if (!isNil(this.currentNode.getTarget())) {
                const element = document.querySelector(`[xe_uuid="${this.currentNode.getTarget().getAttribute(XeditMapper.TAG_UUID)}"]`);
                if (!isNil(element)) {
                    element.removeAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED);
                }
            }
        }
    }

    /************************************** Public Methods **************************************/
    onclick(evt) {
        this.changeSelection(evt.target.getAttribute(XeditMapper.TAG_UUID));
    }

    changeSelection(elementKey) {
        this.selectNode.emit(elementKey);
    }

    setSelection(currentNode) {

        if (!isNil(this.currentNode)) {
            this.clearAttributes();
        }

        this.currentNode = currentNode;

        if (!isNil(currentNode.getSchema())) {
            // Add selected class
            const name = Node.getSectionLang(this.currentNode.getSchema(), 'es');
            this.currentNode.getSection().setAttribute(XeditMapper.ATTR_SELECTED, name);

            // Add selected class
            this.currentNode.getTarget().setAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED, this.currentNode.getTarget().nodeName);

            if (!isNil(this.currentNode.getSection())) {
                this.applyHandler(this.currentNode);
            }
        }
    }


    applyHandler(currentNode) {
        const sectionType = currentNode.getSchema().type;

        const args = { node: currentNode, service: this._editorService };
        WysiwygHandler.executeHandler(sectionType, args);
    }

    /************************************** MENU *****************************************/

    public onContextMenu($event: KeyboardEvent, item: any): void {

        const node = this._editorService.parseToNode($event.target);

        if (!isNil(node) && !isNil(node.getSchema())) {
            this.updateContextMenuActions(node);
            setTimeout(() => {
                this.contextMenuService.show.next({
                    contextMenu: this.basicMenu,
                    event: $event,
                    item: item,
                });
            }, 50);
        }
        $event.preventDefault();
        $event.stopPropagation();
    }

    private updateContextMenuActions(node) {

        const actions = this.getAvailableActions(node);
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
        actions.children.forEach(action => {
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
        contextMenuActions.push(this.createAction(null, null, true, true));
        contextMenuActions = union(contextMenuActions, this.defaultActions(node));

        this.contextMenuActions = contextMenuActions;
    }

    private defaultActions(node) {
        const actions = [];

        if (!isNil(this.copyAction) && !isNil(node)) {

            // Coger node del json --> Cambiar todos los uid del padre e hijos
            actions.push(
                this.createAction(
                    (i) => 'Paste',
                    (evt) => {
                        const sectionNode = new Node(this.copyAction.getAttribute(XeditMapper.TAG_UUID), this.copyAction);
                        if (EditorService.isInsertedNodeValid(node, sectionNode)) {
                            let template = this._editorService.getJsonNodesByPath(sectionNode);
                            template = Converters.json2html(template, true, true, true);
                            DOM.element(node.getSection())
                                .insertNode(template, sectionNode.getTarget().childNodes[sectionNode.getTarget().childNodes.length], true);
                            this._editorService.addNodeToArea(node, Converters.html2json(template, false), true);
                            this._notification.info('Nodo insertado', 'El nodo ha sido pegado con éxito.',
                                Xedit.NOTIFICATION_DEFAULT_SETTINGS);
                        } else {
                            this._notification.error('Estructura inválida', 'El nodo pegado no es soportado.',
                                Xedit.NOTIFICATION_DEFAULT_SETTINGS);
                        }
                    },
                    true
                )
            );
        }

        actions.push(this.createAction(
            (i) => 'Copy',
            (evt) => {
                this.copyAction = null;
                this.copyAction = node.getSection();
            },
            true)
        );

        actions.push(this.createAction(
            (i) => 'Delete',
            (evt) => {
                this._editorService.removeNode(node);
                DOM.element(node.getSection()).deleteNode();
            },
            true)
        );

        return actions;
    }

    // Todo create Action Model
    private createAction(html, click, visible, divider = false, enabled = (item) => true) {
        return {
            html: html,
            click: click,
            enabled: enabled,
            divider: divider,
            visible: visible,
        };
    }



    getAvailableActions(node: Node) {
        const actions = {
            name: null,
            children: [],
            siblings: [],
            others: []
        };

        actions.name = Node.getSectionLang(node.getSchema(), 'es');

        // Get childs
        if (hasIn('actions', node.getSchema()) && !isNil(node.getSchema().actions)) {
            if (hasIn('children', node.getSchema().actions)) {
                const children = node.getSchema().actions.children;
                children.map((child) => {
                    const schema = node.getSchemaNode()[child];
                    if (!isNil(schema)) {
                        actions.children.push({
                            name: Node.getSectionLang(schema, 'es'),
                            template: Node.getSectionTemplate(schema)
                        });
                    }
                });
            }

            if (hasIn('siblings', node.getSchema().actions)) {
                const siblings = node.getSchema().actions.siblings;
                siblings.map((sibling) => {
                    const schema = node.getSchemaNode()[sibling];
                    if (!isNil(schema)) {
                        actions.siblings.push({
                            name: Node.getSectionLang(schema, 'es'),
                            template: Node.getSectionTemplate(schema)
                        });
                    }
                });
            }
        }

        actions.others.push({
            name: 'Borrar',
            template: null
        });

        return actions;
    }
}

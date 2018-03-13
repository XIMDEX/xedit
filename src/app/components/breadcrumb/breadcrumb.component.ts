import { Component, OnInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { isNil, equals, hasIn, union } from 'ramda';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
import { Converters } from '../../../utils/converters';
import { DOM } from '../../models/dom';
import { NotificationsService } from 'angular2-notifications';

import { XeditMapper } from '@models/schema/xedit-mapper';
import { EditorService } from '@services/editor-service/editor.service';
import { Node } from '@app/models/node';
import { Xedit } from '@app/xedit';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    @Output() selectNode: EventEmitter<string> = new EventEmitter();

    public breadcrumb: Array<Object> = [];
    private currentNode: any;

    constructor(private _editorService: EditorService, private _elementRef: ElementRef, private contextMenuService: ContextMenuService,
        private _notification: NotificationsService) { }

    ngOnInit() {
        this._editorService.getCurrentNode().subscribe(currentNode => {
            if (!isNil(currentNode)) {
                this.breadcrumb = this.getBreadCrumb(currentNode.getSection());
            }
        });
    }

    getBreadCrumb(currentNode, rootTag = 'xedit', path: Array<Object> = []) {
        const section = null;
        let key = null;

        if (!isNil(currentNode) && !isNil(currentNode.getAttribute(XeditMapper.TAG_SECTION_TYPE)) &&
            !isNil(key = currentNode.getAttribute(XeditMapper.TAG_UUID))) {
            const node = new Node(currentNode.getAttribute(XeditMapper.TAG_UUID), currentNode);
            path.unshift({
                key: key,
                name: Node.getSectionLang(node.getSchema(), Xedit.getLang()),
                target: node.getTarget()
            });
        }

        return isNil(currentNode) || isNil(currentNode.parentNode) || equals(currentNode.nodeName.toLowerCase(), rootTag) ?
            path : this.getBreadCrumb(currentNode.parentNode, rootTag, path);
    }

    changeSelection(elementKey) {
        this.selectNode.emit(elementKey);
    }

    /************************************** MENU *****************************************/
    @ViewChild('myContextMenu') public basicMenu: ContextMenuComponent;
    public contextMenuActions: Array<any> = [];
    private copyAction: any;

    public onContextMenu($event: KeyboardEvent, item: any): void {

        const node = this._editorService.parseToNode(item);

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
                            this._notification.info('Componente insertado', 'El componente ha sido pegado con éxito.',
                                Xedit.NOTIFICATION_DEFAULT_SETTINGS);
                        } else {
                            this._notification.error('Estructura inválida', 'El componente pegado no es soportado.',
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

        actions.name = Node.getSectionLang(node.getSchema(), Xedit.getLang());

        // Get childs
        if (hasIn('actions', node.getSchema()) && !isNil(node.getSchema().actions)) {
            if (hasIn('children', node.getSchema().actions)) {
                const children = node.getSchema().actions.children;
                children.map((child) => {
                    const schema = node.getSchemaNode()[child];
                    if (!isNil(schema)) {
                        actions.children.push({
                            name: Node.getSectionLang(schema, Xedit.getLang()),
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
                            name: Node.getSectionLang(schema, Xedit.getLang()),
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

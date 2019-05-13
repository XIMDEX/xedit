import {
    Component, OnInit, AfterViewChecked, EventEmitter, OnDestroy, Output, ElementRef,
    ViewChild, ChangeDetectorRef
} from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
import { isNil, equals, is, union, hasIn } from 'ramda';

import { Node } from '@models/node';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { DOM } from '@models/dom';
import { EditorService } from '@services/editor-service/editor.service';
import { Converters } from '@utils/converters';
import { WysiwygHandler } from '@components/editor/views/wysiwyg-view/wysiwyg-handler';
import { NotificationsService } from 'angular2-notifications';
import { ClipboardConfigs } from '../../../../models/configs/clipboardConfigs';
import { Api } from '../../../../api';
import Router from '../../../../core/mappers/router';
import { DamService } from '../../../../services/dam-service/dam.service';
import { Xedit } from '@app/xedit';
import { StateConfigs } from '@app/models/configs/statesConfigs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-wysiwyg-view',
    templateUrl: './wysiwyg-view.component.html',
    styleUrls: ['./wysiwyg-view.component.scss']
})

export class WysiwygViewComponent implements OnInit, OnDestroy, AfterViewChecked {

    @ViewChild('xedit') xedit: ElementRef;
    @ViewChild('myContextMenu') public basicMenu: ContextMenuComponent;
    @Output() selectNode: EventEmitter<string> = new EventEmitter();

    contextMenuActions: Array<any> = [];
    copyAction: any;

    public renderContent: string;
    private subscribeFile;
    private subscribeCN;
    private subscribeCNM;
    private currentNode: Node;
    public cssLinks: Array<string>;
    private jsLinks: Array<string>;

    private enableHover: boolean = null;
    private reload = false;
    private stateConfigs: StateConfigs;

    constructor(private _editorService: EditorService, private contextMenuService: ContextMenuService,
        private _elementRef: ElementRef, private _notification: NotificationsService, private cdr: ChangeDetectorRef,
        public http: HttpClient, private _damService: DamService) { }

    /************************************** Life Cycle **************************************/
    ngOnInit() {
        this.stateConfigs = new StateConfigs();
        this._editorService.setLoading(true);
        this.config();
    }

    ngAfterViewChecked() {
        if (this.reload) {
            this.reloadView();

            // TODO fix event
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
        }

        if (isNil(this.enableHover) && !isNil(this.stateConfigs.isActive())) {
            this.enableHover = !this.stateConfigs.isActive() && this.stateConfigs.getConfigs('hover').enable;
            this.reload = true;
        }
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
            this.cssLinks = file.getCss();
            this.jsLinks = file.getJs();
            // Parse content to html
            this.renderContent = this.parseContentToWysiwygEditor(file.getState().getContent());
            WysiwygHandler.clearTinymce();
            this._editorService.setLoading(false);
        });

        // Suscribe to node change
        this.subscribeCNM = this._editorService.getCurrentNodeModify().subscribe(currentNode => {
            const element = this.xedit.nativeElement.querySelector('[' + XeditMapper.TAG_UUID + '="' + currentNode.getUuid() + '"]');
            Object.keys(currentNode.getAttributes()).forEach(attribute => {
                element.setAttribute(attribute, currentNode.getAttribute(attribute));
            });
        });

        this.subscribeCN = this._editorService.getCurrentNode().subscribe(currentNode => {
            if (!isNil(currentNode) && (isNil(this.currentNode) ||
                !equals(currentNode.getAttribute(XeditMapper.TAG_UUID), this.currentNode.getUuid()))) {
                this.setSelection(currentNode);
            }
        });

        this._editorService.getElementsState().subscribe(elementState => {
            if (!isNil(this.stateConfigs.isActive())) {
                this.enableHover = elementState && this.stateConfigs.getConfigs('hover').enable;
                this.reload = true;
            }
        });
    }

    private reloadView() {
        this.reload = false;
        const file = this._editorService.getFileStateValue();
        this.renderContent = this.parseContentToWysiwygEditor(file.getState().getContent());
        this.cdr.detectChanges();
        WysiwygHandler.clearTinymce();
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
                content[property].editable, Converters.json2html(data, true, true, false, this.enableHover));

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

    private addHttp(resource: string) {
        if (!(/^(f|ht)tps?:\/\//i).test(resource)) {
            resource = Router.configUrl(Api.getResourceUrl(), { id: resource });
        }
        return resource;
    }

    /************************************** Public Methods **************************************/
    onclick(evt) {
        this.changeSelection(evt.target.getAttribute(XeditMapper.TAG_UUID));
        // this.changeSelection(this.chooseTarget(evt.target));
    }

    chooseTarget(origin) {
        const len = origin.children.length;
        let target = origin.getAttribute(XeditMapper.TAG_UUID);
        if (len === 1 && origin.hasAttribute('xe_section')) {
            let node = origin.children[0];
            if (node.nodeName === 'IMG') {
                target = node.getAttribute(XeditMapper.TAG_UUID);
            } else if (node.nodeName === 'P'
                && node.children.length === 1
                && node.children[0].nodeName === 'IMG') {
                node = node.children[0];
                target = node.getAttribute(XeditMapper.TAG_UUID);
            }
            // node.click();
        }
        return target;
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
            const name = Node.getSectionLang(this.currentNode.getSchema(), Xedit.getLang());
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
        const clipboardConfigs = new ClipboardConfigs();
        const args = {
            node: currentNode,
            service: this._editorService,
            clipboardConfigs: clipboardConfigs,
            http: this.http,
            getInfo: (selectedId, type, setData, errorCallback, extra) => {
                Api.getInfoNode(this.http, selectedId, type, setData, errorCallback, extra);
            },
            callback: (evt, windowM, type, pathIds, setData) => {
                this._damService.setIsOpen(true);
                this._damService.setOnSelect((item) => {
                    if (!isNil(item)) {
                        Api.getInfoNode(this.http, item.hash, type, setData, null, null);
                        this._damService.setIsOpen(false);
                    }
                });
                // window['treeModal']
                //     .openModal('modal-1', type, pathIds)
                //     .then(selectedId => {
                //         Api.getInfoNode(this.http, selectedId, type, setData, null, null);
                //     })
                //     .catch(err => console.log(err));
            }
        };
        WysiwygHandler.executeHandler(sectionType, args);
    }

    /************************************** MENU *****************************************/
    public onContextMenu($event: MouseEvent): void {

        const node = this._editorService.parseToNode($event.target);

        if (!isNil(node) && !isNil(node.getSchema())) {
            this.updateContextMenuActions(node);
            setTimeout(() => {
                this.contextMenuService.show.next({
                    contextMenu: this.basicMenu,
                    event: $event,
                    item: null,
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
            DOM.element(currentNode).insertNode(Converters.json2html(Converters.addWrapJson(nodeTemplate), true,
                true, false, this.enableHover), afterNode, true);
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

    private existActions(node): boolean {
        return hasIn('actions', node.getSchema()) && !isNil(node.getSchema().actions);
    }

    private existAction(node, action: string): boolean {
        return this.existActions(node) && hasIn(action, node.getSchema().actions);
    }

    private getAction(node, action) {
        return node.getSchema().actions[action];
    }

    private defaultActions(node) {
        const actions = [];

        actions.push(this.createAction(null, null, true, true));

        if ((!this.existAction(node, 'paste') || this.getAction(node, 'paste') === true) && !isNil(this.copyAction)
            && !isNil(node)) {
            // Coger node del json --> Cambiar todos los uid del padre e hijos
            actions.push(
                this.createAction(
                    (i) => 'Paste component',
                    (evt) => {
                        const sectionNode = new Node(this.copyAction.getAttribute(XeditMapper.TAG_UUID), this.copyAction);
                        if (EditorService.isInsertedNodeValid(node, sectionNode)) {
                            let template = this._editorService.getJsonNodesByPath(sectionNode);
                            template = Converters.json2html(template, true, true, true, this.enableHover);
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
        if ((!this.existAction(node, 'copy') || this.getAction(node, 'copy') === true)) {
            actions.push(this.createAction(
                (i) => 'Copy component',
                (evt) => {
                    this.copyAction = null;
                    this.copyAction = node.getSection();
                },
                true)
            );
        }
        if ((!this.existAction(node, 'delete') || this.getAction(node, 'delete') === true)) {
            actions.push(this.createAction(
                (i) => 'Delete component',
                (evt) => {
                    this._editorService.removeNode(node);
                    DOM.element(node.getSection()).deleteNode();
                },
                true)
            );
        }

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

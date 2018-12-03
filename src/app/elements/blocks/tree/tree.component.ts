import { Component, ViewChild, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { hasIn, isNil } from 'ramda';
import { EditorService } from '../../../services/editor-service/editor.service';
import { Api } from '@app/api';
import { HttpClient } from '@angular/common/http';
import { ITreeOptions, TREE_ACTIONS, TreeNode } from 'angular-tree-component';
import { faFolder, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { faSitemap, faBoxes, faBox, faServer } from '@fortawesome/free-solid-svg-icons';
import Router from '@app/core/mappers/router';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: [
        './tree.component.scss',
    ]
})
export class TreeComponent implements OnInit {

    @ViewChild('Tree') tree;
    @Output() selected: EventEmitter<any> = new EventEmitter();
    @Input() type;
    @Input() path;
    
    static readonly TYPE_FOLDER: String = 'folder';
    static readonly TYPE_EMPTY: String = 'empty';
    static readonly TYPE_IMAGE: String = 'image';
    static readonly TYPE_VIDEO: String = 'video';
    static readonly TYPE_LINK: String = 'link';

    constructor(public http: HttpClient, public _editorService: EditorService) { }

    public treeModel: any;
    public resourceCount: number = -1;
    public imgSrc: string = null;
    public imgName: string = null;
    public treeOptions: ITreeOptions = {
        actionMapping: {
            mouse: {
                click: (tree, node, $event) => {
                    const { type, id, icon, name } = node.data;
                    if (type === TreeComponent.TYPE_FOLDER) {
                        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
                        this.imgSrc = null;
                    } 
                    else if (type === 'item' && icon === TreeComponent.TYPE_IMAGE) {
                        this.imgSrc = Router.configUrl(Api.getResourceUrl(), { id: id });
                        this.imgName = name;
                    } 
                },
                dblClick: (tree, node, $event) => {
                    const { type } = node.data;
                    if (type !== TreeComponent.TYPE_EMPTY && type !== TreeComponent.TYPE_FOLDER) this.selectNode(node);
                },
                contextMenu: (tree, node, $event) => {
                    $event.preventDefault();
                    console.log(node.data)
                }
            },
        }
    }

    ngOnInit() {
        this.resetTreeModel();
    }

    public resetTreeModel() {
        this.treeModel = [{
            id: 1,
            name: 'Root',
            hasChildren: true,
            isRoot: true,
            icon: 'root',
            type: TreeComponent.TYPE_FOLDER,
            children: []
        }];
        this.tree.treeModel.collapseAll();
        // TODO LOAD PATH TREE
    }
    
    public processChildren(nodes): Array<any> {
        const children = [];

        for (const nodeId in nodes) {
            if (!isNil(nodeId)) {
                const obj = {
                    id: nodeId,
                    name: nodes[nodeId]['name'],
                    type: nodes[nodeId]['type'],
                    icon: nodes[nodeId]['icon'],
                };
                if (nodes[nodeId]['type'] === 'folder') {
                    obj['hasChildren'] = true;
                    obj['children'] = [];
                    obj['resources'] = this.resourceCount
                }

                children.push(obj);
            }
        }

        if (children.length === 0) {
            children.push({ 
                name: 'No hay elementos disponibles...',
                type: 'empty',
            });
        }
        return children;
    }

    public onMenuItemSelected(e) {
        const id = e.node.data.id;
        this.selected.emit(id);
    }

    private requestChildren(nodeId: string, callback = null) {
        const error = () => {
            console.error("ERROR DE API")
            this._editorService.setLoading(false);
        };

        const success = (result) => {
            if (hasIn('status', result) && result.status === 0) {
                let nodes = result.response;
                nodes = hasIn('l1', nodes) ? nodes['l1'] : [];
                this.resourceCount = hasIn('resources_count', nodes) ? nodes['resources_count'] : -1;
                nodes = hasIn('nodes', nodes) ? nodes['nodes'] : [];
                callback(this.processChildren(nodes));
            } else {
                error();
            }
            this._editorService.setLoading(false);
        };

        return Api.getTreeChildren(this.http, nodeId, this.type, success, error);
    }

    public selectNode(node) {
        this.selected.emit(node.data.id);
    }

    /**************************************/
    public onToggle({ node, isExpanded }) {
        const { data } = node;
        const { name, id, resources } = data;
        let { children } = data;

        if (isExpanded && children.length === 0) {
            node.data.children = [{
                name: 'Loading...'
            }];
            this.tree.treeModel.update();
            this.requestChildren(id, nodes => {
                node.data.children = nodes;
                this.tree.treeModel.update();
            })
        } else if (children.length > 0) {
            this.resourceCount = isNil(resources) ? 0 : resources;
        }
    }

    public setIcon({ icon }) {        
        const icons = {
            'root': faSitemap,
            'projects': faBoxes,
            'nodetype': faBox,
            'server': faServer,
            'folder_images': faFolder,
            'image': faFileImage
        };

        return hasIn(icon, icons) ? icons[icon] : null;
    }
}
import { Component, ViewChild, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { TreeModel, NodeMenuItemAction, MenuItemSelectedEvent } from 'ng2-tree';
import { hasIn, isNil } from 'ramda';
import { EditorService } from '../../../services/editor-service/editor.service';
import { Api } from '@app/api';
import { HttpClient } from '@angular/common/http';

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

  constructor(public http: HttpClient, public _editorService: EditorService) { }

  public treeModel: TreeModel;

  ngOnInit() {
    this.resetTreeModel();
  }
  public resetTreeModel() {
    this.treeModel = {
      id: 1,
      value: 'DAM',
      settings: {
        leftMenu: false,
        rightMenu: false
      },
      loadChildren: (callback) => {
        this.requestChildren('1', callback);
      }
    };

    // TODO LOAD PATH TREE
  }
  public processChildren(nodes): Array<any> {
    const children = [];

    for (const nodeId in nodes) {
      if (!isNil(nodeId)) {
        const obj = {
          id: nodeId,
          value: nodes[nodeId]['name']
        };
        if (nodes[nodeId]['type'] === 'folder') {
          obj['loadChildren'] = (callback) => {
            this.requestChildren(nodeId, callback);
          };
        } else {
          obj['settings'] = {
            rightMenu: true,
            menuItems: [
              {
                name: 'Seleccionar', cssClass: '', action: NodeMenuItemAction.Custom
              }
            ]
          };
        }

        children.push(obj);
      }
    }

    if (children.length === 0) {
      children.push({ value: 'No hay elementos disponibles...' });
    }

    return children;
  }

  public onMenuItemSelected(e: MenuItemSelectedEvent) {
    const id = e.node.node.id;
    this.selected.emit(id);
  }

  private requestChildren(nodeId: string, callback) {
    const error = () => {
      console.log('error');
      this._editorService.setLoading(false);
    };

    const success = (result) => {
      if (hasIn('status', result) && result.status === 0) {
        let nodes = result.response;
        nodes = hasIn('l1', nodes) ? nodes['l1'] : [];
        nodes = hasIn('nodes', nodes) ? nodes['nodes'] : [];
        callback(this.processChildren(nodes));
      } else {
        error();
      }
      this._editorService.setLoading(false);
    };

    return Api.getTreeChildren(this.http, nodeId, this.type, success, error);
  }

}

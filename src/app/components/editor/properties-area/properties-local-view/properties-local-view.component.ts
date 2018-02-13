import { Component, OnInit } from '@angular/core';
import { reduce, clone, has, isNil, hasIn, keys } from 'ramda';

import { File } from '@models/file';
import { Node } from '@models/node';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { EditorService } from '@services/editor-service/editor.service';
import { EditorComponent } from '@components/editor/editor.component';

@Component({
    selector: 'app-properties-local',
    templateUrl: './properties-local-view.component.html',
    styleUrls: ['./properties-local-view.component.scss']
})
export class PropertiesLocalViewComponent implements OnInit {

    private currentNode: Node;
    private availableAttributes: any;
    private currentProperties: Array<Object>;
    private file: File;
    private propertiesGroups: Object = {
        class: (value: string) => {
            if (isNil(value)) {
                return [];
            }
            return value.split(' ');
        },
        style: (value: string) => {
            if (isNil(value)) {
                return [];
            }
            const _value = value.split(';');
            let result = [];
            _value.reduce((acum, val) => {
                const pairs = val.split(':');
                if (pairs[0] !== '') {
                    const json = {};
                    json[pairs[0]] = pairs[1];
                    result.push(json);
                }
                return result;
            }, result);

            return result;
        }
    };

    constructor(private _editorService: EditorService) { }

    ngOnInit() {
        this._editorService.getFileState().subscribe(file => {
            this.file = file;
        });
        this._editorService.getCurrentNode().subscribe(currentNode => {
            if (!isNil(currentNode)) {
                this.currentNode = currentNode;
                this.availableAttributes = currentNode.getAvailableAttributes();
                this.currentProperties = this.getProperties();
            }
        });
    }

    getProperties(): Array<Object> {
        const props = [];
        this.availableAttributes.map(attr => {
            let attrValue = this.currentNode.getAttribute(attr);
            if (hasIn(attr, this.propertiesGroups)) {
                attrValue = this.propertiesGroups[attr](attrValue);
            }
            props.push({
                name: attr,
                value: attrValue
            });
        });

        return props;
    }

    changeStyle(value) {
        const values = value.map((data) => {
            const key = keys(data)[0];
            return `${key}:${data[key]};`;
        });
        this.changePropertyValue('style', values.join(' '));
    }

    changePropertyValue(property, value) {
        // Modify file with new changes
        const elementContent = this.file.getState().getContent();
        const editContent = reduce(function (acc, _value) {
            return acc.child[_value];
        }, elementContent[this.currentNode.getAreaId()].content, this.currentNode.getPath());

        const hasAttr = has('attr');

        if (!hasAttr(editContent) || editContent['attr'] == null) {
            editContent['attr'] = [];
        }

        editContent['attr'][property] = value;

        // Save new state
        const newFile = this._editorService.newStateFile(editContent, 'Message2');
        this._editorService.setFileState(newFile);

        // Update current node
        this.currentNode.setAttribute(property, value);
        this._editorService.setCurrentNode(this.currentNode);
        this._editorService.setCurrentNodeModify(this.currentNode);
    }
}

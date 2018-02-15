import { Component, OnInit } from '@angular/core';
import { reduce, clone, has, isNil, hasIn, keys, values, isEmpty } from 'ramda';

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
    private currentProperties: Object;
    private file: File;
    private propertiesGroupsActions: Object = {
        class: (value: string) => {
            if (isNil(value) || isEmpty(value)) {
                return [];
            }
            return value.split(' ');
        },
        style: (value: string) => {
            if (isNil(value) || isEmpty(value)) {
                return [];
            }
            const _value = value.split(';');
            const result = [];
            _value.reduce((acum, val) => {
                const pairs = val.split(':');
                if (pairs[0] !== '') {
                    const json = {};
                    json[pairs[0].trim()] = pairs[1];
                    result.push(json);
                }
                return result;
            }, result);

            return result;
        }
    };
    private defaultProperty: string;
    private propertiesGroups: Array<string>;

    constructor(private _editorService: EditorService) {
        this.defaultProperty = 'attributes';
        this.propertiesGroups = [
            'style',
            'class',
            this.defaultProperty
        ];
    }

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

    getProperties(): Object {
        const props = {};
        this.availableAttributes.map(property => {
            let propertyValue = this.currentNode.getAttribute(property);
            if (hasIn(property, this.propertiesGroupsActions)) {
                propertyValue = this.propertiesGroupsActions[property](propertyValue);
            }

            if (this.propertiesGroups.indexOf(property) >= 0) {
                props[property] = propertyValue;
                return;
            }

            const json = {};
            json[property] = propertyValue;
            if (hasIn(this.defaultProperty, props)) {
                props[this.defaultProperty].push(json);
                return;
            }
            props[this.defaultProperty] = [json];
        });
        return props;
    }

    changeStyle(value) {
        const result = value.map((data) => {
            const key = keys(data)[0];
            return `${key}:${data[key]};`;
        });
        this.changePropertyValue('style', result.join(' '));
    }

    changeClass(value) {
        this.changePropertyValue('class', value.join(' '));
    }

    cnageProperty(value) {
        const property = keys(value)[0];
        this.changePropertyValue(property, value[property]);
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
        const newFile = this._editorService.newStateFile(elementContent, 'Message2');
        this._editorService.setFileState(newFile);

        // Update current node
        this.currentNode.setAttribute(property, value);
        this._editorService.setCurrentNode(this.currentNode);
        this._editorService.setCurrentNodeModify(this.currentNode);
    }
}

import { UUID } from 'angular2-uuid';
import { History } from './history';
import { HTMLParser } from '@utils/htmlparser';
import { Serializable } from './interfaces/Serializable';
import { isNil, equals, is, reduce, contains } from 'ramda';

import { XeditMapper } from '@models/schema/xedit-mapper';
import { Converters } from '@utils/converters';
import { Node } from '@models/node';

export class FileHistory {

    static TYPE_JSON = 'json';
    static TYPE_TEXT = 'text';

    message: string;
    content: any;
    type: string;

    // Constructor
    constructor(content: any = null, message: string = null) {
        if (content != null) {
            this.content = content;
            this.message = message;
            this.type = is(String, content) ? FileHistory.TYPE_TEXT : FileHistory.TYPE_JSON;
        }
    }

    /***************** Getters and setters **************************/
    getContent(): any {
        return this.content;
    }

    setContent(content: any): void {
        this.content = content;
    }

    getMessage(): string {
        return this.message;
    }

    setMessage(message: any): void {
        this.message = message;
    }
}

export class File extends History {

    private schemas: Object;
    private metas: Array<Object>;

    constructor(json = null) {

        if (isNil(json)) {
            throw TypeError('Invalid arguments');
        }

        super(File.createContent(json.nodes));
        this.metas = json.metas;

        this.schemas = {};
        if (!isNil(json.nodes)) {
            Object.keys(json.nodes).forEach(nodeKey => {
                this.schemas[nodeKey] = json.nodes[nodeKey].schema;
            });
        }
    }


    /**************** Getters and setter ************************/
    getSchemas() {
        return this.schemas;
    }

    getSchema(nodeKey) {
        return this.schemas[nodeKey];
    }

    getMetas(): Array<Object> {
        return this.metas;
    }

    getMeta(name): Object {
        return this.metas[name];
    }

    setMeta(name: string, value: string) {
        return this.metas[name] = value;
    }
    /***************** PUBLIC METHODS **************************/

    /**
     * Added new state
     */
    newStateWithMessage(content: any, message: string): File {
        super.newState(new FileHistory(content, message));
        return this;
    }

    /**
     * Recovery specific state
     *
     * @param stateId
     */
    recovery(stateId: string) {
        return super.recovery(stateId).then((value) => {
            this.setState(Object.assign(new FileHistory, value));
            return this;
        });
    }

    /***************** STATIC METHODS **************************/

    private static createContent(nodes: JSON) {

        Object.keys(nodes).forEach(property => {
            nodes[property].content = Converters.html2json(nodes[property].content);
        });

        return new FileHistory(nodes, 'Init state');
    }

}

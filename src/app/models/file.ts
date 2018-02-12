
import { UUID } from 'angular2-uuid';
import { History } from './history';
import { HTMLParser } from '@utils/htmlparser';
import { Serializable } from './interfaces/Serializable';
import { isNil, equals, is, reduce, contains } from 'ramda';
import { XeditMapper } from './schema/xedit-mapper';
import { Converters } from '../../utils/converters';
import { Node } from './node';

export class FileHistory {

    static TYPE_JSON = 'json';
    static TYPE_TEXT = 'text';

    content: any;
    type: string;

    // Constructor
    constructor(content: any = null) {
        if (content != null) {
            this.content = content;
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
}

export class File extends History {

    private schemas: Object;
    constructor(json = null) {

        if (isNil(json)) {
            throw TypeError('Invalid arguments');
        }

        super(File.createContent(json.nodes));
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

    /***************** PUBLIC METHODS **************************/

    /**
     * Added new state
     */
    newState(content: any): File {
        super.newState(new FileHistory(content));
        return this;
    }

    /**
     * Recovery specific state
     *
     * @param stateId 
     */
    recovery(stateId: string): void {
        return super.recovery(stateId).then((value) => {
            this.setState(Object.assign(new FileHistory, value));
            return this;
        });
        //return Object.assign(new FileHistory, super.recovery(stateId));
    }

    /***************** STATIC METHODS **************************/

    private static createContent(nodes: JSON) {

        Object.keys(nodes).forEach(property => {
            nodes[property].content = Converters.html2json(nodes[property].content);
        });

        return new FileHistory(nodes);
    }

}

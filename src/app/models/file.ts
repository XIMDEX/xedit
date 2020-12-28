import { History } from './history';
import { isNil, is, hasIn, union } from 'ramda';

import { Converters } from '@utils/converters';
import { Xedit } from '../xedit';

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
    private css: Array<string>;
    private js: Array<string>;
    private metas: Array<Object>;
    private metadata: Object;
    private name: string;

    constructor(json = null) {
        if (isNil(json)) {
            throw TypeError('Invalid arguments');
        }

        super(File.createContent(json.nodes));
        this.metas = json.metas;
        this.css = [];
        this.js = [];
        this.name = json.name;

        const schemas = {};
        if (!isNil(json.nodes)) {
            Object.keys(json.nodes).forEach(nodeKey => {
                const node = json.nodes[nodeKey];
                schemas[nodeKey] = node.schema;

                // convert all css.js resources into a full url path
                const cssPath = hasIn('css', node) ? Converters.getPathByResource(node.css, node.id) : [];
                const jsPath = hasIn('js', node) ? Converters.getPathByResource(node.js, node.id) : [];

                this.css = union(this.css, cssPath);
                this.js = union(this.js, jsPath);
            });
        }

        Xedit.setConf('schemas', schemas);
        Xedit.setConf('baseUrl', json.baseUrl);
        Xedit.setConf('routerMapper', json.routerMapper);
    }

    /**************** Getters and setter ************************/
    getCss() {
        return this.css;
    }

    getJs() {
        return this.js;
    }

    getMetadata(): Object {
        return this.metadata;
    }

    setMetadata(meta: Object) {
        return (this.metadata = meta);
    }

    getName(): string {
        return this.name;
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
        return super.recovery(stateId).then(value => {
            this.setState(Object.assign(new FileHistory(), value));
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

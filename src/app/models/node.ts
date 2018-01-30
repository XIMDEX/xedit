import { equals, isNil } from 'ramda';
import { equal } from 'assert';
import { XeditMapper } from './schema/xedit-mapper';

export class Node {

    static TYPE_IMAGE = 'image';
    static TYPE_VIDEO = 'video';
    static TYPE_OTHER = 'video';

    //Variables
    private uuid: string;
    private name: string;
    private attributes: Object;
    private path: Array<string>;

    //Constructor
    constructor(uuid: string, name: string, path: Array<string>, attributes: Object = {}) {
        if (isNil(path) || isNil(uuid) || isNil(name))
            throw new TypeError('Invalid arguments');

        this.uuid = uuid;
        this.name = name;
        this.path = path;
        this.attributes = attributes;
    }

    //************************************** Getters and setters **************************************/
    getUuid(): string {
        return this.uuid;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getPath(): Array<string> {
        return this.path;
    }

    setPath(path: Array<string>): void {
        this.path = path;
    }

    getAttributes(): Object {
        return this.attributes;
    }

    getAttribute(name: string): any {
        return isNil(this.attributes[name]) ? null : this.attributes[name];
    }

    setAttributes(attributes: Object): void {
        this.attributes = attributes;
    }

    setAttribute(name: string, value: Object): void {
        console.log("OK");
        if (name == XeditMapper.TAG_IMAGE) {
            this.attributes[name] = value;
            this.attributes['src'] = 'http://ajlucena.com/ximdex-4/public_xmd/?action=filemapper&method=nodeFromExpresion&expresion=' + value;
        } else if (!isNil(this.attributes[name]))
            this.attributes[name] = value;
    }

    /***************** PUBLIC METHODS **************************/

    getType() {
        var type = Node.TYPE_OTHER;
        if (equals('img', this.name.toLowerCase())) {
            type = Node.TYPE_IMAGE;
        } else if (equals('video', this.name.toLowerCase())) {
            type = Node.TYPE_VIDEO;
        }
        return type;
    }

    getAvailableAttributes() {
        var attributes = [];
        if (equals(this.getType(), Node.TYPE_IMAGE) && !isNil(this.getAttribute(XeditMapper.TAG_IMAGE))) {
            attributes = [XeditMapper.TAG_IMAGE];
        } else if (equals(this.getType(), Node.TYPE_IMAGE)) {
            attributes = ['src', 'alt', 'style'];
        } else {
            attributes = ['id', 'class', 'style'];
        }
        return attributes;
    }
}

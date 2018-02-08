import { equals, isNil, contains } from 'ramda';
import { XeditMapper } from './schema/xedit-mapper';

export class Node {

    static TYPE_IMAGE = 'image';
    static TYPE_VIDEO = 'video';
    static TYPE_OTHER = 'video';

    // Variables
    private uuid: string;
    private name: string;
    private target: any;
    private attributes: Object;
    private path: Array<string>;

    // Constructor
    constructor(uuid: string, target: any, name: string, path: Array<string>, attributes: Object = {}) {
        if (isNil(path) || isNil(uuid) || isNil(name)) {
            throw new TypeError('Invalid arguments');
        }

        this.uuid = uuid;
        this.name = name;
        this.target = target;
        this.path = path;
        this.attributes = attributes;
    }

    // ************************************** Getters and setters **************************************/
    getUuid(): string {
        return this.uuid;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getTarget(): any {
        return this.target;
    }

    setTarget(target: any): void {
        this.target = target;
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

    getAttribute(name: string, value: any = null): any {
        return isNil(this.attributes[name]) ? null : this.attributes[name];
    }

    setAttributes(attributes: Object): void {
        this.attributes = attributes;
    }

    setAttribute(name: string, value: Object): void {
        if (name === XeditMapper.TAG_IMAGE) {
            this.attributes[name] = value;
            this.attributes['src'] = 'http://ajlucena.com/ximdex-4/public_xmd/?action=filemapper&method=nodeFromExpresion&expresion='
                + value;
        } else if (contains(name, this.getAvailableAttributes())) {
            this.attributes[name] = value;
        }
    }

    /***************** PUBLIC METHODS **************************/

    getType() {
        let type = Node.TYPE_OTHER;
        if (equals('img', this.name.toLowerCase())) {
            type = Node.TYPE_IMAGE;
        } else if (equals('video', this.name.toLowerCase())) {
            type = Node.TYPE_VIDEO;
        }
        return type;
    }

    getAvailableAttributes() {
        let attributes = [];
        if (equals(this.getType(), Node.TYPE_IMAGE) && !isNil(this.getAttribute(XeditMapper.TAG_IMAGE))) {
            attributes = [XeditMapper.TAG_IMAGE, 'width', 'height', 'xe_uuid'];
        } else if (equals(this.getType(), Node.TYPE_IMAGE)) {
            attributes = ['src', 'alt', 'style', 'xe_uuid'];
        } else {
            attributes = ['id', 'class', 'style', 'xe_uuid'];
        }
        return attributes;
    }
}

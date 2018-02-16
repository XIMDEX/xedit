import { equals, isNil, contains, props, reduce, hasIn, is } from 'ramda';

import { XeditMapper } from '@models/schema/xedit-mapper';
import { Converters } from '@utils/converters';
import { Xedit } from '../xedit';

export class Node {

    static TYPE_IMAGE = 'image';
    static TYPE_VIDEO = 'video';
    static TYPE_OTHER = 'video';

    // Variables
    private areaId;
    private uuid: string;
    private target: HTMLElement;
    private schema: any;
    private schemaNode: any;
    private name: string;
    private section: any;
    private attributes: Object;
    private uuidSectionsPath: Array<string>;
    private sectionsPath: Array<string>;

    // Constructor
    constructor(uuid: string, target: any, attributes: Object = {}) {
        if (isNil(uuid) || isNil(name)) {
            throw new TypeError('Invalid arguments');
        }

        this.uuid = uuid;
        this.name = target.tagName.toLowerCase();
        this.target = target;
        this.section = Node.getContainer(this.target);
        this.uuidSectionsPath = Node.getContextPath(this.target, XeditMapper.TAG_EDITOR, XeditMapper.TAG_UUID,
            XeditMapper.TAG_UUID, [], false, true);
        this.sectionsPath = Node.getContextPath(this.target, XeditMapper.TAG_EDITOR,
            XeditMapper.TAG_SECTION_TYPE, XeditMapper.TAG_SECTION_TYPE, [], true);
        this.areaId = this.uuidSectionsPath.shift();
        this.attributes = attributes;

        this.schemaNode = Xedit.getConf('schemas')[this.areaId];
        this.schema = this.schemaNode[this.getSection().getAttribute(XeditMapper.TAG_SECTION_TYPE)];
    }

    // ************************************** Getters and setters **************************************/
    getUuid(): string {
        return this.uuid;
    }

    getTarget(): any {
        return this.target;
    }

    setTarget(target: any): void {
        this.target = target;
    }

    getName(): string {
        return this.name;
    }

    getAreaId(): string {
        return this.areaId;
    }

    getSchema() {
        return this.schema;
    }

    getSchemaNode() {
        return this.schemaNode;
    }

    getSection(): any {
        return this.section;
    }

    getPath(): Array<string> {
        return this.uuidSectionsPath;
    }


    getSectionsPath(): Array<string> {
        return this.sectionsPath;
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
            this.attributes['src'] = `${Xedit.getResourceUrl()}/${value}`;
        } else if (contains(name, this.getAvailableAttributes())) {
            this.attributes[name] = value;
        }
    }

    /********************** PUBLIC METHODS *********************/

    getType() {
        let type = Node.TYPE_OTHER;
        if (equals('img', this.name)) {
            type = Node.TYPE_IMAGE;
        } else if (equals('video', this.name)) {
            type = Node.TYPE_VIDEO;
        }
        return type;
    }

    /**
     * 
     */
    getAvailableAttributes() {
        let attrName = this.name

        if (this.getAttribute(XeditMapper.TAG_SECTION_TYPE, null) != null) {
            attrName = this.getAttribute(XeditMapper.TAG_SECTION_TYPE);
        } else if (this.getAttribute(XeditMapper.TAG_IMAGE, null) != null) {
            attrName = XeditMapper.TAG_IMAGE;
        }

        return XeditMapper.getAvailableAttribute(attrName);
    }

    /*********************** STATIC METHODS ***************************************/
    static getContainer(element, attribute = XeditMapper.TAG_SECTION_TYPE) {
        let container = null;

        if (!isNil(element) && element.hasAttribute(attribute)) {
            container = element;
        }

        return !isNil(container) || isNil(element) || isNil(element.parentNode) ?
            container : Node.getContainer(element.parentNode, attribute);
    }

    /**
     * Calculate uuid path to xedit node
     */
    static getContextPath(element, rootTag = XeditMapper.TAG_EDITOR, hasAttribute = XeditMapper.TAG_UUID,
        attribute = XeditMapper.TAG_UUID, path = [], onlyAttribute = false, rootTagIncluded = false) {
        const parent = element.parentNode;

        if (!isNil(element) && (!onlyAttribute || element.hasAttribute(hasAttribute)) &&
            (element.nodeName.toLowerCase() !== rootTag) || rootTagIncluded) {
            path.unshift(element.getAttribute(attribute));
        }

        return (element.nodeName.toLowerCase() === rootTag || isNil(parent)) ?
            path : this.getContextPath(parent, rootTag, hasAttribute, attribute, path, onlyAttribute, rootTagIncluded);
    }



    /**
     * Get section name according to the language
     *
     * @param section
     * @param lang
     */
    static getSectionLang(section, lang) {
        let name = section.name;
        if (hasIn('lang', section) && is(Object, section.lang) && hasIn(lang, section.lang)) {
            name = section.lang[lang];
        }
        return name;
    }


    /**
     * Get section template
     *
     * @param section
     */
    static getSectionTemplate(section) {
        let template = null;
        if (hasIn('template', section) && is(String, section.template)) {
            template = Converters.json2html(Converters.html2json(section.template));
        }
        return template;
    }
}

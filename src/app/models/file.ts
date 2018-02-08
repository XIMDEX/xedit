
import { UUID } from 'angular2-uuid';
import { History } from './history';
import { HTMLParser } from 'core/htmlparser';
import { Serializable } from './interfaces/Serializable';
import { isNil, equals, is, reduce, contains } from 'ramda';
import { XeditMapper } from './schema/xedit-mapper';

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


    recovery(stateId: string) {
        return Object.assign(new FileHistory, super.recovery(stateId));
    }

    /***************** STATIC METHODS **************************/

    private static createContent(nodes: JSON) {

        Object.keys(nodes).forEach(property => {
            nodes[property].content = File.html2json(nodes[property].content);
        });

        return new FileHistory(nodes);
    }

    private static removeDOCTYPE(html) {
        return html
            .replace(/<\?xml.*\?>\n/, '')
            .replace(/<!doctype.*\>\n/, '')
            .replace(/<!DOCTYPE.*\>\n/, '');
    }

    private static q(v) {
        return '"' + v + '"';
    }

    /**
     * Parse html to json
     *
     * @param html String with html
     * @param hasRootTag If true then root tag will be added
     */
    static html2json(html, hasRootTag = true) {
        const requiredXeditAttributes = [XeditMapper.TAG_SECTION_TYPE];
        html = File.removeDOCTYPE(html);
        const bufArray = [];
        const results = {
            node: 'root',
            child: {},
        };

        HTMLParser(html, {
            start: function (tag, uuid, attrs, unary) {
                // node for this element
                const node = {
                    node: 'element',
                    tag: tag,
                    uuid: isNil(uuid) ? UUID.UUID() : uuid,
                    attr: null
                };
                if (attrs.length !== 0) {
                    node.attr = attrs
                        // filter xe_* attributes except if its are required
                        .filter((attr) => isNil(attr.name.match('xe_')) || contains(attr.name, requiredXeditAttributes))
                        .reduce(function (pre, attr) {
                            const name = attr.name;
                            let value = attr.value;

                            // has multi attibutes
                            // make it array of attribute
                            if (value.match(/ /)) {
                                value = value.split(' ');
                            }

                            // if attr already exists
                            // merge it
                            if (pre[name]) {
                                if (Array.isArray(pre[name])) {
                                    // already array, push to last
                                    pre[name].push(value);
                                } else {
                                    // single value, make it array
                                    pre[name] = [pre[name], value];
                                }
                            } else {
                                // not exist, put it
                                pre[name] = value;
                            }

                            return pre;
                        }, {});
                }
                if (unary) {
                    // if this tag dosen't have end tag
                    // like <img src="hoge.png"/>
                    // add to parents
                    const parent = bufArray[0] || results;
                    if (parent.child === undefined) {
                        parent.child = {};
                    }
                    parent.child[node.uuid] = node;
                } else {
                    bufArray.unshift(node);
                }
            },
            end: function (tag) {
                // merge into parent tag
                const node = bufArray.shift();
                if (node.tag !== tag) {
                    console.error('invalid state: mismatch end tag');
                }

                if (bufArray.length === 0) {
                    results.child[node.uuid] = node;
                } else {
                    const parent = bufArray[0];
                    if (parent.child === undefined) {
                        parent.child = {};
                    }
                    parent.child[node.uuid] = node;
                }
            },
            chars: function (text) {
                const node = {
                    node: 'text',
                    text: text,
                };
                if (bufArray.length === 0) {
                    results.child['text-0'] = node;
                } else {
                    const parent = bufArray[0];
                    if (parent.child === undefined) {
                        parent.child = {};
                    }
                    parent.child['text-' + Object.keys(parent.child).length] = node;
                }
            },
            comment: function (text) {
                const node = {
                    node: 'comment',
                    text: text,
                };
                const parent = bufArray[0];
                if (parent.child === undefined) {
                    parent.child = [];
                }
                parent.child.push(node);
            },
        });

        return hasRootTag ? results : results.child;
    }

    /**
     * Convert json to html
     *
     * @param json Json object with content
     * @param showIds If true added attribute id in tags
     */
    static json2html(json, showIds = true) {
        // Empty Elements - HTML 4.01
        const empty = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param', 'embed'];

        let child = '';
        if (json.child) {
            child = Object.keys(json.child).map(function (uuid: string) {
                return File.json2html(json.child[uuid], showIds);
            }).join('');
        }

        let attr = '';
        if (json.attr) {
            attr = Object.keys(json.attr).map(function (key) {
                let value = json.attr[key];
                if (Array.isArray(value)) {
                    value = value.join(' ');
                }
                return key + '=' + File.q(value);
            }).join(' ');
            if (attr !== '') {
                attr = ' ' + attr;
            }
        }

        if (json.node === 'element') {
            const tag = json.tag;
            const uuid = showIds ? ' xe_uuid="' + json.uuid + '" ' : '';

            if (empty.indexOf(tag) > -1) {
                // empty element
                return '<' + json.tag + uuid + attr + '/>';
            }

            // non empty element
            const open = '<' + json.tag + uuid + attr + '>';
            const close = '</' + json.tag + '>';
            return open + child + close;
        }

        if (json.node === 'text') {
            return json.text;
        }

        if (json.node === 'comment') {
            return '<!--' + json.text + '-->';
        }

        if (json.node === 'root') {
            return child;
        }
    }

    /**
     * Added uuid if attribute not exist
     */
    static addUuidIfAttributeNotExist(node): void {
        const attributes = node.attributes;
        let existProp = false;
        Object.keys(attributes).forEach(prop => {
            if (equals(attributes[prop].name, 'xe_uuid')) {
                existProp = true;
            }
        });
        if (!existProp) {
            node.setAttribute('xe_uuid', UUID.UUID());
        }
    }

}

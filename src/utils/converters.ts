import { isNil, contains, equals, hasIn } from 'ramda';
import { UUID } from 'angular2-uuid';

import { XeditMapper } from '@models/schema/xedit-mapper';
import { HTMLParser } from '@utils/htmlparser';
import { isArray } from 'util';
import { Api } from '../app/api';
import Router from '../app/core/mappers/router';
import { AutoloadModulesService } from '../app/services/autoload-modules-service/autoload-modules.service';
import { XeditNode } from '../app/interfaces/xedit-node';
import { Xedit } from '@app/xedit';

export class Converters {
    private static removeDOCTYPE(html) {
        return html
            .replace(/<\?xml.*\?>\n/, '')
            .replace(/<!doctype.*\>\n/, '')
            .replace(/<!DOCTYPE.*\>\n/, '');
    }

    /**
     * Added root wrap to json
     */
    static addWrapJson(json) {
        return {
            node: 'root',
            child: json
        };
    }
    /**
     * Parse html to json
     *
     * @param html String with html
     * @param hasRootTag If true then root tag will be added
     */
    static html2json(html, hasRootTag = true) {
        html = Converters.removeDOCTYPE(html);
        const bufArray = [];
        const results = {
            node: 'root',
            child: {}
        };

        HTMLParser(html, {
            start: function(tag, uuid, attrs, unary) {
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
                        .filter(attr => Converters.filter(attr.name, attrs))
                        .reduce(function(pre, attr) {
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
            end: function(tag) {
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
            chars: function(text) {
                const node = {
                    node: 'text',
                    text: text
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
            comment: function(text) {
                const node = {
                    node: 'comment',
                    text: text
                };
                const parent = bufArray[0];
                if (parent.child === undefined) {
                    parent.child = [];
                }
                parent.child['comment-' + Object.keys(parent.child).length] = node;
            }
        });

        return hasRootTag ? results : results.child;
    }

    /**
     * Filter attribute
     *
     * @param attr
     * @param attrs
     * @return true if the attribute is valid, otherwise the attribute should be filter
     */
    private static filter(attr, attrs) {
        return contains(attr, XeditMapper.requiredXeditAttributes) ||
            (isNil(attr.match('xe_')) && Converters.filterAttribute(attr, attrs))
            ? true
            : false;
    }

    /**
     * Filter attribute if attrs has a `xe_` attribute and attr exist in a filter_attribute
     * @param attr
     * @param attrs [{name:value},{name2:value2}]  || [name, name2]
     *
     * @return true if the attribute is valid, otherwise the attribute should be filter
     */
    private static filterAttribute(attr, attrs) {
        attrs = isArray(attrs) ? attrs : Object.keys(attrs);
        const xeditAttribute = attrs.reduce((acc, value) => {
            const val = typeof value === 'string' ? value : value.name;
            return contains(val, XeditMapper.requiredXeditAttributes) ? val : acc;
        }, null);

        const settings =
            !isNil(xeditAttribute) &&
            hasIn(xeditAttribute, XeditMapper.ATTRIBUTES) &&
            hasIn('filter_attributes', XeditMapper.ATTRIBUTES[xeditAttribute])
                ? XeditMapper.ATTRIBUTES[xeditAttribute]['filter_attributes']
                : [];

        return !contains(attr, settings);
    }

    /**
     * Convert json to html
     *
     * @param json Json object with content
     * @param showIds If true added attribute id in tags
     */
    static json2html(
        json,
        showIds = true,
        processXedit = true,
        resetIds = false,
        enableHover = true,
        currentNode?: number
    ) {
        // Empty Elements - HTML 4.01
        const empty = [
            'area',
            'base',
            'basefont',
            'br',
            'col',
            'frame',
            'hr',
            'img',
            'input',
            'isindex',
            'link',
            'meta',
            'param',
            'embed'
        ];

        let child = '';
        if (json.child) {
            child = Object.keys(json.child)
                .map(function(uuid: string) {
                    return Converters.json2html(
                        json.child[uuid],
                        showIds,
                        processXedit,
                        resetIds,
                        enableHover,
                        currentNode
                    );
                })
                .join('');
        }

        let attr = '';
        if (json.attr) {
            const tag = json.tag;
            attr = Object.keys(json.attr)
                .filter(val => {
                    return Converters.filter(val, json.attr);
                })
                .map(function(key) {
                    let value = json.attr[key];
                    if (Array.isArray(value)) {
                        value = value.join(' ');
                    }
                    return Converters.parseAttributes(key, value, processXedit, tag, currentNode);
                })
                .join(' ');
            if (attr !== '') {
                attr = ` ${attr}`;
            }

            if (!enableHover) {
                attr += `${XeditMapper.ATTR_HOVER}="false"`;
            }
        }

        if (json.node === 'element') {
            const tag = json.tag;
            let uuid = resetIds ? UUID.UUID() : json.uuid;
            uuid = showIds ? ` ${XeditMapper.TAG_UUID} = "${uuid}"` : '';

            if (empty.indexOf(tag) > -1) {
                // empty element
                return `<${json.tag} ${uuid} ${attr}/>`;
            }

            // non empty element
            const open = `<${json.tag} ${uuid} ${attr}>`;
            const close = `</${json.tag}>`;
            return open + child + close;
        } else if (json.node === 'text') {
            return json.text;
        } else if (json.node === 'comment') {
            return `<!-- ${json.text} -->`;
        } else if (json.node === 'root') {
            return child;
        }
    }

    static json2xedit(
        nodeName: string,
        json: XeditNode,
        modulesService: AutoloadModulesService,
        compData: Object,
        showIds: boolean = true,
        processXedit: boolean = true,
        resetIds: boolean = false,
        enableHover: boolean = true
    ) {
        // Empty Elements - HTML 4.01
        const empty = [
            'area',
            'base',
            'basefont',
            'br',
            'col',
            'frame',
            'hr',
            'img',
            'input',
            'isindex',
            'link',
            'meta',
            'param',
            'embed'
        ];

        let child = '';
        if (json.child) {
            child = Object.keys(json.child)
                .map(function(uuid: string) {
                    return Converters.json2xedit(
                        nodeName,
                        json.child[uuid],
                        modulesService,
                        compData,
                        showIds,
                        processXedit,
                        resetIds,
                        enableHover
                    );
                })
                .join('');
        }

        if (json.node === 'element') {
            const { attr, tag } = json;
            const currentNode = parseInt(nodeName.split('_').pop());
            let { uuid } = json;

            let attrString = '';
            let section: string = null;

            if (!isNil(attr)) {
                if (hasIn('xe_section', attr)) {
                    section = attr['xe_section'];
                }
                attrString = Object.keys(attr)
                    .filter(val => {
                        return Converters.filter(val, attr);
                    })
                    .map(key => {
                        let value = attr[key];
                        if (Array.isArray(value)) {
                            value = value.join(' ');
                        }
                        return Converters.parseAttributes(key, value, processXedit, tag, currentNode);
                    })
                    .join(' ');
            }

            uuid = resetIds ? UUID.UUID() : uuid;
            const uuidStr = showIds ? ` ${XeditMapper.TAG_UUID}="${uuid}"` : '';
            let moduleTag = null;
            let module = null;
            let schema = null;

            if (!isNil(section)) {
                schema = Xedit.getConf('schemas')[nodeName];
                module = hasIn(section, schema) ? schema[section].type : null;
                if (!isNil(module)) {
                    moduleTag = modulesService.getModuleTag(module);
                    module = modulesService.getModule(module);
                }
            }

            if (empty.indexOf(tag) > -1) {
                // empty element
                return `<${tag} ${uuidStr} ${attrString}>`;
            }

            let result = `<${tag} ${uuidStr} ${attrString}>${child}</${tag}>`;
            if (!isNil(moduleTag)) {
                const settings = {
                    options: schema[section].options,
                    actions: schema[section].actions
                };

                const data = {
                    html: result,
                    uuid: uuid,
                    settings
                };

                compData[uuid] = data;

                const openTag = `
                        <${moduleTag}
                            ${!module.hasSlot ? attrString : ''}
                            [content]="data['${uuid}']"
                            [selected]="selected"
                            (selectNode)="changeSelection($event)"
                            (change)="changeContent($event)"
                            (toolbar)="changeToolbar($event)"
                        >`;
                const closeTag = `</${moduleTag}>`;

                if (!module.hasSlot) {
                    result = openTag + closeTag;
                } else {
                    delete data.html;
                    result = openTag + result + closeTag;
                }
            }
            return result;
        } else if (json.node === 'root') {
            return child;
        } else {
            return json.text;
        }
    }

    /**
     * Get the full api path pointing to the resource
     *
     * @param params Object with id  or path of the resource, and id of current node
     */
    private static getPathFromApi(params) {
        return Router.configUrl(Api.getResourceUrl(), params);
    }

    /**
     * Get the full path of a single resource or resource array
     *
     * @param resource String or string array of resources
     * @param currentNode Number node identifier from where to start looking for the resource
     */
    public static getPathByResource(resource: any, currentNode: number) {
        let params = {};
        if (currentNode) {
            params['currentNode'] = currentNode;
        }
        if (Array.isArray(resource)) {
            for (let index in resource) {
                params['id'] = resource[index];
                // array content is overwritten with the value of its full url
                resource[index] = Converters.getPathFromApi(params);
            }
        } else {
            params['id'] = resource;
            resource = Converters.getPathFromApi(params);
        }
        return resource;
    }

    private static parseAttributes(key, value, processXedit, tag = 'a', currentNode) {
        let extraData = '';
        const linkType = hasIn(tag, XeditMapper.LINK_TYPES) ? XeditMapper.LINK_TYPES[tag] : 'href';
        if (processXedit && contains(key, XeditMapper.requiredXeditAttributes)) {
            if (equals(key, XeditMapper.TAG_LINK)) {
                extraData = value;
                if (!/^(f|ht)tps?:\/\//i.test(extraData)) {
                    extraData = Converters.getPathByResource(value, currentNode);
                }
                extraData = `${linkType}="${extraData}"`;
            }
        }
        return `${key}="${value}" ${extraData}`;
    }
}

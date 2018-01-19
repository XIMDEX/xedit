
import { UUID } from 'angular2-uuid';
import { History } from './history';
import { HTMLParser } from 'core/htmlparser';
import { Serializable } from './interfaces/Serializable';
import { isNil } from 'ramda';

export class File extends History {
    schema: JSON;
    content: JSON;

    constructor(json = null) {
        super();
        if (!isNil(json)) {
            this.createContent(json.nodes);
            this.addState(this.content);
        }
    }

    /***************** PRIVATE METHODS **************************/
    private createContent(nodes: JSON) {

        Object.keys(nodes).forEach(property => {
            nodes[property].content = File.html2json(nodes[property].content);
        });

        this.content = nodes;
        return nodes;
    }

    private static removeDOCTYPE(html) {
        return html
            .replace(/<\?xml.*\?>\n/, '')
            .replace(/<!doctype.*\>\n/, '')
            .replace(/<!DOCTYPE.*\>\n/, '');
    }

    private static q = function (v) {
        return '"' + v + '"';
    }

    /***************** STATIC METHODS **************************/
    static html2json = function (html, hasRootTag = true, hasIds = false) {
        html = File.removeDOCTYPE(html);
        var bufArray = [];
        var results = {
            node: 'root',
            child: {},
        };

        console.log(html);

        HTMLParser(html, {
            start: function (tag, uuid, attrs, unary) {
                // node for this element
                var node = {
                    node: 'element',
                    tag: tag,
                    uuid: isNil(uuid) ? UUID.UUID() : uuid,
                    attr: null
                };
                if (attrs.length !== 0) {
                    node.attr = attrs.reduce(function (pre, attr) {
                        var name = attr.name;
                        var value = attr.value;

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
                    var parent = bufArray[0] || results;
                    if (parent.child === undefined) {
                        parent.child = {};
                    }
                    parent.child.push(node);
                } else {
                    bufArray.unshift(node);
                }
            },
            end: function (tag) {
                // merge into parent tag
                var node = bufArray.shift();
                if (node.tag !== tag) console.error('invalid state: mismatch end tag');

                if (bufArray.length === 0) {
                    results.child[node.uuid] = node;
                } else {
                    var parent = bufArray[0];
                    if (parent.child === undefined) {
                        parent.child = {};
                    }
                    parent.child[node.uuid] = node;
                }
            },
            chars: function (text) {
                var node = {
                    node: 'text',
                    text: text,
                };
                if (bufArray.length === 0) {
                    //results.child.push(node);
                } else {
                    var parent = bufArray[0];
                    if (parent.child === undefined) {
                        parent.child = {};
                    }
                    parent.child["text-" + Object.keys(parent.child).length] = node;
                }
            },
            comment: function (text) {
                var node = {
                    node: 'comment',
                    text: text,
                };
                var parent = bufArray[0];
                if (parent.child === undefined) {
                    parent.child = [];
                }
                parent.child.push(node);
            },
        });

        return hasRootTag ? results : results.child;
    };

    static json2html = function (json, showIds = true) {
        // Empty Elements - HTML 4.01
        var empty = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param', 'embed'];

        var child = '';
        if (json.child) {
            child = Object.keys(json.child).map(function (uuid) {
                return File.json2html(json.child[uuid], showIds);
            }).join('');
        }

        var attr = '';
        if (json.attr) {
            attr = Object.keys(json.attr).map(function (key) {
                var value = json.attr[key];
                if (Array.isArray(value)) value = value.join(' ');
                return key + '=' + File.q(value);
            }).join(' ');
            if (attr !== '') attr = ' ' + attr;
        }

        if (json.node === 'element') {
            var tag = json.tag;
            if (empty.indexOf(tag) > -1) {
                // empty element
                return '<' + json.tag + attr + '/>';
            }

            var uuid = showIds ? ' xe_uuid="' + json.uuid + '" ' : '';

            // non empty element
            var open = '<' + json.tag + uuid + attr + '>';
            var close = '</' + json.tag + '>';
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

    static addUuidToHtml = function (html) {
        var json = this.html2json(html);
        return this.json2html(json);
    }
}

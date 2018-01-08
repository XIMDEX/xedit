import HTMLParser from 'html2json/lib/Pure-JavaScript-HTML5-Parser/htmlparser.js';
import { UUID } from 'angular2-uuid';

export class File {
    schema: JSON;
    content: JSON;

    /***************** PRIVATE METHODS **************************/
    private static removeDOCTYPE = function (html) {
        return html
            .replace(/<\?xml.*\?>\n/, '')
            .replace(/<!doctype.*\>\n/, '')
            .replace(/<!DOCTYPE.*\>\n/, '');
    }

    private static q = function (v) {
        return '"' + v + '"';
    }

    /***************** STATIC METHODS **************************/
    static html2json = function (html) {
        html = File.removeDOCTYPE(html);
        var bufArray = [];
        var results = {
            node: 'root',
            child: [],
        };

        HTMLParser(html, {
            start: function (tag, attrs, unary) {
                // node for this element
                var node = {
                    node: 'element',
                    tag: tag,
                    uuid: UUID.UUID(),
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
                        parent.child = [];
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
                    results.child.push(node);
                } else {
                    var parent = bufArray[0];
                    if (parent.child === undefined) {
                        parent.child = [];
                    }
                    parent.child.push(node);
                }
            },
            chars: function (text) {
                var node = {
                    node: 'text',
                    text: text,
                };
                if (bufArray.length === 0) {
                    results.child.push(node);
                } else {
                    var parent = bufArray[0];
                    if (parent.child === undefined) {
                        parent.child = [];
                    }
                    parent.child.push(node);
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
        return results;
    };

    static json2html = function (json) {
        // Empty Elements - HTML 4.01
        var empty = ['area', 'base', 'basefont', 'br', 'col', 'frame', 'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param', 'embed'];

        var child = '';
        if (json.child) {
            child = json.child.map(function (c) {
                return File.json2html(c);
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

            var uuid = ' xe:id="' + json.uuid + '" '

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
}

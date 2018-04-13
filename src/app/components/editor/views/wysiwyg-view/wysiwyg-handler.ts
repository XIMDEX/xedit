import $ from 'jquery';
import { UUID } from 'angular2-uuid';
import sanitizeHtml from 'sanitize-html'

// TIYMCE
import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/media';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/textcolor';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/colorpicker';

import Commands from './dam/api/Commands';
import FilterContent from './dam/core/FilterContent';
import Buttons from './dam/ui/Buttons';

declare let tinymce: any;

// DATEPICKER
import 'bootstrap-datepicker';
import { isNil, equals, hasIn, isEmpty, join, union, contains, uniq } from 'ramda';
import { state } from '@angular/core';
import { WysiwygViewComponent } from './wysiwyg-view.component';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { File } from '@models/file';
import { EditorService } from '@services/editor-service/editor.service';
import { Converters } from '@utils/converters';
import { Xedit } from '@app/xedit';
import { isArray } from 'util';


export class WysiwygHandler {

    static STYLES_ALL = 'all';
    static TAGS_ALL = 'all';

    static handlers = {
        'date': WysiwygHandler.initDatePicker,
        'text': WysiwygHandler.initTinymce
    };

    static executeHandler(type: string, args: any, defaultMethod: Function = function () { }) {
        const handlers = WysiwygHandler.handlers;
        handlers[type] ? handlers[type](args) : defaultMethod(args);
    }

    /**********************************     TINYMCE  *******************************************/

    /**
     * Clear tinymce
     */
    static clearTinymce() {
        tinymce.remove();
    }
    /**
     * Init tinymce editor and added events
     */
    static initTinymce(args) {
        if (tinymce.activeEditor == null || !WysiwygHandler.isSameEditor(tinymce.activeEditor,
            args.node.getSection().getAttribute(XeditMapper.TAG_UUID))) {
            WysiwygHandler.clearTinymce();
            WysiwygHandler.addPlugins();
            const toolbar = WysiwygHandler.generateToolbar(args.node.getSchema());
            const fixed_toolbar_container = !isEmpty(toolbar) ? '#toolbar' : false;

            tinymce.init({
                dam_url: Xedit.getResourceUrl(),
                max_chars: 30000,
                id: args.node.getSection().getAttribute(XeditMapper.TAG_UUID),
                target: args.node.getSection(),
                inline: true,
                branding: false,
                fixed_toolbar_container: fixed_toolbar_container,
                menubar: false,
                toolbar: toolbar,
                plugins: WysiwygHandler.getAvailablePlugins(args.node.getSchema()),
                skin_url: 'assets/skins/x-edit',
                valid_elements: '*[*]',
                setup: editor => {
                    editor.on('Nodechange', (e) => {
                        console.log(e);
                        const ele = e.element;
                        const sibling = ele.previousSibling;
                        if (sibling && typeof sibling.getAttribute === 'function') {
                            if (sibling.getAttribute(XeditMapper.TAG_UUID) == ele.getAttribute(XeditMapper.TAG_UUID)) {
                                ele.setAttribute(XeditMapper.TAG_UUID, UUID.UUID());
                                sibling.removeAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED);
                            }
                        }
                        /*const element = e.element;
                        const id = element.getAttribute(XeditMapper.TAG_UUID);
                        function isParentId(parents, elementId) {
                            let is = false;
                            if (!isNil(parents)) {
                                parents.forEach(parent => {
                                    if (equals(parent.getAttribute(XeditMapper.TAG_UUID), elementId)) {
                                        is = true;
                                        parent.removeAttribute('xe_w_selected');
                                    }
                                });
                            }
                            return is;
                        }
                        if (isNil(id) || isParentId(e.parents, id)) {
                            element.setAttribute(XeditMapper.TAG_UUID, UUID.UUID());
                        }*/

                        /*if (!isNil(args.node.getTarget()) && !equals(args.node.getTarget().getAttribute(XeditMapper.TAG_UUID),
                            element.getAttribute(XeditMapper.TAG_UUID))) {
                            args.service.setCurrentNode(args.service.parseToNode(element));
                        }*/

                    });
                    editor.on('Paste', (e) => {
                        e.preventDefault();
                        let data = e.clipboardData.getData('text/plain');
                        let html = e.clipboardData.getData('text/html');
                        if (html) {
                            data = sanitizeHtml(html);
                        }
                        data = WysiwygHandler.resetIdsFromString(data);
                        document.execCommand('insertHTML', false, data);

                        const contentTag = editor.bodyElement;
                        const content = editor.getContent();
                        args.service.save(contentTag, content, 'Change section ' + args.node.getSection().getAttribute('xe_section'));
                    });
                    editor.on('change', (evt: Event) => {
                        const contentTag = editor.bodyElement;
                        const content = editor.getContent();
                        args.service.save(contentTag, content, 'Change section ' + args.node.getSection().getAttribute('xe_section'));
                    });
                    editor.on('init', (evt: Event) => {
                        tinymce.execCommand('mceFocus', false, editor.id);
                        args.service.setCurrentNode(args.node);
                    });

                    editor.on('hide', (e) => {
                        console.log('OK');
                        tinymce.remove(editor);
                    });

                    editor.on('blur', (e) => {
                        // TODO FIX atovar
                        const xedit = e.target.bodyElement;
                        const links = xedit.getElementsByTagName('a');
                        if (!isNil(links)) {
                            for (let i = 0; i < links.length; i++) {
                                links[i].onclick = (evt) => {
                                    evt.preventDefault();
                                    return false;
                                };
                            }
                        }
                        args.service.getFileStateValue().snapshot();
                        /*const promise = new Promise(
                            () => {
                                const loop = window.setInterval(() => {
                                    try {
                                        if (tinymce.activeEditor.id !== editor.id || editor.isHidden()) {
                                            window.clearInterval(loop);
                                            tinymce.remove(editor);
                                        } else {
                                            editor.hide();
                                        }
                                    } catch (e) {
                                        window.clearInterval(loop);
                                    }
                                }, 30);

                            }
                        );*/
                        return false;
                    });
                }
            });
        }
    }

    private static resetIdsFromString(text) {
        function replaceIndex(string, at, repl) {
            let pos = -1;
            return string.replace(/ xe_uuid=\"[^"]*\" */g, (match) => {
                pos++;
                if (pos === at) {
                    return repl;
                }
                return match;
            });
        }

        let occurrences = text.match(/ xe_uuid=\"[^"]*\" */g);
        occurrences = occurrences != null ? occurrences.length : 0;
        for (let i = 0; i < occurrences; i++) {
            text = replaceIndex(text, i, ' xe_uuid="' + UUID.UUID() + '" ');
        }

        return Converters.json2html(Converters.html2json(text));
    }

    private static isSameEditor(editor, id) {
        return editor.targetElm.hasAttribute('xe_uuid') && equals(editor.targetElm.getAttribute('xe_uuid'), id);
    }

    private static addPlugins() {
        tinymce.PluginManager.add('dam', function (editor) {
            FilterContent.setup(editor);
            Commands.register(editor);
            Buttons.register(editor);
        });
    }

    private static generateToolbar(schema) {
        /*'styleselect | link dam | bold italic underline |  aligncenter alignjustify |' +
            ' bullist numlist outdent indent |fontsizeselect'*/
        /*'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify
        | numlist bullist outdent indent  | removeformat'*/
        let toolbar = '';
        if (hasIn('options', schema)) {
            if (hasIn('styles', schema.options)) {
                toolbar += this.toolbarStyles(schema.options.styles);
            }

            if (hasIn('tags', schema.options)) {
                toolbar += this.toolbarTags(schema.options.tags);
            }
        }

        toolbar = toolbar.trim();
        return !isEmpty(toolbar) ? toolbar : false;
    }

    private static toolbarStyles(styles: Array<string> | string) {
        const stylesValue = {};
        const groups = {
            group1: {
                bold: 'bold', italic: 'italic', underline: 'underline', strikethrough: 'strikethrough', color: 'forecolor',
                background: 'backcolor'
            },
            others: {
                ol: 'numlist', ul: 'bullist', table: "table"
            },
            align: {
                alignright: 'alignright', aligncenter: 'aligncenter', alignleft: 'alignleft', alignjustify: 'alignjustify'
            },
            indent: {
                outdent: 'outdent', indent: 'indent'
            },
            font: {
                fontsize: 'fontsizeselect'
            }
        };

        if (typeof (styles) === 'string') {
            styles = equals(styles, WysiwygHandler.STYLES_ALL) ? Object.keys(groups) : [];
        }

        styles.forEach(style => {
            if (hasIn(style, groups)) {
                WysiwygHandler.addValue(stylesValue, style, Object.values(groups[style]));
            } else {
                for (const group in groups) {
                    if (hasIn(style, groups[group])) {
                        WysiwygHandler.addValue(stylesValue, group, [groups[group][style]]);
                    }
                }
            }
        });

        let result = '';
        for (const styleValue in stylesValue) {
            if (!isNil(stylesValue[styleValue])) {
                result += uniq(stylesValue[styleValue]).join(' ') + ' | ';
            }
        }

        return result.replace(/(\s\|\s)$/g, '');
    }
    private static toolbarTags(tags: Array<string> | string) {
        const tagsValue = {};
        const groups = {
            buttons: {
                a: 'link', img: 'dam', video: 'dam', audio: 'dam'
            },
            formats: {
            }
        };

        if (typeof (tags) === 'string') {
            tags = equals(tags, WysiwygHandler.TAGS_ALL) ? Object.keys(groups) : [];
        } else {
            tags = Object.keys(tags);
        }

        tags.forEach(style => {
            if (hasIn(style, groups)) {
                WysiwygHandler.addValue(tagsValue, style, Object.values(groups[style]));
            } else {
                for (const group in groups) {
                    if (hasIn(style, groups[group])) {
                        WysiwygHandler.addValue(tagsValue, group, [groups[group][style]]);
                    }
                }
            }
        });

        let result = ' ';
        for (const tagValue in tagsValue) {
            if (equals(tagValue, 'buttons')) {
                result += uniq(tagsValue[tagValue]).join(' ');
            }
        }
        return result;
    }

    private static addValue(object: Object, property: string, value: Array<string> | string) {
        if (hasIn(property, object)) {
            object[property] = union(object[property], value);
        } else {
            object[property] = value;
        }
    }

    private static getAvailablePlugins(schema) {
        /*['link', 'table', 'image', 'paste', 'dam']*/
        const plugins = ''; // 'searchreplace autolink image link media hr anchor advlist lists textcolor imagetools colorpicker';
        return 'dam searchreplace autolink link media hr anchor advlist lists textcolor colorpicker table';
    }
    /**********************************     DATEPICKER  *******************************************/
    /**
     * Init datepicker
     */
    static initDatePicker(args) {
        $(document).ready(function () {
            'use strict';
            const element = $(args.node.getSection());
            if (element.children().length === 0) {
                const date = element.html();
                element.html('<input type="text" value="' + date + '">');

                const input = element.children();
                input.datepicker();
                input.datepicker().on('hide', () => {
                    input.datepicker('destroy');
                    element.html(input.val());
                    args.service.save(args.node.getTarget(), element.html(), 'Change section date');
                    args.service.getFileStateValue().snapshot();
                });
                input.on('changeDate', function () {
                    input.datepicker('hide');
                });
                input.datepicker('show');
            }
        });
    }

}

import $ from 'jquery';
import { UUID } from 'angular2-uuid';
import { Xedit } from 'app/core/mappers/xedit';
import { HttpClient } from '@angular/common/http';

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
import './tiny_plugins/eqneditor';

import Commands from './tiny_plugins/dam/api/Commands';
import FilterContent from './tiny_plugins/dam/core/FilterContent';
import Buttons from './tiny_plugins/dam/ui/Buttons';
import TreeCommands from './tiny_plugins/tree/api/Commands';
import TreeFilterContent from './tiny_plugins/tree/core/FilterContent';
import TreeButtons from './tiny_plugins/tree/ui/Buttons';
import dateFormat from 'dateformat';

declare let tinymce: any;

// DATEPICKER
import 'bootstrap-datepicker';
import { isNil, equals, hasIn, isEmpty, union, uniq } from 'ramda';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { Converters } from '@utils/converters';
import Router from '../../../../core/mappers/router';
import { Api } from '@app/api';
import { ClipboardConfigs } from '@app/models/configs/clipboardConfigs';
import { StringHelpers } from '@app/core/helpers/string';

export class WysiwygHandler {
    static STYLES_ALL = 'all';
    static TAGS_ALL = 'all';

    static handlers = {
        date: WysiwygHandler.initDatePicker,
        text: WysiwygHandler.initTinymce
    };

    static executeHandler(type: string, args: any, defaultMethod: Function = function() {}) {
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
        if (
            tinymce.activeEditor == null ||
            !WysiwygHandler.isSameEditor(
                tinymce.activeEditor,
                args.node.getSection().getAttribute(XeditMapper.TAG_UUID)
            )
        ) {
            WysiwygHandler.clearTinymce();
            WysiwygHandler.addPlugins(args.getInfo, args.callback, args.http);
            const toolbar = WysiwygHandler.generateToolbar(args.node.getSchema());
            const fixed_toolbar_container = !isEmpty(toolbar) ? '#toolbar' : false;

            tinymce.init({
                dam_url: function(id) {
                    return Router.configUrl(Api.getResourceUrl(), { id: id });
                },
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
                content_css: [
                    '//fonts.googleapis.com/css?family=Libre+Franklin',
                    '//fonts.googleapis.com/css?family=Vibur'
                ],
                font_formats: 'Normal=libre franklin;Infantil=vibur;',
                setup: editor => {
                    editor.on('Nodechange', e => {
                        const ele = e.element;
                        const sibling = ele.previousSibling;
                        if (sibling && typeof sibling.getAttribute === 'function') {
                            if (sibling.getAttribute(XeditMapper.TAG_UUID) === ele.getAttribute(XeditMapper.TAG_UUID)) {
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
                    editor.on('Paste', e => {
                        e.preventDefault();

                        const copyHtml = args.clipboardConfigs.getConfigs('copy');
                        let data = ClipboardConfigs.copy(e, copyHtml.enable);
                        data = StringHelpers.resetIdsFromString(data);
                        document.execCommand('insertHTML', false, data);

                        const contentTag = editor.bodyElement;
                        const content = editor.getContent();
                        args.service.save(
                            contentTag,
                            content,
                            'Change section ' + args.node.getSection().getAttribute('xe_section')
                        );
                    });
                    editor.on('change', (evt: Event) => {
                        WysiwygHandler.saveDoc(editor, args);
                    });
                    editor.on('init', (evt: Event) => {
                        tinymce.execCommand('mceFocus', false, editor.id);
                        args.service.setCurrentNode(args.node);
                    });

                    editor.on('hide', e => {
                        tinymce.remove(editor);
                    });

                    editor.on('blur', evt => {
                        // TODO FIX atovar
                        const xedit = evt.target.bodyElement;
                        const links = xedit.getElementsByTagName('a');
                        if (!isNil(links)) {
                            for (let i = 0; i < links.length; i++) {
                                links[i].onclick = event => {
                                    event.preventDefault();
                                    return false;
                                };
                            }
                        }
                        WysiwygHandler.saveDoc(editor, args);
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

    public static saveDoc(editor, args) {
        const contentTag = editor.bodyElement;
        const content = editor.getContent();
        args.service.save(contentTag, content, 'Change section ' + args.node.getSection().getAttribute('xe_section'));
    }

    private static isSameEditor(editor, id) {
        return editor.targetElm.hasAttribute('xe_uuid') && equals(editor.targetElm.getAttribute('xe_uuid'), id);
    }

    private static addPlugins(getInfo, callback, http: HttpClient) {
        if (Xedit.getDam() === 'dam') {
            tinymce.PluginManager.add('dam', function(editor) {
                FilterContent.setup(editor);
                Commands.register(editor, getInfo, callback);
                Buttons.register(editor);
            });
        } else {
            tinymce.PluginManager.add('tree', editor => {
                TreeFilterContent.setup(editor);
                TreeCommands.register(editor, http);
                TreeButtons.register(editor);
            });
        }
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
                bold: 'bold',
                italic: 'italic',
                underline: 'underline',
                strikethrough: 'strikethrough',
                color: 'forecolor',
                background: 'backcolor',
                math: 'eqneditor'
            },
            others: {
                ol: 'numlist',
                ul: 'bullist',
                table: 'table'
            },
            align: {
                alignleft: 'alignleft',
                aligncenter: 'aligncenter',
                alignright: 'alignright',
                alignjustify: 'alignjustify'
            },
            indent: {
                outdent: 'outdent',
                indent: 'indent'
            },
            format: {
                formatselect: 'formatselect'
            },
            font: {
                fontselect: 'fontselect',
                fontsize: 'fontsizeselect'
            }
        };

        if (typeof styles === 'string') {
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

    private static getToolBarBtns() {
        const type = Xedit.getDam();
        return {
            a: `${type}_link`,
            img: type,
            video: `${type}_video`,
            audio: `${type}_audio`
        };
    }

    private static toolbarTags(tags: Array<string> | string) {
        const tagsValue = {};
        const groups = {
            buttons: this.getToolBarBtns(),
            formats: {}
        };

        if (typeof tags === 'string') {
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
        return `${Xedit.getDam()} eqneditor searchreplace autolink link media hr anchor advlist lists textcolor colorpicker table`;
    }
    /**********************************     DATEPICKER  *******************************************/
    /**
     * Init datepicker
     */
    static initDatePicker(args) {
        $(document).ready(function() {
            'use strict';
            const hasNode = hasIn('node', args);
            const hasElement = hasIn('element', args);
            const element = hasNode ? $(args.node.getSection()) : hasElement ? $(args.element) : $(args);
            if (element.children().length === 0) {
                const date = element.html();
                element.html('<input type="text" value="' + date + '">');

                const input = element.children();
                input.datepicker({
                    // format: 'dd-mm-yyyy',
                });
                input.datepicker().on('hide', () => {
                    input.datepicker('destroy');
                    const format = !isNil(args.node.getSchema().options.format)
                        ? args.node.getSchema().options.format
                        : 'dd-mm-yyyy';
                    if (element.prop('tagName') === 'TIME') {
                        element.attr('datetime', input.val());
                    }
                    element.html(dateFormat(input.val(), format));
                    if (hasNode) {
                        args.service.save(args.node.getTarget(), element.html(), 'Change section date');
                        args.service.getFileStateValue().snapshot();
                    } else if (hasElement && hasIn('callback', args)) {
                        args.callback(input.val());
                    }
                });
                input.on('changeDate', function() {
                    input.datepicker('hide');
                });
                input.datepicker('show');
            }
        });
    }
}

dateFormat.i18n = {
    dayNames: [
        'Dom',
        'Lun',
        'Mar',
        'Mie',
        'Jue',
        'Vie',
        'Sab',
        'Domingo',
        'Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ],
    monthNames: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ],
    timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM']
};

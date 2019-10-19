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
import { isNil, equals, hasIn, isEmpty } from 'ramda';
import { XeditMapper } from '@models/schema/xedit-mapper';
import Router from '../../../../core/mappers/router';
import { Api } from '@app/api';
import { ClipboardConfigs } from '@app/models/configs/clipboardConfigs';
import { StringHelpers } from '@app/core/helpers/string';
import ToolbarGenerator from '@app/core/generators/toolbar-generator';
import { TinyMCEComponent } from '@app/elements/xedit/tiny-mce/tiny-mce.component';

export class WysiwygHandler {
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
            const toolbar = ToolbarGenerator.generate(TinyMCEComponent.toolbarOptions, args.node.getSchema());
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

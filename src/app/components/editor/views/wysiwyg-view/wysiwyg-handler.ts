import $ from 'jquery';
import { UUID } from 'angular2-uuid';

// TIYMCE
import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';


import Commands from './dam/api/Commands';
import FilterContent from './dam/core/FilterContent';
import Buttons from './dam/ui/Buttons';

declare let tinymce: any;

// DATEPICKER
import 'bootstrap-datepicker';
import { isNil, equals } from 'ramda';
import { state } from '@angular/core';
import { WysiwygViewComponent } from './wysiwyg-view.component';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { File } from '@models/file';
import { EditorService } from '@services/editor-service/editor.service';
import { Converters } from '@utils/converters';


export class WysiwygHandler {

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
            args.node.getTarget().getAttribute(XeditMapper.TAG_UUID))) {
            WysiwygHandler.addPlugins();
            tinymce.init({
                max_chars: 30000,
                id: args.node.getSection().getAttribute(XeditMapper.TAG_UUID),
                target: args.node.getSection(),
                inline: true,
                branding: false,
                fixed_toolbar_container: '#toolbar',
                toolbar: 'styleselect | link dam | bold italic underline |  aligncenter alignjustify |' +
                    ' bullist numlist outdent indent |fontsizeselect',
                plugins: ['link', 'table', 'image', 'paste', 'dam'],
                skin_url: 'assets/skins/lightgray',
                content_style: '.mce-content-body{ line-height: unset !important; }  .mce-content-focus{ outline: inherit !important; }',
                valid_elements: '*[*]',
                setup: editor => {
                    editor.on('Nodechange', (e) => {
                        const element = e.element;
                        if (isNil(element.getAttribute(XeditMapper.TAG_UUID))) {
                            element.setAttribute(XeditMapper.TAG_UUID, UUID.UUID());
                        }

                        if (!isNil(args.node.getTarget()) && !equals(args.node.getTarget().getAttribute(XeditMapper.TAG_UUID),
                            element.getAttribute(XeditMapper.TAG_UUID))) {
                            args.service.setCurrentNode(EditorService.parseToNode(element, args.schemas));
                        }

                    });
                    editor.on('PastePreProcess', (e) => {
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

                        let occurrences = e.content.match(/ xe_uuid=\"[^"]*\" */g);
                        occurrences = occurrences != null ? occurrences.length : 0;
                        for (let i = 0; i < occurrences; i++) {
                            e.content = replaceIndex(e.content, i, ' xe_uuid="' + UUID.UUID() + '" ');
                        }

                        e.content = Converters.json2html(Converters.html2json(e.content));
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
                    editor.on('blur', (e) => {
                        args.service.getFileStateValue().snapshot();
                        const promise = new Promise(
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
                        );
                    });
                }
            });
        }
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

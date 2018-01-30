import $ from "jquery";
import { UUID } from 'angular2-uuid';

// TIYMCE
import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste'

declare var tinymce: any;

//DATEPICKER
import "bootstrap-datepicker";
import { clearTimeout } from "timers";
import { isNil, equals } from 'ramda';
import { File } from '../../models/file';
import { EditorService } from "../../services/editor-service/editor.service";
import { WysiwygViewComponent } from './wysiwyg-view.component';
import { XeditMapper } from "../../models/schema/xedit-mapper";


export class WysiwygHandler {

    static handlers = {
        'date': WysiwygHandler.initDatePicker,
        'body': WysiwygHandler.initTinymce
    }

    static executeHandler(type: string, args: any, defaultMethod: Function = function () { }) {
        var handlers = WysiwygHandler.handlers;
        handlers[type] ? handlers[type](args) : defaultMethod(args);
    }

    /**********************************     TINYMCE  *******************************************/

    /**
     * Init tinymce editor and added events
     */
    static initTinymce(args) {
        tinymce.init({
            target: args.section,
            inline: true,
            branding: false,
            plugins: ['link', 'table', 'image', 'paste'],
            skin_url: 'assets/skins/lightgray',
            valid_elements: '*[*]',
            setup: editor => {
                editor.on('Nodechange', (e) => {
                    var element = e.element;
                    if (isNil(element.getAttribute(XeditMapper.TAG_UUID)))
                        element.setAttribute(XeditMapper.TAG_UUID, UUID.UUID())
                    var currentNode = EditorService.parseToNode(element);
                    args.service.setCurrentNode(currentNode);
                });
                editor.on('PastePreProcess', (e) => {

                    function replaceIndex(string, at, repl) {
                        var pos = -1;
                        return string.replace(/ xe_uuid=\"[^"]*\" */g, (match) => {
                            pos++;
                            if (pos === at) return repl;
                            return match;
                        });
                    }

                    var occurrences = e.content.match(/ xe_uuid=\"[^"]*\" */g).length;
                    for (let i = 0; i < occurrences; i++) {
                        e.content = replaceIndex(e.content, i, ' xe_uuid="' + UUID.UUID() + '" ')
                    }
                });
                editor.on('change', (evt: Event) => {
                    var contentTag = editor.bodyElement;
                    var content = editor.getContent();
                    args.service.save(contentTag, content);
                });
                editor.on('GetContent', (e) => {
                    var node = e.target.selection.getNode();
                    if (isNil(node.getAttribute(XeditMapper.TAG_UUID)))
                        node.setAttribute(XeditMapper.TAG_UUID, UUID.UUID())
                });
                editor.on('init', (evt: Event) => {
                    tinymce.execCommand('mceFocus', false, editor.id);
                });
                editor.on('blur', (e) => {
                    new Promise(
                        () => {
                            const loop = window.setInterval(() => {
                                try {
                                    if (tinymce.activeEditor.id != editor.id || editor.isHidden()) {
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

    /**********************************     DATEPICKER  *******************************************/
    /**
     * Init datepicker
     */
    static initDatePicker(args) {
        $(document).ready(function () {
            'use strict';
            var element = $(args.section);
            if (element.children().length == 0) {
                var date = element.html();
                element.html('<input type="text" value="' + date + '">');

                var input = element.children();
                input.datepicker();
                input.datepicker().on('hide', function (date) {
                    input.datepicker("destroy");
                    element.html(input.val());
                    args.service.save(args.node, element.html());
                });
                input.datepicker("show");
            }
        });
    }

}

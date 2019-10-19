import { Component, OnInit, OnDestroy, SimpleChanges, OnChanges, AfterViewChecked, ViewChild } from '@angular/core';
import { XeditBaseComponent } from '../xedit.base.component';
import { EditorService } from '@app/services/editor-service/editor.service';
import { ClipboardConfigs } from '@app/models/configs/clipboardConfigs';
import { StringHelpers } from '@app/core/helpers/string';
import { XeditMapper } from '@app/models/schema/xedit-mapper';
import { isNil, hasIn, isEmpty, is } from 'ramda';
import ToolbarGenerator from '@app/core/generators/toolbar-generator';
import { toolbarOptions } from './toolbar-mapper';

// TinyMCE Settings
import tinymce from 'tinymce';

import { Subscription } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NodeService } from '@app/services/node-service/node.service';
import { Xedit } from '@app/core/mappers/xedit';
import FilterContent from '@app/components/editor/views/wysiwyg-view/tiny_plugins/dam/core/FilterContent';
import Commands from '@app/components/editor/views/wysiwyg-view/tiny_plugins/dam/api/Commands';
import Buttons from '@app/components/editor/views/wysiwyg-view/tiny_plugins/dam/ui/Buttons';

@Component({
    selector: 'app-tiny-mce',
    templateUrl: './tiny-mce.component.html',
    styleUrls: ['./tiny-mce.component.scss']
})
export class TinyMCEComponent extends XeditBaseComponent implements OnInit, OnDestroy, OnChanges, AfterViewChecked {
    public static toolbarOptions = toolbarOptions;

    public configs: object;
    private currentElement;
    private clipboardConfigs: ClipboardConfigs;
    private hideToolbar = true;
    private editor;

    private subscribeCNM: Subscription;

    constructor(
        private editorService: EditorService,
        private nodeService: NodeService,
        private ngxModal: NgxSmartModalService
    ) {
        super();
        this.clipboardConfigs = new ClipboardConfigs();
    }

    ngOnInit() {
        this.configs = this.getConfigs();
        // Suscribe to node change
        this.subscribeCNM = this.editorService.getCurrentNodeModify().subscribe(currentNode => {
            if (
                currentNode.getAttribute(XeditMapper.TAG_UUID) ===
                this.currentElement.getAttribute(XeditMapper.TAG_UUID)
            ) {
                Object.keys(currentNode.getAttributes()).forEach(attribute => {
                    this.currentElement.setAttribute(attribute, currentNode.getAttribute(attribute));
                });
            }
        });
    }

    ngAfterViewChecked() {
        this.editor = tinymce.get(this.content.uuid);
    }

    ngOnChanges({ selected }: SimpleChanges) {
        if (!isNil(selected) && selected.currentValue !== selected.previousValue && !isNil(this.editor)) {
            this.hideToolbar = !this.isSelected();
            if (this.hideToolbar) {
                this.editor.fire('blur');
                this.editor.fire('focusout');
            }
        }
    }

    ngOnDestroy() {
        this.subscribeCNM.unsubscribe();
        this.nodeService.set(null);
    }

    public selectedNode({ event }) {
        // Clear selected attribute
        this.clearSelecteds();

        // Added selected attribute
        const ele = event.element;
        if (!isNil(ele)) {
            ele.setAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED, 'selected');
            let uuid = ele.getAttribute(XeditMapper.TAG_UUID);
            if (isNil(uuid)) {
                uuid = ele.closest(`[${XeditMapper.TAG_UUID}]`).getAttribute(XeditMapper.TAG_UUID);
            } else {
                this.currentElement = ele;
            }
            this.selectNode.emit(uuid);
        }
    }

    public onChanges({ event, editor }) {
        if (isNil(this.currentElement)) {
            return;
        }
        const uuid = this.currentElement.getAttribute(XeditMapper.TAG_UUID);
        const tag = this.getCurrentTag(editor.bodyElement, uuid);

        if (!isNil(tag) && this.hasChanges(event.level.bookmark, event.lastLevel.beforeBookmark)) {
            this.editorService.save(tag, tag.outerHTML, 'Change section ""');
        }
    }

    private hasChanges(bookmark, beforeBookmark): boolean {
        let hasChange = false;
        if (
            !isNil(bookmark) &&
            hasIn('start', bookmark) &&
            !isNil(bookmark['start']) &&
            !isNil(beforeBookmark) &&
            hasIn('start', beforeBookmark) &&
            !isNil(beforeBookmark['start'])
        ) {
            hasChange = bookmark['start'].length !== beforeBookmark['start'].length;
            if (!hasChange) {
                for (let i = 0; i < bookmark['start'].length; i++) {
                    if (bookmark['start'][i] !== beforeBookmark['start'][i]) {
                        hasChange = true;
                        break;
                    }
                }
            }
        }
        return hasChange;
    }

    private getCurrentTag(content, uuid: string) {
        let value = null;
        for (let i = 0; i < content.children.length; i++) {
            const children = content.children[i];
            if (children.getAttribute(XeditMapper.TAG_UUID) === uuid) {
                value = children;
            } else {
                value = this.getCurrentTag(children, uuid);
            }
            if (!isNil(value)) {
                break;
            }
        }
        return value;
    }

    public pasteContent({ event }) {
        event.preventDefault();

        const copyHtml = this.clipboardConfigs.getConfigs('copy');
        let data = ClipboardConfigs.copy(event, copyHtml.enable);
        data = StringHelpers.resetIdsFromString(data);
        document.execCommand('insertHTML', false, data);
        const tag = event.path[0];

        this.editorService.save(tag, tag.innerHTML, 'Change section ""');
    }

    onBlur({ event }) {
        this.clearSelecteds();
    }

    onFocus(event) {
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
    }

    onClick({ event }) {
        event.stopPropagation();
        this.toolbar.emit(null);
    }

    private clearSelecteds() {
        const elements = document.querySelector(`[${XeditMapper.ATTR_WYSIWYG_SELECTED}]`);
        if (!isNil(elements)) {
            elements.removeAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED);
        }
    }

    private getConfigs(): object {
        this.content.settings.options.tags = { img: {} };
        // this.loadPlugins();
        const toolbar = ToolbarGenerator.generate(TinyMCEComponent.toolbarOptions, this.content.settings);
        const plugins = TinyMCEComponent.getAvailableEditorPlugins();
        const that = this;
        const configs = {
            base_url: '/tinymce/', // Base for assets such as skins, themes and plugins
            suffix: '.min', // This will make Tiny load minified versions of all its assets
            fixed_toolbar_container: '#toolbar',
            skin: 'oxide',
            plugins: plugins,
            toolbar: toolbar,
            inline: true,
            menubar: false,
            valid_elements: '*[*]',
            custom_ui_selector: '.xe_modal',
            setup: editor => {
                // Custom Blur Event to stop hiding the toolbar
                editor.on('blur', function(e) {
                    if (!that.hideToolbar) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
                editor.on('focusout', function(e) {
                    if (!that.hideToolbar) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        };

        if (hasIn('options', this.content.settings)) {
            const { colors = {}, fonts = [], fontsize = [] } = this.content.settings.options;

            // TODO Load from this.content.settings object
            configs['formats'] = {
                bold: { inline: 'strong', styles: { 'font-weight': 'bold' } }
            };

            if (!isEmpty(colors) && is(Object, colors) && !Array.isArray(colors)) {
                for (const color of Object.keys(colors)) {
                    configs['color_map'].push(color);
                    configs['color_map'].push(colors[color]);
                }
            }

            if (!isEmpty(fonts) && Array.isArray(fonts)) {
                const contentCss = [];
                const fontFormat = [];
                for (const font of fonts) {
                    contentCss.push(font.url);
                    fontFormat.push(`${font.label}=${font.name}`);
                }
                configs['content_css'] = contentCss;
                configs['font_formats'] = fontFormat.join(';');
            }

            if (!isEmpty(fontsize) && Array.isArray(fontsize)) {
                configs['fontsize_formats'] = fontsize.join(' ');
            }
        }

        return configs;
    }

    private loadPlugins(getInfo, callback) {
        if (Xedit.getDam() === 'dam') {
            tinymce.PluginManager.add('dam', function(editor) {
                FilterContent.setup(editor);
                Commands.register(editor, getInfo, callback);
                Buttons.register(editor);
            });
        }
    }

    private static getAvailableEditorPlugins(schema = null) {
        return `${Xedit.getDam()} searchreplace autolink link media hr anchor advlist lists table`;
    }
}

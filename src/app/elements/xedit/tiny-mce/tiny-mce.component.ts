import { Component, OnInit, OnDestroy } from '@angular/core';
import { XeditBaseComponent } from '../xedit.base.component';
import { EditorService } from '@app/services/editor-service/editor.service';
import { ClipboardConfigs } from '@app/models/configs/clipboardConfigs';
import { StringHelpers } from '@app/core/helpers/string';
import { XeditMapper } from '@app/models/schema/xedit-mapper';
import { isNil, hasIn } from 'ramda';
import ToolbarGenerator from '@app/core/generators/toolbar-generator';
import { toolbarOptions } from './toolbar-mapper';

import '@components/editor/views/wysiwyg-view/tiny_plugins/dam';
import { DamService } from '@app/services/dam-service/dam.service';
import { Subscription } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NodeService } from '@app/services/node-service/node.service';

@Component({
    selector: 'app-tiny-mce',
    templateUrl: './tiny-mce.component.html',
    styleUrls: ['./tiny-mce.component.scss']
})
export class TinyMCEComponent extends XeditBaseComponent implements OnInit, OnDestroy {
    public static toolbarOptions = toolbarOptions;
    public configs: object;
    private currentElement;
    private clipboardConfigs: ClipboardConfigs;

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

    ngOnDestroy() {
        this.subscribeCNM.unsubscribe();
        this.nodeService.set(null);
        // this.editorService.setCurrentNode(null);
    }

    public selectedNode({ event }) {
        // Clear selected attribute
        this.clearSelecteds();

        // Added selected attribute
        const ele = event.element;
        if (!isNil(ele)) {
            this.currentElement = ele;
            ele.setAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED, 'selected');
            this.selectNode.emit(ele.getAttribute(XeditMapper.TAG_UUID));
        }
    }

    public onChanges({ event, editor }) {
        const uuid = this.currentElement.getAttribute(XeditMapper.TAG_UUID);
        const tag = this.getCurrentTag(editor.bodyElement, uuid);

        if (!isNil(tag) && this.hasChanges(event.level.bookmark, event.lastLevel.beforeBookmark)) {
            this.editorService.save(tag, tag.innerHTML, 'Change section ""');
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
        const toolbar = ToolbarGenerator.generate(TinyMCEComponent.toolbarOptions, this.content.settings);
        const plugins = TinyMCEComponent.getAvailableEditorPlugins();
        const configs = {
            fixed_toolbar_container: '#toolbar',
            skin_url: 'assets/skins/x-edit',
            plugins: plugins,
            toolbar: toolbar,
            inline: true,
            menubar: false,
            valid_elements: '*[*]',
            custom_ui_selector: '.xe_modal',
            setup: function(editor) {
                // Custom Blur Event to stop hiding the toolbar
                editor.on('blur', function(e) {
                    // if (document.activeElement.closest('app-properties-area')) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    // }
                });
                editor.on('focusout', function(e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                });
            }
            // dam_callback: type => {
            //     const modal = this.ngxModal.getModal('imageModal');
            //     modal.removeData();
            //     modal.setData({
            //         fields: this.getImageAttrs()
            //         // settings: {
            //         //     image_size: this.containerSize(),
            //         //     crop_data: this.cropData()
            //         // },
            //         // save: this.changeImage.bind(this)
            //     });
            //     modal.open();

            //     // this.damService.setOpen({
            //     //     type: type
            //     // });
            // }
        };

        if (hasIn('colors', this.content.settings)) {
            const textColorMap = [];
            const colors = this.content.settings.colors;
            for (const color of Object.keys(colors)) {
                textColorMap.push(color);
                textColorMap.push(colors[colors]);
            }
            configs['textcolor_map'] = textColorMap;
        }

        if (hasIn('fonts', this.content.settings)) {
            const contentCss = [];
            const fontFormat = [];
            for (const font of this.content.settings.fonts) {
                contentCss.push(font.url);
                fontFormat.push(`${font.label}=${font.name}`);
            }
            configs['content_css'] = contentCss;
            configs['font_formats'] = fontFormat.join(';');
        }

        if (hasIn('fontsize', this.content.settings)) {
            configs['fontsize_formats'] = this.content.settings.fontsize.join(' ');
        }

        return configs;
    }

    private static getAvailableEditorPlugins(schema = null) {
        return `eqneditor searchreplace autolink link media hr anchor advlist lists textcolor colorpicker table`;
    }
}

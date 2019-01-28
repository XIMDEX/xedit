import { Component, OnInit } from '@angular/core';
import { XeditBaseComponent } from '../xedit.base.component';
import { EditorService } from '@app/services/editor-service/editor.service';
import { ClipboardConfigs } from '@app/models/configs/clipboardConfigs';
import { StringHelpers } from '@app/core/helpers/string';
import { XeditMapper } from '@app/models/schema/xedit-mapper';
import { isNil, hasIn } from 'ramda';

@Component({
    selector: 'app-tiny-mce',
    templateUrl: './tiny-mce.component.html',
    styleUrls: ['./tiny-mce.component.scss']
})
export class TinyMCEComponent extends XeditBaseComponent implements OnInit {
    private currentNode: Node;
    private clipboardConfigs: ClipboardConfigs;
    configs: object;

    private currentElement;

    constructor(private editorService: EditorService) {
        super();
        this.clipboardConfigs = new ClipboardConfigs();
        this.configs = this.getConfigs();
    }

    ngOnInit() {}

    public selectedNode({ event }) {
        // Clear selected attribute
        this.clearSelecteds();

        // Added selected attribute
        const ele = event.element;
        if (!isNil(ele)) {
            this.currentElement = ele;
            ele.setAttribute(XeditMapper.ATTR_WYSIWYG_SELECTED, 'selected');
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

    onBlur() {
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
        return {
            fixed_toolbar_container: '#toolbar',
            skin_url: 'assets/skins/x-edit',
            plugins: 'link table image',
            inline: true,
            menubar: false,
            valid_elements: '*[*]'
        };
    }
}

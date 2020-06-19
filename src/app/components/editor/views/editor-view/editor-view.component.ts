import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { equals, is, isNil } from 'ramda';

import { Api } from '@app/api';
import { AutoloadModulesService } from '@app/services/autoload-modules-service/autoload-modules.service';
import { ClipboardConfigs } from '@app/models/configs/clipboardConfigs';
import { Converters } from '@utils/converters';
import { EditorService } from '@app/services/editor-service/editor.service';
import { HandlerEditor } from '@app/core/handler-editor/handler-editor';
import { HttpClient } from '@angular/common/http';
import { ImageComponent } from '@app/elements/xedit/image/image.component';
import { Node } from '@app/models/node';
import { NodeService } from '@app/services/node-service/node.service';
import Router from '@app/core/mappers/router';
import { SectionComponent } from '@app/elements/xedit/section/section.component';
import { TinyMCEComponent } from '@app/elements/xedit/tiny-mce/tiny-mce.component';
import { ToolbarI } from '@app/models/interfaces/ToolbarI';
import { XeditMapper } from '@app/models/schema/xedit-mapper';
import { XeditNode } from '@app/interfaces/xedit-node';

@Component({
    selector: 'app-editor-view',
    templateUrl: './editor-view.component.html',
    styleUrls: ['./editor-view.component.scss']
})
export class EditorViewComponent implements OnInit, OnDestroy {
    @Output() selectNode: EventEmitter<string> = new EventEmitter();
    @Output() toolbar: EventEmitter<Array<ToolbarI>> = new EventEmitter();

    public content: Array<Object>;
    public cssLinks: Array<string>;
    private jsLinks: Array<string>;

    private subscribeFile;
    private subscribeCN;

    private currentNode: Node;

    constructor(
        private _editorService: EditorService,
        private _moduleService: AutoloadModulesService,
        private nodeService: NodeService,
        public http: HttpClient
    ) {}

    ngOnInit() {
        this._moduleService.addModule('container', SectionComponent);
        this._moduleService.addModule('image', ImageComponent);
        this._moduleService.addModule('text', TinyMCEComponent);
        this.config();
    }

    ngOnDestroy() {
        this.subscribeFile.unsubscribe();
        this.subscribeCN.unsubscribe();
        this.nodeService.set(null);
        this._editorService.setCurrentNodeModify(null);
    }

    /**
     * Config component
     */
    config() {
        // Suscribe to file changes
        this.subscribeFile = this._editorService.getFile().subscribe(file => {
            this.cssLinks = file.getCss();
            this.jsLinks = file.getJs();
            this.content = this.parseContentToWysiwygEditor(file.getState().getContent());
        });

        this.subscribeCN = this.nodeService.get().subscribe(currentNode => {
            if (
                !isNil(currentNode) &&
                (isNil(this.currentNode) ||
                    !equals(currentNode.getAttribute(XeditMapper.TAG_UUID), this.currentNode.getUuid()))
            ) {
                this.currentNode = currentNode;
            }
        });
    }

    changeToolbar(toolbarOptions: Array<ToolbarI>) {
        this.toolbar.emit(toolbarOptions);
    }

    changeSelection(uuid: string) {
        this.selectNode.emit(uuid);
    }

    changeContent({ element, content }: any) {
        const args = {
            node: this.currentNode,
            service: this._editorService,
            clipboardConfigs: new ClipboardConfigs(),
            htpp: this.http,
            getInfo: (selectedId, type, setData, errorCallback, extra) => {
                Api.getInfoNode(this.http, selectedId, type, setData, errorCallback, extra);
            },
            callback: ({ type, setData }) => {
                // this._damService.setOpen({
                //     type: type
                // });
                // this._damService.setOnSelect(item => {
                //     if (!isNil(item)) {
                //         Api.getInfoNode(this.http, item.hash, type, setData, null, null);
                //         this._damService.close();
                //     }
                // });
            }
        };
        HandlerEditor.saveDoc(element, content, args);
    }

    /**
     * Transform json content to html with xedit root tag
     *
     * @param content
     */
    private parseContentToWysiwygEditor(content) {
        const renderContent: Array<Object> = [];

        Object.keys(content).forEach(property => {
            const data = is(String, content[property].content)
                ? Converters.html2json(content[property].content)
                : content[property].content;
            const result = {
                node: property,
                editable: content[property].editable,
                html: '',
                data: null
            };

            const currentNode = parseInt(property.split('_').pop());
            const componentData = {};

            const contentHtml = !result.editable
                ? Converters.json2html(data, true, true, false, false, currentNode)
                : Converters.json2xedit(property, data, this._moduleService, componentData, true, true, false, false);

            if (result.editable) {
                result.data = componentData;
            }

            result.html = contentHtml;

            renderContent.push(result);
        });
        return renderContent;
    }

    private noEditableArea(json: XeditNode) {
        const html = Converters.json2html(json, true, true, false, false);
        return `<div class="no-editable">${html}</div>`;
    }

    private parseContentToWysiwygEditorWrapper(property, editable, content) {
        const START_TAG = editable ? `<${XeditMapper.TAG_EDITOR} ${XeditMapper.TAG_UUID}="${property}">` : '';
        const END_TAG = editable ? `</${XeditMapper.TAG_EDITOR}>` : '';
        return `${START_TAG}${content}${END_TAG}`;
    }

    private addHttp(resource: string) {
        if (!/^(f|ht)tps?:\/\//i.test(resource)) {
            resource = Router.configUrl(Api.getResourceUrl(), { id: resource });
        }
        return resource;
    }
}

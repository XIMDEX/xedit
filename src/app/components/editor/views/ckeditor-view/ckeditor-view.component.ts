import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { is } from 'ramda';

import { Converters } from '@utils/converters';
import { EditorService } from '@app/services/editor-service/editor.service';
import { XeditMapper } from '@app/models/schema/xedit-mapper';
import Router from '@app/core/mappers/router';
import { Api } from '@app/api';

import { AutoloadModulesService } from '@app/services/autoload-modules-service/autoload-modules.service';
import { XeditNode } from '@app/interfaces/xedit-node';
import { CkeditorComponent } from '@app/elements/ckeditor/ckeditor.component';

@Component({
    selector: 'app-ckeditor-view',
    templateUrl: './ckeditor-view.component.html',
    styleUrls: ['./ckeditor-view.component.scss']
})
export class CkeditorViewComponent implements OnInit {

    @Output() selectNode: EventEmitter<string> = new EventEmitter();

    public content: Array<Object>;
    public cssLinks: Array<string>;
    private jsLinks: Array<string>;

    private subscribeFile;

    constructor(private _editorService: EditorService, private _moduleService: AutoloadModulesService) { }

    ngOnInit() {
        // this._moduleService.addModule('container', SectionComponent);
        this._moduleService.addModule('text', CkeditorComponent);
        this.config();
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
    }

    changeSelection(uuid: string) {
        this.selectNode.emit(uuid);
    }

    /**
    * Transform json content to html with xedit root tag
    *
    * @param content
    */
    private parseContentToWysiwygEditor(content) {
        let renderContent : Array<Object> = [];
        
        Object.keys(content).forEach(property => {
            const data = is(String, content[property].content) ?
                Converters.html2json(content[property].content) : content[property].content;
            const result = {
                node: property,
                editable: content[property].editable,
                html: ''
            };

            const contentHtml = !result.editable ? Converters.json2html(data, true, true, false, false) : 
                Converters.json2xedit(property, data, this._moduleService, true, true, false, false);

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
        if (!(/^(f|ht)tps?:\/\//i).test(resource)) {
            resource = Router.configUrl(Api.getResourceUrl(), { id: resource });
        }
        return resource;
    }
}

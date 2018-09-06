import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { reduce, clone, has, isNil, keys, hasIn } from 'ramda';

import { File } from '@models/file';
import { Node } from '@models/node';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { EditorService } from '@services/editor-service/editor.service';
import { EditorComponent } from '@components/editor/editor.component';
import { WysiwygHandler } from '@app/components/editor/views/wysiwyg-view/wysiwyg-handler';
import dateformat from 'dateformat';
import Router from '../../../core/mappers/router';
import { DOM } from '@app/models/dom';
import { Api } from '@app/api';
import { HttpClient } from '@angular/common/http';
import { Xedit } from '@app/xedit';

@Component({
    selector: 'app-properties-global',
    templateUrl: './properties-global-view.component.html',
    styleUrls: ['./properties-global-view.component.scss'],
})
export class PropertiesGlobalViewComponent implements OnInit, OnDestroy {
    public metas: Array<Object>;
    public states: Array<Object>;
    private suscribeFile;
    private file: File;
    private baseUrl: string;

    constructor(
        private _editorService: EditorService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.metas = [];
        this.states = [];

        this.baseUrl = Router.BASE_URL;

        this.suscribeFile = this._editorService.getFile().subscribe(file => {
            this.metas = [];
            this.file = file;
            if (file != null) {
                const metas = file.getMetas();
                for (const meta in metas) {
                    if (!isNil(file.getMeta(meta))) {
                        const json = {};
                        this.metas.push(file.getMeta(meta));
                    }
                }
            }
        });

        this.suscribeFile = this._editorService
            .getFileState()
            .subscribe(file => {
                this.states = [];
                if (file != null) {
                    this.states = file.getSnapshots();
                }
            });
    }

    changeMetadata(value, key) {
        const metas = this.file.getMetas();
        for (const meta in metas) {
            if (
                hasIn('name', metas[meta]) &&
                metas[meta]['name'] === key &&
                hasIn('value', metas[meta])
            ) {
                metas[meta]['value'] = value;
            }
        }
        this.file.setMetas(metas);
    }

    createMetaObject(meta: Array<any>): Object {
        const json = {};
        json[meta['name']] = meta['value'];
        return json;
    }

    restoreSnaptshot(key) {
        this._editorService.recoverySnapshot(key);
    }

    ngOnDestroy() {
        this.suscribeFile.unsubscribe();
    }

    applyHandler(evt, meta) {
        const element = evt.target;
        if (meta['type'] === 'date') {
            const args = {
                element: element,
                callback: value => {
                    this.changeMetadata(value, meta.name);
                },
            };
            WysiwygHandler.executeHandler(meta['type'], args);
        } else if (meta['type'] === 'image') {
            this.openTree(evt, 'image', ({ nodeid }) => {
                element['src'] = `${this.baseUrl}${nodeid}`;
                this.changeMetadata(nodeid, meta.name);
            });
        }
    }

    dateNow() {
        const now = new Date();
        return dateformat(now, 'dd-mm-yyyy');
    }

    openTree(evt, type, callback) {
        window['treeModal']
            .openModal('modal-1', type)
            .then(selectedId => {
                Api.getInfoNode(
                    this.http,
                    selectedId,
                    type,
                    callback,
                    null,
                    null
                );
            })
            .catch(err => console.log(err));
    }
}

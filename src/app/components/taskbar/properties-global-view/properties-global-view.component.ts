import { Component, OnDestroy, OnInit } from '@angular/core';
import { hasIn, isNil } from 'ramda';

import { Api } from '@app/api';
import { EditorService } from '@services/editor-service/editor.service';
import { File } from '@models/file';
import { HttpClient } from '@angular/common/http';
import Router from '../../../core/mappers/router';
// import { WysiwygHandler } from '@app/components/editor/views/wysiwyg-view/wysiwyg-handler';
import dateformat from 'dateformat';

@Component({
    selector: 'app-properties-global',
    templateUrl: './properties-global-view.component.html',
    styleUrls: ['./properties-global-view.component.scss']
})
export class PropertiesGlobalViewComponent implements OnInit, OnDestroy {
    public metas: Array<Object>;
    public states: Array<Object>;
    private suscribeFile;
    private file: File;
    private baseUrl: string;

    constructor(private _editorService: EditorService, private http: HttpClient) {}

    ngOnInit() {
        this.metas = [];
        this.states = [];

        this.baseUrl = Router.BASE_URL;

        this.suscribeFile = this._editorService.getFile().subscribe(file => {
            this.metas = [];
            this.file = file;
        });

        this.suscribeFile = this._editorService.getFileState().subscribe(file => {
            this.states = [];
            if (file != null) {
                this.states = file.getSnapshots();
            }
        });
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

    dateNow() {
        const now = new Date();
        return dateformat(now, 'dd-mm-yyyy');
    }

    openTree(evt, type, callback) {
        window['treeModal']
            .openModal('modal-1', type)
            .then(selectedId => {
                Api.getInfoNode(this.http, selectedId, type, callback, null, null);
            })
            .catch(err => console.log(err));
    }
}

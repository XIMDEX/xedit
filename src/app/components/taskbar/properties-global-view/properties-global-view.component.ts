import { Component, OnInit, OnDestroy } from '@angular/core';
import { reduce, clone, has, isNil, keys, hasIn } from 'ramda';

import { File } from '@models/file';
import { Node } from '@models/node';
import { XeditMapper } from '@models/schema/xedit-mapper';
import { EditorService } from '@services/editor-service/editor.service';
import { EditorComponent } from '@components/editor/editor.component';

@Component({
    selector: 'app-properties-global',
    templateUrl: './properties-global-view.component.html',
    styleUrls: ['./properties-global-view.component.scss']
})
export class PropertiesGlobalViewComponent implements OnInit, OnDestroy {

    private metas: Array<Object>;
    private states: Array<Object>;
    private suscribeFile;
    private file: File;

    constructor(private _editorService: EditorService) { }

    ngOnInit() {
        this.metas = [];
        this.states = [];

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

        this.suscribeFile = this._editorService.getFileState().subscribe(file => {
            this.states = [];
            if (file != null) {
                this.states = file.getSnapshots();
            }
        });
    }

    changeMetadata(value, key) {

        const metas = this.file.getMetas();
        for (let meta in metas) {
            if (hasIn('name', metas[meta]) && metas[meta]['name'] == key && hasIn('value', metas[meta])) {
                metas[meta]['value'] = value;
            }
        }
        this.file.setMetas(metas);
    }

    ñ
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
}

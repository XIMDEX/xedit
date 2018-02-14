import { Component, OnInit, OnDestroy } from '@angular/core';
import { reduce, clone, has } from 'ramda';

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

    constructor(private _editorService: EditorService) { }

    ngOnInit() {
        this.metas = [];
        this.states = [];

        this.suscribeFile = this._editorService.getFile().subscribe(file => {
            this.metas = [];
            if (file != null) {
                for (const meta in file.getMetas()) {
                    const json = {};
                    json[meta] = file.getMeta(meta);
                    this.metas.push(json);
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

    restoreSnaptshot(key) {
        this._editorService.recoverySnapshot(key);
    }

    ngOnDestroy() {
        this.suscribeFile.unsubscribe();
    }
}

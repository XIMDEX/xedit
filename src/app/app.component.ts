import { hasIn, isNil } from 'ramda';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamMap, Router, ActivatedRoute, Params } from '@angular/router';

import { EditorService } from '@services/editor-service/editor.service';
import { StateService } from '@services/state-service/state.service';
import { Xedit } from '@app/xedit';
import { Api } from '@app/api';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';

    private loadingSuscribe;
    private loading: boolean;

    constructor(private _editorService: EditorService, private _stateService: StateService, public http: HttpClient,
        private route: ActivatedRoute) { }


    /************************************** Life Cycle **************************************/
    ngOnInit() {
        this.loadingSuscribe = this._editorService.isLoading().subscribe(loading => {
            this.loading = loading;
        });
        this.route.queryParams.skip(1).subscribe(params => {
            if (isNil(params.token)) {
                console.error('SOLICITAR LOGIN');
            } else if (isNil(params.url)) {
                console.error('API NO DISPINIBLE');
            } else {
                Xedit.setToken(params.token);
                Xedit.setApiUrl(params.url);
                this.getDocument(params);
            }
        });

    }

    ngOnDestroy() {
        this.loadingSuscribe.unsubscribe();
    }

    /************************************** Private Methods **************************************/
    private getDocument(params: Params) {

        this._editorService.setLoading(true);

        if (!isNil(params.nodeId)) {
            const error = () => {
                console.log('error');
                this._editorService.setLoading(false);
            };

            const success = (result) => {
                if (hasIn('status', result) && result.status === 0) {
                    const nodes = result.response;
                    this._editorService.createFile(nodes);
                    this._stateService.setAvailableViews(['wysiwyg', 'text']);
                } else {
                    error();
                }
                this._editorService.setLoading(false);
            };

            return Api.getDocument(this.http, params.nodeId, success, error);
        }
    }
}

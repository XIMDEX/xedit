import { hasIn, isNil, contains } from 'ramda';
import RouterXedit from './core/mappers/router';
import { Xedit } from './core/mappers/xedit';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamMap, Router, ActivatedRoute, Params } from '@angular/router';

import { EditorService } from '@services/editor-service/editor.service';
import { StateService } from '@services/state-service/state.service';
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
        if (hasIn(Xedit.BASE, window)) {
            // TODO Validate $xedit object
            if (!isNil(Xedit.getData()) && Xedit.getData() !== '') {
                this.setDocument(Xedit.getData());
            } else {
                this.getDocument(Xedit.getDocument().id, hasIn('view', Xedit.getDocument()) ? Xedit.getDocument().view : null);
            }
        } else {
            this.route.queryParams.skip(1).subscribe(_params => {
                const params = Object.assign({}, _params);
                if (isNil(params['token[field]']) || isNil(params['token[value]'])) {
                    console.log('Not authentication');
                }
                if (params.url === undefined || isNil(params.url)) {
                    console.error('API NO DISPINIBLE');
                } else {
                    this._editorService.setLoading(true);

                    const url = params.url;
                    delete params.url;
                    const type = hasIn('type', params) ? params.type : null;
                    delete params.type;

                    if (!isNil(params['token[field]']) && !isNil(params['token[value]'])) {
                        params[params['token[field]']] = params['token[value]'];
                    }
                    delete params['token[field]'];
                    delete params['token[value]'];
                    this.getMapper(url, params, type);

                }
            });
        }

    }

    ngOnDestroy() {
        this.loadingSuscribe.unsubscribe();
    }

    /************************************** Private Methods **************************************/
    private getMapper(url, params, view) {

        const error = () => {
            console.log('error');
            this._editorService.setLoading(false);
        };

        const success = (result) => {
            if (hasIn('status', result) && result.status === 0) {
                window['$xedit'] = result.response;
                this.getDocument(params.id, view);
            } else {
                error();
            }
            this._editorService.setLoading(false);
        };

        return Api.getMapper(this.http, url, params, success, error);
    }

    private getDocument(id, view) {

        const error = () => {
            console.log('error');
            this._editorService.setLoading(false);
        };

        const success = (result) => {
            if (hasIn('status', result) && result.status === 0) {
                this.setDocument(result.response, view != null ? view : null);
            } else {
                error();
            }
            this._editorService.setLoading(false);
        };

        return Api.getDocument(this.http, id, success, error);
    }

    private setDocument(nodes, view = null) {
        if (isNil(view) || !contains(view, ['wysiwyg', 'text'])) {
            view = 'wysiwyg';
        }

        this._editorService.createFile(nodes);
        this._stateService.setAvailableViews(['wysiwyg', 'text']);
        this._stateService.setCurrentView(view);
    }

}

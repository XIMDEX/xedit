import { hasIn } from 'ramda';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

import { EditorService } from '@services/editor-service/editor.service';
import { StateService } from '@services/state-service/state.service';


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
        this.route.queryParams.subscribe(params => {
            if (hasIn('url', params)) {
                this.getDocument(params.url);
            }
        });

    }

    ngOnDestroy() {
        this.loadingSuscribe.unsubscribe();
    }

    /************************************** Private Methods **************************************/
    private getDocument(url: string) {

        this._editorService.setLoading(true);

        return this.http.get(url).subscribe(
            (result: any) => {
                if (hasIn('status', result) && result.status === 0) {
                    const nodes = result.response;
                    this._editorService.createFile(nodes);
                    this._stateService.setAvailableViews(['wysiwyg', 'text']);
                } else {
                    console.error('Invalid url');
                }

                this._editorService.setLoading(false);
            },
            error => {
                console.log('error');
            }
        );
    }
}

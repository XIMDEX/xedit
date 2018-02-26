import { hasIn } from 'ramda';
import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
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

    constructor(private _editorService: EditorService, private _stateService: StateService, private http: Http, private route: ActivatedRoute) { }


    /************************************** Life Cycle **************************************/
    ngOnInit() {
        console.log(this.route.snapshot.queryParamMap);
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

        return this.http.get(url).subscribe(data => {

            const json = data.json();
            const nodes = json.response;
            this._editorService.createFile(nodes);
            this._stateService.setAvailableViews(['wysiwyg', 'text']);

            this._editorService.setLoading(false);
        });
    }
}

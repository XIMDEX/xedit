import { Component, ViewChild } from '@angular/core';
import { TaskbarComponent } from '../../../x-edit/src/app/components/taskbar/taskbar.component';
import { PropertiesViewComponent } from './components/properties-view/properties-view.component';
import { EditorComponent } from '../../../x-edit/src/app/components/editor/editor.component';
import { EditorService } from './services/editor-service/editor.service';
import { OnInit, OnDestroy } from '../../../x-edit/node_modules/@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';

    private loadingSuscribe;
    private loading: boolean;

    constructor(private _editorService: EditorService) { }


    /************************************** Life Cycle **************************************/
    ngOnInit() {
        this.loadingSuscribe = this._editorService.isLoading().subscribe(loading => {
            this.loading = loading;
        });
    }

    ngOnDestroy() {
        this.loadingSuscribe.unsubscribe();
    }

    /************************************** Private Methods **************************************/
}


import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileReaderEvent } from '../../interfaces/file-reader-event-target';
import { equals, contains, isNil, indexOf, remove } from 'ramda';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { File } from '@models/file';
import { DOM } from '@models/dom';
import { StateService } from '@services/state-service/state.service';
import { EditorService } from '@services/editor-service/editor.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-taskbar',
    templateUrl: './taskbar.component.html',
    styleUrls: ['./taskbar.component.scss'],
})
export class TaskbarComponent implements OnInit {

    @ViewChild('viewMenu') viewMenu: ElementRef;
    private file: File;
    private currentView: string;
    private availableViews: Array<string> = [];

    constructor(private _editorService: EditorService, private _stateService: StateService, private http: HttpClient,
        private _notification: NotificationsService) {
        this.currentView = '';
    }

    /************************************ LIFE CYCLE *******************************************/
    ngOnInit() {
        this._editorService.getFile().subscribe(obsFile => {
            this.file = obsFile;
        });

        this._stateService.getCurrentView().subscribe(currentView => this.currentView = currentView);
        this._stateService.getAvailabelViews().subscribe(availableViews => this.availableViews = availableViews);
    }

    /********************************** END LIFE CYCLE *****************************************/

    undo() {
        this._editorService.setLoading(true);
        this._editorService.lastStateFile();
    }


    redo() {
        this._editorService.setLoading(true);
        this._editorService.nextStateFile();
    }

    showComponent(component) {
        this._stateService.setCurrentView(component);
        this.toggleMenu();
    }

    isShowedComponent(component): boolean {
        return contains(component, this.availableViews);
    }

    isActivatedComponent(component): boolean {
        return equals(this.currentView, component);
    }

    isDisabledComponent(component): boolean {
        return this.isActivatedComponent(component) || !this.isShowedComponent(component);
    }

    hasMultiViews(): boolean {
        return this.availableViews.length > 1;
    }

    nextAvailable() {
        return this.file != null && this.file.hasNextState();
    }

    previousAvailable() {
        return this.file != null && this.file.hasPreviousState();
    }

    closeMenu() {
        if (!isNil(this.viewMenu)) {
            DOM.element(this.viewMenu)
                .removeClass('opened');
        }
    }

    toggleMenu() {
        DOM.element(this.viewMenu)
            .toggleClass('opened');
    }

    save() {
        this._editorService.setLoading(true);
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const json = JSON.stringify(this._editorService.getUpdatedDocument());
        const response = this.http.post(
            'http://localhost/ximdex4/api/?_action=document/10133/set',
            json, { headers: headers }
        ).subscribe(
            (data: any) => {
                if (data.status === 0) {
                    this._notification.success('Guardado', 'El documento ha sido guardado.', {
                        timeOut: 3000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true
                    });
                } else {
                    this._notification.error('Error', 'Se ha producido un error al guardar el documento.', {
                        timeOut: 3000,
                        showProgressBar: true,
                        pauseOnHover: true,
                        clickToClose: true
                    });
                }
                this._editorService.setLoading(false);
            },
            error => {
                this._notification.error('Error', 'Se ha producido un error al guardar el documento.', {
                    timeOut: 3000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true
                });
                this._editorService.setLoading(false);
            }
        );
    }

    load() {
        (<HTMLInputElement>document.getElementById('open_html')).value = '';
        document.getElementById('open_html').click();
    }

    onFileSelect(event) {
        const file = event.target.files[0];
        if (file.type === 'application/json') {
            const reader: FileReader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            reader.onload = (fileReaderEvent: FileReaderEvent) => {
                const json = JSON.parse(fileReaderEvent.target.result);
                const nodes = json.response;
                this._editorService.createFile(nodes);
            };

            this._stateService.setAvailableViews(['wysiwyg', 'text']);

            reader.onerror = (evt) => {
                console.error('Error loading file');
            };
        }
    }
}

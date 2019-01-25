import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { isNil } from 'ramda';
import { HttpClient } from '@angular/common/http';

import { File } from '@models/file';
import { DOM } from '@models/dom';
import { StateService } from '@services/state-service/state.service';
import { EditorService } from '@services/editor-service/editor.service';
import { NotificationsService } from 'angular2-notifications';

import { faBars, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { StateConfigs } from '@models/configs/statesConfigs';
import { trigger, transition, style, animate } from '@angular/animations';
import { Api } from '@app/api';
import { Xedit } from '@app/xedit';

@Component({
    selector: 'app-taskbar',
    templateUrl: './taskbar.component.html',
    styleUrls: ['./taskbar.component.scss'],
    animations: [
        trigger('toggleAtributes', [
            transition(':enter', [
                style({ transform: 'translate(-50%, -100%)', opacity: 0 }),
                animate('250ms', style({ transform: 'translate(-50%, 0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translate(-50%, 0)', opacity: 1 }),
                animate('250ms', style({ transform: 'translate(-50%, -100%)', opacity: 0 }))
            ])
        ])
    ]
})
export class TaskbarComponent implements OnInit, AfterViewChecked {
    @ViewChild('viewMenu') viewMenu: ElementRef;

    private file: File;
    private currentView: string;
    private availableViews: Array<string> = [];
    public title: string;
    public displayToggle: boolean;
    public blockStates: boolea;

    // State Configs
    private stateConfigs: StateConfigs;
    public toogleStateConfigs: boolean;
    private configs: Array<Object>;
    public stateActive: boolean;

    // ICONS
    public faBars = faBars;
    public faEye = faEyeSlash;

    constructor(
        private _editorService: EditorService,
        private _stateService: StateService,
        private http: HttpClient,
        private _notification: NotificationsService,
        private cdr: ChangeDetectorRef
    ) {
        this.currentView = '';
        this.title = 'Document';
        this.displayToggle = false;

        this.toogleStateConfigs = false;
        this.configs = [];
        this.blockStates = false;
    }

    /************************************ LIFE CYCLE *******************************************/
    ngOnInit() {
        this.stateConfigs = new StateConfigs();
        this._editorService.getFile().subscribe(obsFile => {
            this.file = obsFile;
            if (!isNil(obsFile)) {
                this.title = obsFile.getName();
            }
        });

        this._stateService.getCurrentView().subscribe(currentView => (this.currentView = currentView));
        this._stateService.getAvailabelViews().subscribe(availableViews => (this.availableViews = availableViews));
    }

    ngAfterViewChecked() {
        if (isNil(this.stateActive) && !isNil(this.stateConfigs.isActive())) {
            this.stateActive = this.stateConfigs.isActive();
            this.toggleElementStateIcon();
            this.cdr.detectChanges();
        }
    }

    /********************************** END LIFE CYCLE *****************************************/

    undo() {
        if (!this.blockStates && this.previousAvailable()) {
            this.blockStates = true;
            this._editorService.setLoading(true);
            this._editorService.lastStateFile().then(() => {
                this._editorService.setLoading(false);
                this.blockStates = false;
            });
        }
    }

    redo() {
        if (!this.blockStates && this.nextAvailable()) {
            this.blockStates = true;
            this._editorService.setLoading(true);
            this._editorService.nextStateFile().then(() => {
                this._editorService.setLoading(false);
                this.blockStates = false;
            });
        }
    }

    showComponent(component) {
        this._stateService.setCurrentView(component);
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
            DOM.element(this.viewMenu).removeClass('opened');
        }
    }

    save() {
        this._editorService.setLoading(true);

        const error = () => {
            console.error('ERROR SAVE DOCUMENT');
            this._editorService.setLoading(false);
            this._notification.error(
                'Error',
                'Se ha producido un error al guardar el documento.',
                Xedit.NOTIFICATION_DEFAULT_SETTINGS
            );
        };

        const success = result => {
            if (result.status === 0) {
                this._editorService.setLoading(false);
                this._notification.success(
                    'Guardado',
                    'El documento ha sido guardado.',
                    Xedit.NOTIFICATION_DEFAULT_SETTINGS
                );
            } else {
                error();
            }
        };

        Api.saveDocument(this.http, this._editorService.getUpdatedDocument(), success, error);
    }

    load() {
        (<HTMLInputElement>document.getElementById('open_html')).value = '';
        document.getElementById('open_html').click();
    }

    toggleAttributes(event) {
        DOM.element(event.target).toggleClass('selected');
        this.displayToggle = !this.displayToggle;
    }

    closeAttributes(evt) {
        const title = document.getElementById('xe-task-title');

        DOM.element(title).removeClass('selected');

        const element = evt.target;

        // if ($(element).parents('app-tree-modal').length === 0) {
        //     this.displayToggle = false;
        // }
    }

    toggleStates(event) {
        this.stateConfigs.getConfigs();
        alert('toggle');
    }
    openStates(event) {
        event.stopPropagation();
        this.toogleStateConfigs = true;
        this.configs = this.stateConfigs.getConfigs();
    }

    closeStates() {
        this.toogleStateConfigs = false;
    }

    saveStateConfigs(evt) {
        this.configs = evt;
        this.stateConfigs.setConfigs(evt);
    }

    toggleElementState() {
        this.stateActive = this.stateConfigs.toggleActive();
        this.toggleElementStateIcon();

        this._editorService.setElementsState(!this.stateActive);
    }

    toggleElementStateIcon() {
        this.faEye = !this.stateActive ? faEye : faEyeSlash;
    }
}

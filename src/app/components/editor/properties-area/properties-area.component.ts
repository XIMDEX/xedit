import { isNil } from 'ramda';
import {
    Component,
    OnInit,
    ViewChild,
    AfterViewChecked,
    ChangeDetectorRef,
    Input,
    EventEmitter,
    Output
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Node } from '@models/node';
import { EditorService } from '@services/editor-service/editor.service';
import { CollapsibleHeaderComponent } from 'angular2-collapsible';
import { Toolbar } from '@app/models/toolbar';
import { NodeService } from '@app/services/node-service/node.service';

@Component({
    selector: 'app-properties-area',
    templateUrl: './properties-area.component.html',
    styleUrls: ['./properties-area.component.scss']
})
export class PropertiesAreaComponent implements OnInit, AfterViewChecked {
    @ViewChild('toggleCollapsible') collapsible: CollapsibleHeaderComponent;

    private currentNode: Node;
    private availableViews: Array<string> = ['standard', 'lite'];
    private toolbarOptions: Array<Toolbar>;
    public isOpen: boolean;
    public selectedView: string;
    public nodeName: string;
    private start: boolean;

    @Input() configs: Array<Object>;
    @Output() updated: EventEmitter<any> = new EventEmitter();

    constructor(
        private _editorService: EditorService,
        private nodeService: NodeService,
        private cdr: ChangeDetectorRef,
        private route: ActivatedRoute
    ) {
        this.nodeName = '';
        this.isOpen = false;
        this.start = true;
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.selectedView = this.availableViews.includes(params.view) ? params.view : 'standard';
        });

        this.nodeService.get().subscribe(currentNode => {
            if (!isNil(currentNode)) {
                this.currentNode = currentNode;
                this.nodeName = currentNode.getName();
            }
        });

        this._editorService.getToolbarOptions().subscribe(currentOptions => {
            if (!isNil(currentOptions)) {
                this.toolbarOptions = currentOptions;
            } else {
                this.toolbarOptions = [];
            }
        });
    }

    ngAfterViewChecked() {
        if (this.start) {
            this.openMenu();
            this.start = false;
            this.cdr.detectChanges();
        }
    }

    public hasToolbarOptions() {
        return Array.isArray(this.toolbarOptions) && this.toolbarOptions.length > 0;
    }

    private changeView(viewName: string) {
        this.selectedView = viewName;
        this.openMenu();
    }

    public toggleMenu() {
        this.isOpen = !this.isOpen;
        this.collapsible.click();
    }

    private openMenu() {
        if (!this.isOpen) {
            this.collapsible.click();
            this.isOpen = true;
        }
    }

    updateClipboard(evt, object) {
        object.selected = evt;
        this.updateClipboardConfigs();
    }

    updateClipboardConfigs() {
        this.updated.emit(this.configs);
    }
}

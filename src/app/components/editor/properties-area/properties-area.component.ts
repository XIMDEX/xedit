import { isNil } from 'ramda';
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef, Input, EventEmitter, Output } from '@angular/core';

import { Node } from '@models/node';
import { EditorService } from '@services/editor-service/editor.service';
import { CollapsibleHeaderComponent } from 'angular2-collapsible';

@Component({
    selector: 'app-properties-area',
    templateUrl: './properties-area.component.html',
    styleUrls: ['./properties-area.component.scss']
})
export class PropertiesAreaComponent implements OnInit, AfterViewChecked {

    @ViewChild('toggleCollapsible') collapsible: CollapsibleHeaderComponent;

    private currentNode: Node;
    private availablesViews: Array<string> = [
        'local'
    ];
    private isOpen: boolean;
    protected selectedView: String;
    private nodeName: String;
    private start: Boolean;

    @Input() configs: Array<Object>;
    @Output() updated: EventEmitter<any> = new EventEmitter();

    constructor(private _editorService: EditorService, private cdr: ChangeDetectorRef) {
        this.nodeName = '';
        this.isOpen = false;
        this.selectedView = 'local';
        this.start = true;
    }

    ngOnInit() {
        this._editorService.getCurrentNode().subscribe(currentNode => {
            if (!isNil(currentNode)) {
                this.currentNode = currentNode;
                this.nodeName = currentNode.getName();
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

    private changeView(viewName: string) {
        this.selectedView = viewName;
        this.openMenu();
    }

    private toggleMenu() {
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

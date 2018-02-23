import { isNil } from 'ramda';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Node } from '@models/node';
import { EditorService } from '@services/editor-service/editor.service';

@Component({
    selector: 'app-properties-area',
    templateUrl: './properties-area.component.html',
    styleUrls: ['./properties-area.component.scss']
})
export class PropertiesAreaComponent implements OnInit {

    @ViewChild('toggleCollapsible') collapsible: ElementRef;

    private currentNode: Node;
    private availablesViews: Array<string> = [
        'local',
        'global'
    ];
    private isOpen: boolean = false;
    protected selectedView: String = 'local';
    private nodeName: String;

    constructor(private _editorService: EditorService) {
        this.nodeName = '';
    }

    ngOnInit() {
        this._editorService.getCurrentNode().subscribe(currentNode => {
            if (!isNil(currentNode)) {
                this.currentNode = currentNode;
                this.nodeName = currentNode.getName();
            }
        });
    }

    private changeView(viewName: string) {
        this.selectedView = viewName;
    }

    private toggleMenu() {
        this.isOpen = !this.isOpen;
        this.collapsible.nativeElement.click();
    }

}

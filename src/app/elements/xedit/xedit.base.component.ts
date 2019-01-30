import { hasIn } from 'ramda';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';

export class XeditBaseComponent implements OnInit {
    public static hasSlot = false;

    @Input() content: any;
    @Input() selected: string;

    @Output() selectNode: EventEmitter<string> = new EventEmitter();
    @Output() change: EventEmitter<{}> = new EventEmitter();
    @Output() toolbar: EventEmitter<{}> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    isSelected() {
        return hasIn('uuid', this.content) && this.selected === this.content.uuid;
    }

    public beforeSelect() {
        if (environment.debug) {
            console.log('Call to beforeSelected method');
        }
    }
    public beforeUnselect() {
        if (environment.debug) {
            console.log('Call to beforeUnselect method');
        }
    }
    public afterSelect() {
        if (environment.debug) {
            console.log('Call to afterSelect method');
        }
    }
    public afterUnselect() {
        if (environment.debug) {
            console.log('Call to afterUnselect method');
        }
    }
}

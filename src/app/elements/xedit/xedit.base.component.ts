import { hasIn } from 'ramda';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';

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
}

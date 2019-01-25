import { hasIn } from 'ramda';
import { OnInit, Input, Output, EventEmitter } from '@angular/core';

export class XeditBaseComponent implements OnInit {
    @Input() content: any;
    @Input() selected: string;

    @Output() selectNode: EventEmitter<string> = new EventEmitter();
    @Output() onChange: EventEmitter<{}> = new EventEmitter();
    @Output() toolbar: EventEmitter<{}> = new EventEmitter();

    public static hasSlot: boolean = false;

    constructor() {}

    ngOnInit() {}

    isSelected() {
        return hasIn('uuid', this.content) && this.selected === this.content.uuid;
    }
}

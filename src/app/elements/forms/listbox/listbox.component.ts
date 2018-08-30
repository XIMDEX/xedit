import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-listbox',
    templateUrl: './listbox.component.html',
    styleUrls: ['./listbox.component.scss']
})
export class ListboxComponent implements OnInit {

    @Input() placeholder: string;
    @Input() options: string;
    @Input() selected: string;

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    changeValues(evt) {
        const ele = evt.target;
        this.selected = ele.options[ele.selectedIndex].value;
        this.emitValue();
    }

    emitValue() {
        this.changeValue.emit(this.selected);
    }

}

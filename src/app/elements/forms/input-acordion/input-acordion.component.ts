import { hasIn, keys, forEachObjIndexed, isNil } from 'ramda';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-acordion',
    templateUrl: './input-acordion.component.html',
    styleUrls: ['./input-acordion.component.scss']
})
export class InputAcordionComponent implements OnInit {

    @Input() title = '';
    @Input() actionText: string;
    @Input() values: Array<string>;

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        // console.log(this.values, typeof this.values);
    }

    removeElement(index) {
        this.values.splice(index, 1);
        this.storeData(this.values);
    }

    addElement() {
        this.values.push('');
    }

    updateElement(evt, index) {
        this.values[index] = evt.target.value;
        this.storeData(this.values);
    }

    storeData(data: Array<string>) {
        this.changeValue.emit(data);
    }
}

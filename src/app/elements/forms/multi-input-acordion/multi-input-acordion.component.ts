import { hasIn, keys, forEachObjIndexed } from 'ramda';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-multi-input-acordion',
    templateUrl: './multi-input-acordion.component.html',
    styleUrls: ['./multi-input-acordion.component.scss']
})
export class MultiInputAcordionComponent implements OnInit {

    @Input('title') title: string;
    @Input('values') values: Array<Object>;

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    private _values: Object = {};


    constructor() { }

    ngOnInit() {
    }

    updateValues(value) {
        const style = keys(value)[0];
        this._values[style] = value[style];

        const result = [];
        forEachObjIndexed((_value, key) => {
            const json = {};
            json[key] = _value;
            result.push(json);
        }, this._values);
        this.changeValue.emit(result);
    }

}

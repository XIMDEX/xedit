import { hasIn, keys, forEachObjIndexed, isNil } from 'ramda';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-multi-input-acordion',
    templateUrl: './multi-input-acordion.component.html',
    styleUrls: ['./multi-input-acordion.component.scss']
})
export class MultiInputAcordionComponent implements OnInit {

    @Input('title') title: string = '';
    @Input('actionText') actionText: string;
    @Input('values') values: Array<Object>;

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    private _values: Object = {};


    constructor() { }

    ngOnInit() {
        this.values.reduce((acc, value) => {
            const key = keys(value)[0];
            this._values[key] = value[key];
            return this._values;
        }, this._values);

    }

    removeElement(index) {
        this.values.splice(index, 1);
        this.storeData(this.values);
    }

    addElement() {
        this.values.push({});
    }

    updateElement(value) {
        const style = keys(value)[0];
        this._values[style] = value[style];

        const result = [];
        forEachObjIndexed((_value, key) => {
            const json = {};
            json[key] = _value.replace(/;$/, '');
            result.push(json);
        }, this._values);

        this.storeData(result);
    }

    storeData(data: Array<any>) {
        this.changeValue.emit(data);
    }
}

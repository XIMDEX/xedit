import { hasIn, keys, forEachObjIndexed, isNil, isEmpty, clone } from 'ramda';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-multi-input-acordion',
    templateUrl: './multi-input-acordion.component.html',
    styleUrls: ['./multi-input-acordion.component.scss']
})
export class MultiInputAcordionComponent implements OnInit {

    @Input('title') title: string;
    @Input('actionText') actionText: string;
    @Input('values') values: Array<Object>;

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    private _values: Object = {};


    constructor() {
        this.title = '';
    }

    ngOnInit() {
        this._values = this.values.reduce((acc, value) => {
            const key = keys(value)[0];
            acc[key] = value[key];
            return acc;
        }, this._values);
    }

    removeElement(index) {
        const key = keys(this.values[index])[0];
        if (hasIn(key, this._values)) {
            delete this._values[key];
        }
        this.storeData(this._values);
    }

    addElement() {
        this.values.push({});
    }

    updateElement({ old: oldValue, new: newValue }) {
        const value = newValue;
        const oldKey = isEmpty(oldValue) ? '' : keys(oldValue)[0];
        const style = keys(value)[0];

        if (isEmpty(oldKey)) {
            this._values[style] = value[style];
        } else {
            const valuesClone = clone(this._values);
            this._values = {};

            for (const key in valuesClone) {
                const json = {};
                if (oldKey !== key) {
                    this._values[key] = valuesClone[key].replace(/;$/, '');
                } else {
                    this._values[style] = value[style];
                }
            }
        }

        this.storeData(this._values);
    }

    storeData(data: Array<any> | Object) {
        if (data instanceof Object && !(data instanceof Array)) {
            const result = [];
            forEachObjIndexed((_value, key) => {
                const json = {};
                json[key] = _value.replace(/;$/, '');
                result.push(json);
            }, data);
            data = result;
        }
        this.changeValue.emit(data);
    }
}

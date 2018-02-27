import { keys, isNil, isEmpty } from 'ramda';
import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-multi-input',
    templateUrl: './multi-input.component.html',
    styleUrls: ['./multi-input.component.scss']
})
export class MultiInputComponent implements OnInit {

    private attrName: string;
    private attrValue: string;

    @Input('data')
    set data(data: Object) {
        this.attrName = keys(data)[0];
        this.attrValue = data[this.attrName];
    }

    @Input('editable') editable: boolean;

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    private hasAttrNameValue: boolean;
    private oldValue: Object;

    constructor() {
        this.editable = false;
    }

    ngOnInit() {
        this.hasAttrNameValue = this.hasAttrName();
        this.oldValue = {};
    }

    isEmptyValue(data) {
        return isNil(data) || isEmpty(data) ? '' : data;
    }

    updateLabel() {
        this.hasAttrNameValue = !this.hasAttrNameValue;
        const json = {};
        json[this.attrName] = this.attrValue;
        this.oldValue = json;
    }

    hasAttrName() {
        return !isNil(this.attrName) && !isEmpty(this.attrName);
    }

    setAttrName(evt) {
        this.attrName = evt.target.value;
        this.hasAttrNameValue = this.hasAttrName();

        if (!isNil(this.attrValue) && !isEmpty(this.attrValue)) {
            this.emitValue();
        }
    }

    changeValues(evt) {
        this.attrValue = evt.target.value;
        this.emitValue();
    }

    emitValue() {
        const json = { old: this.oldValue, new: {} };
        json.new[this.attrName] = this.attrValue;
        this.changeValue.emit(json);
    }

}

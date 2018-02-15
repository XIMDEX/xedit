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

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    private hasAttrNameValue: boolean;

    constructor() { }

    ngOnInit() {
        this.hasAttrNameValue = this.hasAttrName();
    }

    isEmptyValue(data) {
        return isNil(data) || isEmpty(data) ? '' : data;
    }

    hasAttrName() {
        return !isNil(this.attrName) && !isEmpty(this.attrName);
    }

    setAttrName(evt) {
        this.attrName = evt.target.value;
        this.hasAttrNameValue = this.hasAttrName();
    }

    changeValues(evt) {
        this.attrValue = evt.target.value;
        const json = {};
        json[this.attrName] = this.attrValue;
        this.changeValue.emit(json);
    }

}

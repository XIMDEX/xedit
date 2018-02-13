import { keys } from 'ramda';
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

    constructor() { }

    ngOnInit() {
    }

    changeValues(index: string, value: string) {
        const json = {};
        json[index] = value;
        this.changeValue.emit(json);
    }

}

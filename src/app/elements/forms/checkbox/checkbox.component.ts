import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    @Input() placeholder: string;
    @Input() name: string;
    @Input() checked: boolean;

    @Output() changeValue: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.checked = false;
        this.name = '';
        this.placeholder = 'Checkbox';
    }

    ngOnInit() {
    }

    changeValues(evt) {
        this.checked = !this.checked;
        this.emitValue();
    }

    emitValue() {
        this.changeValue.emit(this.checked);
    }

}

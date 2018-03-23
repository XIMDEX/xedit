import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-state-controller',
    templateUrl: './state-controller.component.html',
    styleUrls: ['./state-controller.component.scss']
})
export class StateControllerComponent implements OnInit {

    @Input('configs') configs: Array<Object>;

    @Output() updated: EventEmitter<any> = new EventEmitter();

    constructor() {

    }

    ngOnInit() {
    }

    updateStates(evt, object) {
        object.enable = evt;
        this.updateStateConfigs();
    }

    updateStateConfigs() {
        this.updated.emit(this.configs);
    }

}

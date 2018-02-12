import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-properties-area',
    templateUrl: './properties-area.component.html',
    styleUrls: ['./properties-area.component.scss']
})
export class PropertiesAreaComponent implements OnInit {

    private availablesViews: Array<string> = [
        'local',
        'global'
    ];

    protected selectedView: string = 'local';

    constructor() { }

    ngOnInit() {
    }

    private changeView(viewName: string) {
        this.selectedView = viewName;
    }

}

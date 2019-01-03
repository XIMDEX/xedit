import { Component, OnInit, Input } from '@angular/core';
import { Toolbar } from '@app/models/toolbar';

@Component({
  selector: 'app-properties-toolbar',
  templateUrl: './properties-toolbar.component.html',
  styleUrls: ['./properties-toolbar.component.scss']
})
export class PropertiesToolbarComponent implements OnInit {

  @Input() options: Array<Toolbar> = [];

  constructor() { }

  ngOnInit() {
  }

}

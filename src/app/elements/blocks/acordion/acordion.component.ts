import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.scss']
})
export class AcordionComponent implements OnInit {

  @Input() title: string;
  @Input() className: string;

  public isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

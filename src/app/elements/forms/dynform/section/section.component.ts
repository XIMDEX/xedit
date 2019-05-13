import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() title = '';
  @Input() isHidden: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }
}

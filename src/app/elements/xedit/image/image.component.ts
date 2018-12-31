import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() content: any;

  @Output() selectNode: EventEmitter<string> = new EventEmitter();
  @Output() onChange: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

/**
 * Component that renders a loading screen when requested
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  /** True if loading component should render, False otherwise */
  @Input() show = false;

  /**@ignore */
  constructor() { }

  /**@ignore */
  ngOnInit() {
  }

}

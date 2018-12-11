/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'dam-tab',
  styles: [
    `
    div.pane {
      width:100%;
    }
  `
  ],
  template: `
    <div *ngIf="active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent{
  @Input('tabTitle') title: string;
  @Input() active = false;
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

/**
 * This component represents a facet panel with its posible values
 */
@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css']
})
export class FacetComponent implements OnInit {

  /**
   * The facet object from the list
   */
  @Input() facet = {key: '', label: '', values: {}};
  /**
   * The currently selected facets
   */
  @Input() selected = [];
  /**
   * If the panel is currently hidden, True for hidden, False otherwise
   */
  @Input() hidden = true;
  /**
   * The selected facet option as an output string emitter
   */
  @Output() selectedValue = new EventEmitter<string>();
  /**
   * An array with the values
   */
  valuesArray = [];
  /**@ignore */
  faPlus = faPlus;
  /**@ignore */
  faMinus = faMinus;

  /**@ignore */
  constructor() {}

  /**@ignore */
  ngOnInit() {
    const values = this.selected[this.facet.key];
    if(values.length > 0) {
      this.hidden = false;
    }
  }

  /**
   * Selects or release a desired facet option from the panel
   * @param event The checkbox event
   * @param option The option where the checkbox was pressed
   */
  toggleFacet(event, option) {
    if (event.target.checked) {
      if (!this.valuesArray.includes(option.key)) {
        this.valuesArray.push(option.key);
      }
    } else {
      const index = this.valuesArray.indexOf(option.key);
      if (index !== -1) {
        this.valuesArray.splice(index, 1);
      }
    }
    this.stringifyQuery();
  }

  /**
   * Hide or reveal the facet panel
   */
  togglePanel() {
    this.hidden = !this.hidden;
  }

  /**
   * Creates an string from all the selected facet values
   */
  stringifyQuery() {
    this.selectedValue.emit(this.valuesArray.join(','));
  }

  /**
   * Checks what options are currently selected from this facet
   * @param facet The facet to be checked
   */
  isActive(facet: any) {
    const values = this.selected[this.facet.key];
    const active = values.indexOf(facet.key) >= 0;
    return active;
  }

}

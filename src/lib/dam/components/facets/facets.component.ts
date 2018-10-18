import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../../services/main.service';
import { hasIn } from 'ramda';

/**
 * This component lists all the availables facets given by the API server
 */
@Component({
  selector: 'app-facets',
  templateUrl: './facets.component.html',
  styleUrls: ['./facets.component.css']
})
export class FacetsComponent implements OnInit, OnChanges {

  /**
   * The available facets
   */
  @Input() facets = [];
  /**
   * An array list with all the currently selected facets
   */
  selectedFacets = {};
  /**
   * A query object with all the selected facets
   */
  facetsQuery: Object = {};
  /**@ignore */
  faAngleLeft = faAngleLeft;
  /**@ignore */
  faAngleRight = faAngleRight;
  /**
   * True if facets is opened, False otherwise
   */
  isOpen = false;
  /**
   * The config dict from the general configs mapper
   */
  facetsConfig = null;

  /**@ignore */
  constructor(private mainService: MainService) { }

  /**@ignore */
  ngOnInit() {
    this.facetsConfig = this.mainService.getComponentConfigs('facets');
    this.buildQuery();
  }

  /**@ignore */
  ngOnChanges(changes) {
    this.setSelectedFacets();
  }

  /**
   * Opens the facets panel
   */
  togglePanel() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Maps the current selected facets object and sets the query
   */
  buildQuery() {
    this.facets.map((facet) => {
      this.facetsQuery[facet.key] = '';
    });
  }

  /**
   * Updates the facets query with an output event
   * @param evt The event with the new value
   * @param key The name of the facet
   */
  updateFacetsQuery(evt, key) {
    this.facetsQuery[key] = evt;
    this.mainService.setActiveFacets(this.facetsQuery);
  }

  /**
   * Sets the selected facets array
   */
  setSelectedFacets() {
    this.selectedFacets = {};
    let valuesArray = [];
    for (const index in this.facets) {
      const values = this.facets[index].values;
      const key = this.facets[index].key;
      valuesArray = [];
      for (const option in values) {
        if (hasIn(key, this.facetsQuery) && this.facetsQuery[key].indexOf(option) !== -1) {
          // this.selectedFacets.push(option);
          valuesArray.push(option);
        }
      }
      this.selectedFacets[key] = valuesArray;
    }
  }
}

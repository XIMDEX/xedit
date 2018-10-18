import { Component, OnInit } from '@angular/core';
import { faSearch, faEraser, faSync, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../../../services/main.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

/**
 * Component that holds the search input for the application and some other buttons and
 * options.
 */
@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {
  /**@ignore */
  faSearch = faSearch;
  /**@ignore */
  faEraser = faEraser;
  /**@ignore */
  faSync = faSync;
  /**@ignore */
  faTrash = faTrashAlt;

  /**
   * The search term
   */
  term = '';

  /**
   * Configuration dict extracted from the app configs.
   */
  buttonsConfig = null;

  /**@ignore */
  constructor(
    private mainService: MainService,
    private ngxSmartModalService: NgxSmartModalService) {}

  /**@ignore */
  ngOnInit() {
    this.buttonsConfig = this.mainService.getComponentConfigs('tableSearch').searchButtons;
  }

  /**
   * Sets the search term and forces a new list request to the server.
   */
  search() {
    this.mainService.setSearchTerm(this.term);
    this.mainService.setCurrentPage(1);
  }

  /**
   * Open the resource modal.
   */
  handleResourceModal() {
    this.ngxSmartModalService.getModal('assets').open();
  }

  /**
   * Resets the search term to an empty string and calls the search method.
   */
  delete() {
    this.term = '';
    this.search();
  }

}

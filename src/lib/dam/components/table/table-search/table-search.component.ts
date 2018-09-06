import { Component, OnInit } from '@angular/core';
import { faSearch, faEraser, faSync, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../../../services/main.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {
  faSearch = faSearch;
  faEraser = faEraser;
  faSync = faSync;
  faTrash = faTrashAlt;
  term = '';
  buttonsConfig = null;

  constructor(
    private mainService: MainService,
    private ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {
    this.buttonsConfig = this.mainService.getComponentConfigs('tableSearch').searchButtons;
  }

  search() {  
    this.mainService.setSearchTerm(this.term); 
    this.mainService.setCurrentPage(1);
  }

  handleResourceModal() {
    this.ngxSmartModalService.getModal('assets').open();
  }

  delete() {
    this.term = '';
    this.search();
  }

}

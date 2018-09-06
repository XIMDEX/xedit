import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MainService } from '../../services/main.service';
import { faStepBackward, faStepForward, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() items: Item[];
  @Input() query: any = {};
  @Output() queryChange = new EventEmitter<any>();
  limit: number;
  currentPage: number;
  totalPages: number;
  activeItems: any[];
  selectedItem: Item;

  paginator: any[];
  pagShorted: boolean;
  tableConfig = null;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.tableConfig = this.mainService.getComponentConfigs('table');
    this.createPaginator();
  }

  ngOnChanges() {
    // this.totalPages = Math.ceil(this.items.length/this.limit);
    this.totalPages = this.query.lastPage;
    const newPage = this.mainService.getCurrentPageValue();
    if (newPage !== this.currentPage) {
      this.changePage(newPage);
    }
    this.createPaginator();
  }

  changePage(newPage: number) {
    if (!isNaN(newPage)) {
      this.currentPage = newPage;
      this.query.page = newPage;
      this.queryChange.emit(this.query);
      this.mainService.setCurrentPage(newPage);
    }
  }

  select(item) {
    this.selectedItem = item;
    this.mainService.setActiveItem(item);
  }

  createPaginator() {
    this.paginator = [];
    if (this.query.lastPage <= 3) {
      this.pagShorted = false;
    } else {
      this.pagShorted = true;
    }
    if (this.currentPage > 2 && this.pagShorted) {
      this.paginator.push({ value: 1, active: false, icon: faStepBackward });
      this.paginator.push({ value: this.currentPage - 1, active: false, icon: faCaretLeft });
    }
    for (let i = 1; i <= this.query.lastPage; i++) {
      if (this.pagShorted) {
        if ((i < this.currentPage + 3 && i > this.currentPage - 3)) {
          this.paginator.push({ value: i, active: i === this.currentPage, icon: null });
        }
      } else {
        this.paginator.push({ value: i, active: i === this.currentPage, icon: null });
      }
    }
    if (this.currentPage < this.query.lastPage - 2 && this.pagShorted) {
      this.paginator.push({ value: this.currentPage + 1, active: false, icon: faCaretRight });
      this.paginator.push({ value: this.query.lastPage, active: false, icon: faStepForward });
    }
  }

}



import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MainService } from '../../services/main.service';
import { faStepBackward, faStepForward, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../models/Item';
import { NgxSmartModalService } from 'ngx-smart-modal';

/**
 * Component that holds the resources as table items and manages pagination,
 * actions and some additional options.
 */
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
    /**
     * The items received by the DAM component
     */
    @Input() items: Item[] = [];
    /**
     * The query as a double bound attribute
     */
    @Input() query: any = {};
    /**
     * The output emitter for the query attribute
     */
    @Output() queryChange = new EventEmitter<any>();
    /**
     * Limit object for displaying page limit in selector
     */
    limitSelect: Object;
    /**
     * Current per page number of items
     */
    limit: number;
    /**
     * Current selected page
     */
    currentPage: number;
    /**
     * Number of total pages given by the response
     */
    totalPages: number;
    /**
     * The current selected item
     */
    selectedItem: Item;
    /**
     * The paginator array data
     */
    paginator: any[];
    /**
     * @ignore
     */
    pagShorted: boolean;
    /**
     * Config object for this component extracted using the Profile mapper
     */
    tableConfig = null;
    /**
     * Mapper for IDs for multiple requests methods
     */
    requestsModel = null;

    /**
     * @ignore
     */
    constructor(private mainService: MainService, private ngxSmartModalService: NgxSmartModalService) {}

    /**
     * @ignore
     */
    ngOnInit() {
        this.currentPage = 1;
        this.tableConfig = this.mainService.getComponentConfigs('table');
        this.requestsModel = this.mainService.getModel('requests');
        this.limitSelect = { label: this.query.perPage, value: this.query.perPage };
        this.createPaginator();
    }

    /**
     * @ignore
     */
    ngOnChanges() {
        // this.totalPages = Math.ceil(this.items.length/this.limit);
        this.totalPages = this.query.lastPage;
        const newPage = this.mainService.getCurrentPageValue();
        if (newPage !== this.currentPage) {
            this.changePage(newPage);
        }
        this.createPaginator();
    }

    /**
     * Changes the active list page.
     *
     * @param {number} newPage The new page
     */
    changePage(newPage: number) {
        if (!isNaN(newPage)) {
            this.currentPage = newPage;
            this.query.page = newPage;
            this.queryChange.emit(this.query);
            this.mainService.setCurrentPage(newPage);
        }
    }

    /**
     * Changes the maximun items per page.
     *
     * @param {number} newLimit The desired maximum
     */
    changeLimit(newLimit: number) {
        this.limit = newLimit;
        this.query.perPage = newLimit;
        this.limitSelect = { label: newLimit, value: newLimit };
        this.queryChange.emit(this.query);
        this.mainService.setCurrentPage(1);
    }

    /**
     * Changes the current selected table item and sets its value in the main service.
     *
     * @param {Item} item The selected item
     */
    select(item: Item) {
        this.selectedItem = item;
        this.mainService.setActiveItem(item);
    }

    /**
     * Deletes from the server the resource previously shown in the delete confirmation modal.
     */
    deleteItem() {
        if (this.ngxSmartModalService.getModal('deleteModal').hasData()) {
            const data = this.ngxSmartModalService.getModal('deleteModal').getData();
            this.mainService.deleteResource(data[this.requestsModel.delete]).subscribe(res => {
                this.mainService.setCurrentPage(this.mainService.getCurrentPageValue());
                this.ngxSmartModalService.getModal('deleteModal').removeData();
                this.ngxSmartModalService.getModal('deleteModal').close();
            });
        }
    }

    /**
     * Creates the paginator data based on info about current and total pages
     */
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
                if (i < this.currentPage + 3 && i > this.currentPage - 3) {
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

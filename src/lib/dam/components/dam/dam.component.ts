import { skip } from 'rxjs/operators';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Item } from '../../models/Item';
import { MainService } from '../../services/main.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { isNil } from 'ramda';
import { DamService } from '@app/services/dam-service/dam.service';

/**
 * Entry point component for the application, is the component in charge of the
 * observation of parameters changes and requests.
 */
@Component({
    selector: 'app-dam',
    templateUrl: './dam.component.html',
    styleUrls: ['./dam.component.css']
})
export class DamComponent implements OnInit {
    /**
     * An array containing all the resources from the response as Item instances
     */
    items: Item[] = [];
    /**
     * A dict with the current query
     */
    query: any = { page: 1, search: '', perPage: 20, lastPage: 1, total: 0 };
    /**@ignore */
    limit = null;
    /**@ignore */
    search = null;
    /**@ignore */
    page: string;
    /**
     * The current selected page
     */
    currentPage = 1;
    /**
     * The current selected search string
     */
    searchTerm = '';
    /**
     * A dict containing the main configurations for the application
     */
    mainConfig = null;
    /**
     * The active item currently selected
     */
    activeItem = null;
    /**
     * A dict containing info about the active facets
     */
    activeFacets = {};
    /**
     * An array of all available facets
     */
    facets = [];
    /**
     * An instance of the mapper for Item model
     */
    imap = null;
    /**
     * Property used to show loading component
     */
    isLoading = false;
    /**
     * Input property for switching the app to a modal
     */
    @Input() popup = false;

    /**
     * Output that emits when a item has been selected
     */
    @Output() onSelect = new EventEmitter<Item>();

    private configs = {
        params: null
    };

    constructor(
        private mainService: MainService,
        private damService: DamService,
        private ngxSmartModalService: NgxSmartModalService
    ) {}

    /**@ignore */
    ngOnInit() {
        this.mainConfig = this.mainService.getComponentConfigs('main');
        this.imap = this.mainService.getModel('item');
        this.limit = this.mainConfig.query.limit;
        this.search = this.mainConfig.query.search;
        this.page = this.mainConfig.query.page.name;
        this.query.perPage = this.mainConfig.query.limit.value;
        this.mainService
            .getCurrentPage()
            .pipe(skip(2))
            .subscribe(data => {
                this.currentPage = data;
                this.getItems();
            });
        this.mainService
            .getSearchTerm()
            .pipe(skip(1))
            .subscribe(data => {
                this.searchTerm = data;
                this.getItems();
            });
        this.mainService
            .getActiveItem()
            .pipe(skip(1))
            .subscribe(data => {
                this.activeItem = data;
                this.onSelect.emit(data);
            });
        this.mainService
            .getActiveFacets()
            .pipe(skip(1))
            .subscribe(data => {
                this.activeFacets = data;
                this.getItems();
            });

        this.damService.isClose().subscribe(data => {
            if (data) {
                this.closeModal();
            }
        });

        this.damService.getOpen().subscribe(data => {
            if (data) {
                this.configs.params = data;
                this.getItems();
                this.openModal();
            }
        });
    }

    /**
     * Appends all current params to query and makes a request storing all resources in
     * the items array
     */
    getItems() {
        let params = new HttpParams();
        params = params.append(this.page, String(this.currentPage));
        params = params.append(this.search.name, this.search.value.replace('$', this.searchTerm));
        params = params.append(this.limit.name, String(this.query.perPage));
        if (!isNil(this.configs.params)) {
            for (const key of Object.keys(this.configs.params)) {
                params = params.append(key, this.configs.params[key]);
            }
        }

        if (!isNil(this.activeFacets)) {
            for (const key in this.activeFacets) {
                params = params.append(key, this.activeFacets[key]);
            }
        }
        this.isLoading = true;
        this.mainService.list(params).subscribe(
            response => {
                this.query.perPage = response['result']['per_page'];
                this.query.lastPage = response['result']['pages'];
                this.query.total = response['result']['total'];
                // this.facets = response['facets'];
                this.mapItems(response['result']['data']);
            },
            err => console.error(err),
            () => (this.isLoading = false)
        );
    }

    /**
     * Map every raw row of data as a typed model class Item
     * @param data The model instance
     */
    mapItems(data) {
        this.items = data.map(o => {
            return new Item(
                o[this.imap.id],
                o[this.imap.title],
                o[this.imap.hash],
                o[this.imap.size] || '',
                o[this.imap.type],
                o[this.imap.image]
            );
        });
    }

    /**
     * Opens himself when in modal state
     */
    openModal() {
        this.getModal().open();
    }

    closeModal() {
        this.configs.params = null;
        this.getModal().close();
    }

    private getModal() {
        return this.ngxSmartModalService.getModal('dam');
    }
}

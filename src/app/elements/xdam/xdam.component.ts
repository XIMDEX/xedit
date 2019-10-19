import { ActionModel, DamComponent, Pager, PagerModelSchema, SearchModel, XDamData, XDamSettings } from '@ximdex/xdam';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';

import { ResourceService } from '@app/services/resource/resource.service';
import { Subscription } from 'rxjs';
import XdamApi from './XdamApi';
import { isNil } from 'ramda';
import { skip } from 'rxjs/operators';

@Component({
    selector: 'app-xdam',
    templateUrl: './xdam.component.html',
    styleUrls: ['./xdam.component.scss']
})
export class XdamComponent implements OnInit, AfterViewInit {
    @ViewChild('xdam') damComponent: DamComponent;

    search: SearchModel;
    items: XDamData;
    settings: XDamSettings;
    action: ActionModel | null = null;
    close = false;

    private isFirstRequest = true;
    private XdamApi: XdamApi;
    private modal: NgxSmartModalComponent;
    private resourceSubscription: { status: Subscription; type: Subscription; onSelect: Subscription };
    private resourceType: string | null = null;
    private onSelectCallback: Function;

    private pagerSchema: PagerModelSchema = {
        total: 'total',
        currentPage: 'current_page',
        lastPage: 'last_page',
        nextPage: 'next_page',
        prevPage: 'prev_page',
        perPage: {
            value: 'per_page'
        }
    };

    constructor(
        private http: HttpClient,
        private resourceService: ResourceService,
        private modalService: NgxSmartModalService
    ) {}

    ngOnInit() {
        this.resourceSubscription = {
            status: this.resourceService
                .getStatus()
                .pipe(skip(1))
                .subscribe(this.onStatusChange.bind(this)),
            type: this.resourceService
                .getType()
                .pipe(skip(1))
                .subscribe(this.onTypeChange.bind(this)),
            onSelect: this.resourceService
                .getOnSelect()
                .pipe(skip(1))
                .subscribe(callback => (this.onSelectCallback = callback))
        };

        this.XdamApi = new XdamApi(this.http);
        this.settings = this.XdamApi.getSettings();
        this.search = new SearchModel();
    }

    ngAfterViewInit(): void {
        this.modal = this.modalService.getModal('resourceModal');
    }

    protected onTypeChange(type: string | null) {
        this.resourceType = type;
    }

    public onStatusChange(status: boolean) {
        this.modal.toggle(status);
        if (status) {
            this.close = false;
            this.sendSearch();
        }
    }

    public resetModal() {
        this.search = new SearchModel();
        this.action = null;
        this.isFirstRequest = true;
        this.items = {
            data: [],
            facets: [],
            pager: null
        };
        this.close = true;
    }

    public sendSearch(data: SearchModel | null = null): void {
        if (this.close) {
            return;
        }

        if (!isNil(data)) {
            this.search.update(data);
        }

        let params = new HttpParams();
        params = params.append('page', String(this.search.page));

        if (!isNil(this.search.content)) {
            params = params.append('search', this.search.content);
        }

        if (!isNil(this.search.facets)) {
            Object.keys(this.search.facets).forEach(index => {
                const value = this.search.facets[index];
                params = params.append(`factes[${index}]`, value.join(','));
            });
        }

        if (!isNil(this.resourceType)) {
            params = params.append('facets[type]', this.resourceType);
        }

        params = params.append('default', this.isFirstRequest ? '1' : '0');
        params = params.append('limit', String(this.search.limit));

        this.XdamApi.list(params).subscribe(({ data: response }) => {
            const { data, facets, ...extra } = response;
            this.items = {
                data,
                facets,
                pager: new Pager(extra, this.pagerSchema)
            };

            if (this.isFirstRequest) {
                this.setDefaultFacet(facets);
            }
        });
    }

    public prepareAction(data: ActionModel) {
        const action = new ActionModel(data);
        const { item } = action;
        if (action.method === 'select') {
            action.status = 'success';
            this.action = action;
            this.onSelectCallback(item);
            this.resourceService.hide();
        }
    }

    public setDefaultFacet(data) {
        const facets = {};

        data.map(({ key, default: defFacet = null }) => {
            if (!isNil(defFacet)) {
                facets[key] = [defFacet];
            }
        });

        this.isFirstRequest = false;
        this.search.update({ facets });
    }
}

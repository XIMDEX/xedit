import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { Pager, PagerModelSchema, SearchModel, XDamData, XDamSettings } from '@ximdex/xdam';

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
    search: SearchModel;
    items: XDamData;
    settings: XDamSettings;

    private isFirstRequest = true;
    private XdamApi: XdamApi;
    private modal: NgxSmartModalComponent;
    private resourceSubscription: Subscription;

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
        this.resourceSubscription = this.resourceService
            .getStatus()
            .pipe(skip(1))
            .subscribe(this.onStatusChange.bind(this));

        this.XdamApi = new XdamApi(this.http);
        this.settings = this.XdamApi.getSettings();
        this.search = new SearchModel();
    }

    ngAfterViewInit(): void {
        this.modal = this.modalService.getModal('resourceModal');
    }

    onStatusChange(status: boolean) {
        this.modal.toggle(status);
        if (status) {
            this.sendSearch();
        }
    }

    public sendSearch(data: SearchModel | null = null): void {
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

    setDefaultFacet(data) {
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

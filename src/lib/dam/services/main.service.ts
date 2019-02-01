import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { hasIn, isNil } from 'ramda';
import RouterMapper from '../mappers/RouterMapper';
import ConfigMapper from '../mappers/ProfileMapper';
import { Item } from '../models/Item';

// const API = environment.API;
// const resourcesAPI = environment.resourcesAPI;

/**
 * Service who acts as a global state for the application.
 */
@Injectable()
export class MainService {
    /**
     * Dict containing options for using with the http client
     */
    private httpOptions = { headers: {}, params: {} };
    /**
     * Stores the current page as an updateable observable
     */
    private currentPage: BehaviorSubject<number>;
    /**
     * Stores the current query search term as an updateable observable
     */
    private searchTerm: BehaviorSubject<string>;
    /**
     * Stores the current active item as an updateable observable
     */
    private activeItem: BehaviorSubject<Item>;
    /**
     * Stores the active facets as an updateable observable
     */
    private activeFacets: BehaviorSubject<Object>;
    /**
     * The token used for auth in queries
     */
    private token = '';
    /**
     * An instance of the RouterMapper
     */
    private settings: RouterMapper;
    /**
     * An instance of the ConfigMapper
     */
    private configs: ConfigMapper;
    /**
     * The application endpoint for queries
     */
    private endPoint = 'resources';

    /**
     * @ignore
     */
    constructor(private http: HttpClient) {
        this.currentPage = new BehaviorSubject<number>(1);
        this.searchTerm = new BehaviorSubject<string>('');
        this.activeItem = new BehaviorSubject<Item>(null);
        this.activeFacets = new BehaviorSubject<Object>({});
        this.settings = new RouterMapper();
        this.configs = new ConfigMapper();

        this.httpOptions.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.getToken()
        });
    }

    /**
     * Gets the token parsed by the mapper.
     */
    getToken() {
        return this.settings.getToken();
    }

    /**
     * Gets the queries routes parsed by the mapper.
     */
    getRoutes() {
        return this.settings.getRoutes();
    }

    /**
     * Create the complete API route used for queries.
     * @param {string} method The desired method from the settings
     * @param {string} name The name of the endpoint
     */
    getRoute(method: string, name: string) {
        let route = hasIn(name, this.getRoutes()) ? (<any>this.getRoutes())[name] : null;
        if (!isNil(route)) {
            route = hasIn(method, route) ? `${this.settings.getBaseUrl()}${route[method]}` : null;
        }
        return route;
    }

    /**
     * Get the mappers between api model and front model.
     * @returns {Object} The models dict
     */
    getModels() {
        return this.settings.getModels();
    }

    /**
     * Get a specified model mapper.
     * @param name The model mapper name
     */
    getModel(name) {
        const models = this.getModels();
        let result = null;
        if (!isNil(models) && hasIn(name, models)) {
            result = models[name];
        }
        return result;
    }

    /**
     * Gets general profile configs from the active profile.
     */
    getGeneralConfigs() {
        return this.configs.getGeneralConfigs();
    }

    /**
     * Gets the desired component profile config from the active profile.
     * @param component The desired component
     */
    getComponentConfigs(component = null) {
        return this.configs.getComponentConfigs(component);
    }

    /**
     * Calls getResources method with the desired request parameters.
     * @param params The parameters
     * @returns {Observable} The response of getResources
     */
    list(params: HttpParams = null) {
        return this.getResources(params);
    }

    /**
     * Builds a query and fetchs data from the API.
     * @param {string} end The API endpoint
     * @param {string} key The key of the parameter in the params dict
     * @param {string} param The parameter to assign in the params dict
     * @returns {Observable} The response as a observable
     */
    getOptions(end: string, key: string, param: string) {
        const url = this.settings.getBaseUrl() + end;
        const params = {};
        params[key] = param;
        const heads = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.getToken(),
            Accept: 'application/json'
        });
        return this.http.get(url, { headers: heads, params: params });
    }

    /**
     * Fetchs all the resources from the API.
     * @param {Object} params The parameters dict for the query
     * @returns {Observable} The response as a observable
     */
    getResources(params: HttpParams = null) {
        const url = this.getRoute('list', this.endPoint);
        params = this.settings.getBaseParams(params);
        this.httpOptions.params = params;
        if (!hasIn('page', params)) {
            this.getCurrentPage().subscribe(value => {
                params['page'] = value;
            });
        }
        return this.http.get(url, this.httpOptions);
    }

    /**
     * Gets a single resource from the API.
     * @param id The identifier of the resource
     * @returns {Observable} The response as a observable
     */
    getResource(id) {
        const url = this.getRoute('get', this.endPoint);
        return this.http.get(url + '/' + id, this.httpOptions);
    }

    /**
     * @ignore
     */
    getForm() {
        const url = this.settings.getBaseUrl() + 'forms';
        return this.http.get(url, this.httpOptions);
    }

    /**
     * Receives a FormData object and posts the form to the server.
     * @param {FormData} form The form to be sent
     * @returns {Observable} The response as a observable
     */
    postFileForm(form: FormData) {
        const url = this.getRoute('post', this.endPoint);
        const heads = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.getToken(),
            Accept: 'application/json'
        });
        return this.http.post(url, form, { headers: heads });
    }

    /**
     * Receives a FormData object and a resource ID and makes a put request.
     * @param {FormData} form The form to be sent
     * @param {number} id The resource ID
     * @returns {Observable} The response as a observable
     */
    putFileForm(form: FormData, id: number) {
        const url = this.getRoute('post', this.endPoint);
        const heads = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.getToken(),
            Accept: 'application/json'
        });
        return this.http.post(url + '/' + id, form, { headers: heads });
    }

    /**
     * Downloads a resource as a blob given its ID.
     * @param id The resource ID
     * @returns {Observable} The response as a observable
     */
    downloadResource(id) {
        const url = this.getRoute('get', this.endPoint);
        const heads = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.getToken()
        });
        return this.http.get(url + '/' + id + '/file', { headers: heads, responseType: 'blob' });
    }

    /**
     * Deletes a resource from the server given its ID.
     * @param id The resource ID
     * @returns {Observable} The response as a observable
     */
    deleteResource(id) {
        const url = this.getRoute('delete', this.endPoint);
        return this.http.delete(url + '/' + id, { headers: this.httpOptions.headers });
    }

    /**
     * Modifies current page and notifies every subscribed component.
     * @param {number} newPage The new active page
     */
    setCurrentPage(newPage: number) {
        this.currentPage.next(newPage);
    }

    /**
     * Returns the current page as a subscribable observable.
     * @returns {Observable<number>} The current page as a observable
     */
    getCurrentPage(): Observable<number> {
        return this.currentPage.asObservable();
    }

    /**
     * Returns the current page as a number value.
     * @returns {number} The current page
     */
    getCurrentPageValue(): number {
        return this.currentPage.getValue();
    }

    /**
     * Modifies current search term and notifies every subscribed component.
     * @param {string} newTerm The new search term
     */
    setSearchTerm(newTerm: string) {
        this.searchTerm.next(newTerm);
    }

    /**
     * Returns the current search term as a subscribable observable.
     * @returns {Observable<string>} The current search term as a observable
     */
    getSearchTerm(): Observable<string> {
        return this.searchTerm.asObservable();
    }

    /**
     * Sets the current selected item and notifies every subscribed component.
     * @param {Item} item The new selected item
     */
    setActiveItem(item: Item) {
        this.activeItem.next(item);
    }

    /**
     * Returns the current search term as a subscribable observable.
     * @returns {Observable<Item>} The current search term as a observable
     */
    getActiveItem(): Observable<Item> {
        return this.activeItem.asObservable();
    }

    /**
     * Sets the current selected facets and notifies every subscribed component.
     * @param {Object} newFacets The facets currently selected
     */
    setActiveFacets(newFacets: Object) {
        this.activeFacets.next(newFacets);
    }

    /**
     * Returns the current active facets as a subscribable observable.
     * @returns {Observable<Object>} The current active facets as a observable
     */
    getActiveFacets(): Observable<Object> {
        return this.activeFacets.asObservable();
    }
}

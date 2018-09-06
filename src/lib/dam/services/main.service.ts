import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { hasIn, isNil } from 'ramda';
import RouterMapper from '../mappers/RouterMapper';
import ConfigMapper from '../mappers/ProfileMapper';
import { Item } from '../models/Item';


// const API = environment.API;
// const resourcesAPI = environment.resourcesAPI;


@Injectable()
export class MainService {
  private httpOptions = { headers: {}, params: {} };
  private currentPage: BehaviorSubject<number>;
  private searchTerm: BehaviorSubject<string>;
  private activeItem: BehaviorSubject<Item>;

  private token = '';
  private settings: RouterMapper;
  private configs: ConfigMapper;

  constructor(private http: HttpClient) {
    this.currentPage = new BehaviorSubject<number>(1);
    this.searchTerm = new BehaviorSubject<string>('');
    this.activeItem = new BehaviorSubject<Item>(null);
    this.settings = new RouterMapper();
    this.configs = new ConfigMapper;

    this.httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken()
    });
  }

  getToken() {
    return this.settings.getToken();
  }

  getRoutes() {
    return this.settings.getRoutes();
  }

  getRoute(method: string, name: string) {
    let route = hasIn(name, this.getRoutes()) ? (<any>this.getRoutes())[name] : null;
    if (!isNil(route)) {
      route = hasIn(method, route) ? `${this.settings.getBaseUrl()}${(route)[method]}` : null;
    }
    return route;
  }

  getGeneralConfigs() {
    return this.configs.getGeneralConfigs();
  }

  getComponentConfigs(component = null) {
    return this.configs.getComponentConfigs(component);
  }

  list(params: Object = {}) {
    return this.getResources(params);
  }

  getOptions(end: string, key: string, param: string) {
    const url = this.settings.getBaseUrl() + end;
    const params = {};
    params[key] = param;
    const heads = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + this.getToken(),
      'Accept': 'application/json'
    });
    return this.http.get(url, { headers: heads, params: params });
  }

  getResources(params: Object = {}) {
    const url = this.getRoute('list', 'resources');
    this.httpOptions.params = params;
    if (!hasIn('page', params)) {
      this.getCurrentPage().subscribe(value => { params['page'] = value; });
    }
    return this.http.get(url, this.httpOptions);
  }

  getResource(hash) {
    const url = this.getRoute('get', 'resources');
    return this.http.get(url + '/' + hash, this.httpOptions);
  }

  getForm() {
    const url = this.settings.getBaseUrl() + 'forms';
    return this.http.get(url, this.httpOptions);
  }

  postFileForm(form: FormData) {
    const url = this.getRoute('post', 'resources');
    const heads = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + this.getToken(),
      'Accept': 'application/json'
    });
    return this.http.post(url, form, { headers: heads });
  }

  putFileForm(form: FormData, id: number) {
    const url = this.getRoute('post', 'resources');
    const heads = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + this.getToken(),
      'Accept': 'application/json'
    });
    return this.http.post(url + '/' + id, form, { headers: heads });
  }

  downloadResource(hash) {
    const url = this.getRoute('get', 'resources');
    const heads = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + this.getToken()
    });
    return this.http.get(url + '/' + hash + '/file', { headers: heads, responseType: 'blob' });
  }

  deleteResource(id) {
    const url = this.getRoute('delete', 'resources');
    return this.http.delete(url + '/' + id, { headers: this.httpOptions.headers });
  }

  setCurrentPage(newPage: number) {
    this.currentPage.next(newPage);
  }

  getCurrentPage(): Observable<number> {
    return this.currentPage.asObservable();
  }

  getCurrentPageValue(): number {
    return this.currentPage.getValue();
  }

  setSearchTerm(newTerm: string) {
    this.searchTerm.next(newTerm);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }

  setActiveItem(item: Item) {
    this.activeItem.next(item);
  }

  getActiveItem(): Observable<Item> {
    return this.activeItem.asObservable();
  }
}

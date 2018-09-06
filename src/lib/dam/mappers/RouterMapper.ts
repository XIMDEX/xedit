import { hasIn, isNil } from 'ramda';
import {environment} from './environment';

export default class RouterMapper {

    baseUrl = '';
    routes = '';
    token = '';

    constructor() {
        this.init();
    }

    setBaseUrl(url) {
        this.baseUrl = url;
        return this;
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    setRoutes(routes) {
        this.routes = routes;
        return this;
    }

    getRoutes() {
        return this.routes;
    }

    setToken(token) {
        this.token = token;
        return this;
    }

    getToken() {
        return this.token;
    }

    protected urlParams() {
        const url = new URL(window.location.href);
        return url.searchParams;
    }

    private init() {
        const xdam = hasIn('$xdam', window) ? (<any>window).$xdam : null;
        if (isNil(xdam)) {
            xdam.token = this.urlParams().get('token');
        }
        const result = Object.assign({}, environment, xdam);
        this.setBaseUrl(result.base_url)
            .setToken(result.token)
            .setRoutes(result.endpoints);
    }
}

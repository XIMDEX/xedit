import Router from './core/mappers/router';
import ApiGlobal from './core/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Xedit } from '@app/xedit';
import { error } from 'util';

export class Api {

    /****************** API ENDPOINTS ******************/
    public static getMapperUrl() {
        return 'documents.mapper';
    }
    public static getDocumentUrl() {
        return 'documents.get';
    }
    public static getSaveUrl() {
        return 'documents.save';
    }

    public static getResourceUrl() {
        return 'resources.image';
    }

    public static getTreeUrl() {
        return 'resources.tree';
    }

    public static getInfoNodeUrl() {
        return 'resources.get';
    }

    /****************** API METHODS ******************/
    public static getMapper(http: HttpClient, url: string, params: object, successCallback: Function, errorCallback: Function) {

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return ApiGlobal.request(http, url, params, {}, headers, successCallback, errorCallback);
    }

    public static getDocument(http: HttpClient, id: string, successCallback: Function, errorCallback: Function) {

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return ApiGlobal.request(http, this.getDocumentUrl(), { id: id }, {}, headers, successCallback, errorCallback);
    }

    public static saveDocument(http: HttpClient, document, successCallback: Function, errorCallback: Function) {

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        return ApiGlobal.request(http, this.getSaveUrl(), {}, document, headers, successCallback, errorCallback, {}, 'post');
    }

    public static getTreeChildren(http: HttpClient, nodeId: string, type: string, successCallback: Function, errorCallback: Function,
        extra: object = {}) {

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return ApiGlobal.request(http, this.getTreeUrl(), { id: nodeId, type: type }, null, headers, successCallback, errorCallback, extra);
    }

    public static getInfoNode(http: HttpClient, nodeId: string, type: string, successCallback: Function, errorCallback: Function,
        extra: object = {}) {

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let endpoint = nodeId;
        if (!nodeId.startsWith('http')) {
            endpoint = this.getInfoNodeUrl();
        }
        return ApiGlobal.request(http, endpoint, { id: nodeId, type: type }, null, headers, successCallback, errorCallback, extra);
    }
}

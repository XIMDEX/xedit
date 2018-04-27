import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Xedit } from '@app/xedit';

export class Api {

    static action = '/?_action=xedit/';


    /** Paths **/
    public static pathGetNode($nodeId) {
        return Api.getBaseQuery() + `${$nodeId}/get`;
    }

    /** Paramas **/
    public static addParams(url, params): string {
        for (let key in params) {
            url = url.replace(`:${key}`, params[key]);
        }
        return url;
    }

    /****************** API METHODS ******************/
    public static getDocument(http: HttpClient, nodeId: string, successCallback: Function, errorCallback: Function) {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', `Basic ${btoa(Xedit.getToken() + ':')}`);
        return http.get(this.pathGetNode(nodeId), { headers: headers }).subscribe(
            (result: any) => {
                successCallback(result);
            },
            error => {
                errorCallback();
            }
        );
    }

    public static saveDocument(http: HttpClient, document, successCallback: Function, errorCallback: Function) {

        const json = JSON.stringify(document);
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', `Basic ${btoa(Xedit.getToken() + ':')}`);

        http.post(Xedit.getSetUrl(), json, { headers: headers }).subscribe(
            (data: any) => {
                successCallback(data);
            },
            error => {
                errorCallback();
            }
        );
    }

    public static getTreeChildren(http: HttpClient, nodeId: string, type: string, successCallback: Function, errorCallback: Function) {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', `Basic ${btoa(Xedit.getToken() + ':')}`);

        let url = Xedit.getTreeUrl();
        url = this.addParams(url, { 'id': nodeId, 'type': type });

        return http.get(url, { headers: headers }).subscribe(
            (result: any) => {
                successCallback(result);
            },
            error => {
                errorCallback();
            }
        );
    }

    public static getInfoNode(http: HttpClient, nodeId: string, type: string, successCallback: Function, errorCallback: Function, extra: object) {

        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', `Basic ${btoa(Xedit.getToken() + ':')}`);

        let url = Xedit.getInfoNodeUrl();
        url = this.addParams(url, { 'id': nodeId, 'type': type });

        return http.get(url, { headers: headers }).subscribe(
            (result: any) => {
                successCallback(result.response, extra);
            },
            error => {
                errorCallback(null, extra);
            }
        );
    }

    /****************** AUX METHODS ******************/
    public static getBaseQuery() {
        return Xedit.getApiUrl() + Api.action;
    }
}

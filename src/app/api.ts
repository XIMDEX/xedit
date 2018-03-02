import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Xedit } from '@app/xedit';

export class Api {

    static action = '/?_action=xedit/';


    /** Paths **/

    public static pathGetNode($nodeId) {
        return Api.getBaseQuery() + `${$nodeId}/get`;
    }

    public static pathSetNode() {
        return Api.getBaseQuery() + `set`;
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

        http.post(this.pathSetNode(), json, { headers: headers }).subscribe(
            (data: any) => {
                successCallback(data);
            },
            error => {
                errorCallback();
            }
        );
    }

    /****************** AUX METHODS ******************/
    public static getBaseQuery() {
        return Xedit.getApiUrl() + Api.action;
    }
}

import Router from './mappers/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export default class Api {

    /****************** API METHODS ******************/
    public static request(http: HttpClient, endpoint: string, query_params: object, post_data: object, _headers: HttpHeaders,
        successCallback: Function, errorCallback: Function, extra: object = {}, http_method: string = 'get') {

        const { params, headers } = Router.setToken(query_params, _headers);
        const url = Router.configUrl(endpoint, params);

        let func = http.get(url, { headers: headers });
        if (http_method === 'post') {
            func = http.post(url, JSON.stringify(post_data), { headers: headers });
        }
        // TODO PUT, DELETE....
        return func.subscribe(
            (result: any) => {
                successCallback(result, extra);
            },
            error => {
                errorCallback(extra);
            }
        );

    }
}

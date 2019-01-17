
import { Xedit } from "./mappers/xedit";
import { isNil } from 'ramda';
import { Api } from "@app/api";
import { HttpClient } from "@angular/common/http";
import Router from './mappers/router';

export class Plugins {

    static MediaManagerUrl(id) {
        return Router.configUrl(Api.getResourceUrl(), { id: id });
    }

    static MediaMAnagerSelect({ hash, type }, http: HttpClient, callback) {
        if (!isNil(hash)) {
            Api.getInfoNode(http, hash, type, callback, null, null);
        }
    }
}
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Settings, XDamSettings, XDamSettingsInterface } from '@ximdex/xdam';

import { isNil } from 'ramda';

export default class XdamApi {
    private headers: HttpHeaders;
    private settings: XDamSettings;
    private _baseUrl: string;
    private _token: string;
    private _routes: { SettingsEdpoint } | null;
    private _baseParams: {};

    constructor(private http: HttpClient) {
        this.settings = this.loadSettings();
        this.loadXdam();

        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.token
        });
    }

    set baseUrl(url: string) {
        this._baseUrl = url;
    }

    get baseUrl(): string {
        return this._baseUrl;
    }

    set routes(routes: { SettingsEdpoint } | null) {
        this._routes = routes;
    }

    get routes(): { SettingsEdpoint } | null {
        return this._routes;
    }

    set token(token: string | null) {
        this._token = token;
    }

    get token(): string | null {
        return this._token;
    }

    set baseParams(baseParams) {
        this._baseParams = baseParams;
    }

    public getSettings(): XDamSettings {
        return this.settings;
    }

    /**
     * List available resources
     */
    public list(params: HttpParams | null) {
        const {
            resources: { list = null }
        } = this.routes as any;

        if (isNil(list)) {
            throw new Error('List endpoint does not exists');
        }

        return this.sendRequest(list, params, 'get');
    }

    private sendRequest(section: string, params: HttpParams | null, method: string = 'get') {
        const route = `${this.baseUrl}${section}`;

        if (isNil(params)) {
            params = this.baseParams;
        }

        return this.http[method](route, { params, headers: this.headers });
    }

    /**
     * Load dam settings from window.$xdam object
     *
     * @return XDamSettings
     */
    private loadSettings(): XDamSettings {
        let xdamSettings: XDamSettingsInterface = {};

        const { $xdam: xdam = null } = window as any;

        if (!isNil(xdam)) {
            const { settings = {}, form = {} } = xdam as any;
            xdamSettings = { ...settings, form };
        }

        return new XDamSettings(xdamSettings);
    }

    /**
     * Initialize base Xdam settings
     */
    private loadXdam() {
        const { $xdam: xdam = null } = window as any;
        const { base_url = '', token = '', endpoints = null, base_params = {} } = xdam as Settings;

        this.baseUrl = base_url;
        this.token = token;
        this.routes = endpoints;
        this.baseParams = base_params;
    }
}

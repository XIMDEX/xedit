import { hasIn, isNil } from 'ramda';

export class Xedit {

    static BASE = '$xedit';
    static TOKEN = 'token';
    static API_URL = 'apiUrl';
    static ROUTER_MAPPER = 'routerMapper';
    static RESOURCE_URL = 'resourceUrl';
    static SCHEMAS = 'schemas';
    static LANG = 'lang';

    static NOTIFICATION_DEFAULT_SETTINGS = {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
    };

    // ************************************** Getters and setters **************************************/
    public static getConf(conf: string, value?: any): any {
        return hasIn(conf, Xedit.getBase()) ? Xedit.getBase()[conf] :
            (!isNil(value) ? value : undefined);
    }

    public static setConf(conf: string, value: any) {
        return Xedit.getBase()[conf] = value;
    }

    public static setToken(token: string): void {
        return Xedit.setConf(Xedit.TOKEN, token);
    }

    public static getToken(): string {
        return Xedit.getConf(Xedit.TOKEN);
    }

    public static setApiUrl(url: string): void {
        return Xedit.setConf(Xedit.API_URL, url);
    }


    public static getRouterMapper(): string {
        return Xedit.getConf(Xedit.ROUTER_MAPPER);
    }

    public static getApiUrl(): string {
        return Xedit.getConf(Xedit.API_URL);
    }

    public static setLang(lang: string): void {
        return Xedit.setConf(Xedit.LANG, lang);
    }

    public static getLang(): string {
        return Xedit.getConf(Xedit.LANG, 'es');
    }

    public static getResourceUrl(): string {
        const routerMapper = Xedit.getRouterMapper();
        let resourceUrl = '';
        if (hasIn('resource', routerMapper['routes'])) {
            resourceUrl = routerMapper['routes']['resource'];
        }
        return `${Xedit.generateActionUrl(resourceUrl)}&id=`;
    }

    public static getTreeUrl(): string {
        const routerMapper = Xedit.getRouterMapper();
        let treeInfo = '';
        if (hasIn('treeInfo', routerMapper['routes'])) {
            treeInfo = routerMapper['routes']['treeInfo'];
        }
        return `${Xedit.generateActionUrl(treeInfo)}&id=`;
    }

    public static getSchemas(): any {
        return Xedit.getConf(Xedit.SCHEMAS);
    }

    // ************************************** Private Methods **************************************/
    private static getBase() {
        let xedit = window[Xedit.BASE];

        if (isNil(xedit)) {
            xedit = window[Xedit.BASE] = {};
        }

        return xedit;
    }

    private static generateActionUrl(action: string): string {
        return `${Xedit.getApiUrl()}?${action}&token=${Xedit.getToken()}`;
    }

}

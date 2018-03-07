import { hasIn, isNil } from 'ramda';

export class Xedit {

    static BASE = '$xedit';
    static TOKEN = 'token';
    static API_URL = 'apiUrl';
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
    static getConf(conf: string, value?: any): any {
        return hasIn(conf, Xedit.getBase()) ? Xedit.getBase()[conf] :
            (!isNil(value) ? value : undefined);
    }

    static setConf(conf: string, value: any) {
        return Xedit.getBase()[conf] = value;
    }

    static setToken(token: string): void {
        return Xedit.setConf(Xedit.TOKEN, token);
    }

    static getToken(): string {
        return Xedit.getConf(Xedit.TOKEN);
    }

    static setApiUrl(url: string): void {
        return Xedit.setConf(Xedit.API_URL, url);
    }

    static getApiUrl(): string {
        return Xedit.getConf(Xedit.API_URL);
    }

    static setLang(lang: string): void {
        return Xedit.setConf(Xedit.LANG, lang);
    }

    static getLang(): string {
        return Xedit.getConf(Xedit.LANG, 'es');
    }

    static getResourceUrl(): string {
        return Xedit.getConf(Xedit.RESOURCE_URL);
    }

    static getSchemas(): any {
        return Xedit.getConf(Xedit.SCHEMAS);
    }

    // ************************************** Private Methods **************************************/

    static getBase() {
        let xedit = window[Xedit.BASE];

        if (isNil(xedit)) {
            xedit = window[Xedit.BASE] = {};
        }

        return xedit;
    }
}

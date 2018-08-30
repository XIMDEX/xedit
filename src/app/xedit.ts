import { hasIn, isNil } from 'ramda';
import { Xedit as XeditCore } from './core/mappers/xedit';

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
        return hasIn(conf, XeditCore.getXedit()) ? XeditCore.getXedit()[conf] : (!isNil(value) ? value : undefined);
    }

    public static setConf(conf: string, value: any) {
        return XeditCore.getXedit()[conf] = value;
    }

    public static setLang(lang: string): void {
        return Xedit.setConf(Xedit.LANG, lang);
    }

    public static getLang(): string {
        return Xedit.getConf(Xedit.LANG, 'es');
    }

    public static getSchemas(): any {
        return Xedit.getConf(Xedit.SCHEMAS);
    }

}

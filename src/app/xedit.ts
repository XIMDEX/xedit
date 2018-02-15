import { hasIn, isNil } from 'ramda';

export class Xedit {

    // ************************************** Getters and setters **************************************/
    static getConf(conf: string): any {
        return hasIn(conf, Xedit.getBase()) ? Xedit.getBase()[conf] : undefined;
    }

    static setConf(conf: string, value: any) {
        return Xedit.getBase()[conf] = value;
    }

    static getResourceUrl(): string {
        return Xedit.getConf('resourceUrl');
    }

    static getSchemas(): any {
        return Xedit.getConf('schemas');
    }

    // ************************************** Private Methods **************************************/

    static getBase() {
        let xedit = window['$xedit'];

        if (isNil(xedit)) {
            xedit = window['$xedit'] = {};
        }

        return xedit;
    }
}

import * as localForage from 'localforage';
import { group } from '@angular/animations';

export class Configs {
    private static NAME = 'xedit-configs';

    private static init() {
        localForage.config({
            driver: localForage.LOCALSTORAGE,
            name: Configs.NAME,
            version: 1.0,
            storeName: Configs.NAME,
            description: 'xedit configs storage'
        });

        return localForage;
    }

    public static save(data: Object, gr: string = 'configs'): any {
        return this.init().setItem(gr, data, this.callback);
    }

    public static get(gr: string = 'configs'): any {
        return this.init().getItem(gr, this.callback);
    }

    protected static callback(error, value): any {
        if (error) {
            console.error(error);
            return error;
        } else {
            return value;
        }
    }
}

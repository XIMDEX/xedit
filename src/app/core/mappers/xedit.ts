import { hasIn, isNil } from 'ramda';
import Api from '../api';

export class Xedit {

    static BASE = '$xedit';

    static TOKEN = 'token';
    static API_URL = 'apiUrl';

    static NOTIFICATION_DEFAULT_SETTINGS = {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
    };

    // ************************************** Getters and setters **************************************/
    public static getXedit() {
        return hasIn(Xedit.BASE, window) ? window[Xedit.BASE] : null;
    }

    public static getDocument() {
        const xedit = Xedit.getXedit();
        let res = null;
        if (!isNil(xedit)) {
            res = hasIn('document', xedit) ? xedit.document : null;
        }
        return res;
    }

    public static getData(property = null) {
        const xedit = Xedit.getXedit();
        let res = null;
        if (!isNil(xedit)) {
            res = hasIn('data', xedit) ? xedit['data'][property] : xedit['data'];
        }
        return res;
    }


}

import { Xedit } from "./xedit";
import { isNil, hasIn } from "ramda";
import { HttpHeaders } from "@angular/common/http";
import * as qs from "query-string";

export default class Router {
    public static ROUTER = "router";

    public static TOKEN = "token";

    public static BASE_URL = "baseUrl";

    public static ENDPOINTS = "endpoints";

    public static EXTRA_PARAMS = "attrs";

    public static getRouter() {
        return !isNil(window[Xedit.BASE]) && hasIn("router", window[Xedit.BASE])
            ? window[Xedit.BASE].router
            : null;
    }

    public static getRouterProperty(prop: string, def: any = null) {
        const router = Router.getRouter();
        if (!isNil(router)) {
            def = hasIn(prop, router) ? router[prop] : null;
        }
        return def;
    }

    public static setToken(params: Object, headers: HttpHeaders) {
        const token = Router.getRouterProperty(Router.TOKEN);
        if (!isNil(token)) {
            if (token.type === "url") {
                params[token.field] = token.value;
            } else if (token.type === "bearer") {
                headers = headers.set("Authorization", `Bearer ${token.value}`);
            } else if (token.type === "basic") {
                headers = headers.set("Authorization", `Basic ${token.value}`);
            }
        }
        return { params, headers };
    }

    public static configUrl(endpoint: string, _params: Object = {}): string {
        const params = Object.assign({}, _params);
        let info = {};
        if (!/^(f|ht)tps?:\/\//i.test(endpoint)) {
            info = this.get(endpoint);
            endpoint = `${Router.getRouterProperty(Router.BASE_URL, "")}/${
                info["path"]
            }`;
        }

        // Added query params
        let match;
        let path = endpoint;
        while ((match = /\{([^{}]*)}/g.exec(path)) !== null) {
            let val = null;
            if (hasIn(match[1], params)) {
                val = params[match[1]];
                delete params[match[1]];
            } else {
                val = Router.getExtraParam(match[1]);
            }
            if (val != null) {
                endpoint = endpoint.replace(match[0], val);
            }
            path = path.replace(match[0], "");
        }

        // Extra params
        if (hasIn("params", info)) {
            for (const property of Object.keys(info["params"])) {
                let val = info["params"][property];
                match = /^\{(.*)}$/g.exec(val);
                if (match != null) {
                    const param = Router.getExtraParam(match[1]);
                    if (!isNil(param)) {
                        val = param;
                    }
                }
                if (!hasIn(property, params)) {
                    params[property] = val;
                }
                // filters.push(`${property}=${val}`);
            }
        }

        const query =
            Object.keys(params).length > 0 ? `?${qs.stringify(params)}` : "";

        return `${endpoint}${query}`;
    }

    public static get(name: string): object {
        let endpoint = null;
        const path = name.split(".");

        for (const key of Object.keys(path)) {
            endpoint = isNil(endpoint)
                ? Router.getRouterProperty(Router.ENDPOINTS)[path[key]]
                : endpoint[path[key]];
        }
        return endpoint;
    }

    public static getExtraParam(param: string, def: any = null) {
        const params = Router.getRouterProperty(Router.EXTRA_PARAMS);
        if (!isNil(params) && hasIn(param, params)) {
            def = params[param];
        }
        return def;
    }
}

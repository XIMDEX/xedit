import { hasIn, isNil } from 'ramda';
import { Injectable, Type } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AutoloadModulesService {
    protected modules: object = {};

    addModule(name: string, component: Type<any>) {
        this.modules[name] = component;
    }

    getModule(module: string) {
        let moduleItem = null;

        if (hasIn(module, this.modules) && !isNil(this.modules[module])) {
            moduleItem = this.modules[module];
        }
        return moduleItem;
    }

    getModuleTag(module: string) {
        let moduleItem = null;

        if (hasIn(module, this.modules) && !isNil(this.modules[module])) {
            moduleItem = this.modules[module];
            const { selector } = moduleItem.__annotations__[0];

            if (!isNil(selector)) {
                moduleItem = selector;
            }
        }
        return moduleItem;
    }

    getModules() : object {
        return this.modules;
    }
}

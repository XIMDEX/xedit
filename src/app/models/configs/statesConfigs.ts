import { isNil, isEmpty, hasIn } from 'ramda';
import { Configs } from './configs';

export class StateConfigs extends Configs {

    protected static GROUP = 'statesController';
    protected static DEFAULT: any = {
        active: false,
        configs: [
            {
                id: 'hover',
                name: 'Controlar hover',
                enable: true
            }
        ]
    };

    private self: any = this.constructor;

    protected configs: any;

    constructor() {
        super();

        this.configs = {};
        this.init();
    }

    public setConfigs(configs: any) {
        this.configs.configs = configs;
        StateConfigs.save(this.configs);
        return this;
    }

    public getConfigs(config: string = null): any {
        const configs = this.configs.configs;
        if (isNil(config)) {
            return configs;
        }

        for (let i = 0; i < configs.length; i++) {
            if (hasIn('id', configs[i])) {
                return configs[i];
            }
        }
    }

    public toggleActive(): boolean {
        this.configs.active = !this.configs.active;
        StateConfigs.save(this.configs);
        return this.isActive();
    }

    public isActive(): boolean {
        const active = hasIn('active', this.configs) ? this.configs.active : null;
        return active;
    }

    public addConfig(config: any) {
        if (isNil(this.configs)) {
            this.configs = StateConfigs.DEFAULT;
        }
        this.configs.configs.push(config);
        return this.setConfigs(this.configs);
    }

    public updateConfigs() {
        this.init();
    }

    private init() {
        this.self.get().then((data) => {
            if (isNil(data)) {
                data = this.self.DEFAULT;
            }
            this.configs = data;
        });
    }

    public static save(data: any, group: string = StateConfigs.GROUP): any {
        if (isEmpty(group)) {
            group = StateConfigs.GROUP;
        }
        return super.save(data, group);
    }

    public static get(group: string = StateConfigs.GROUP): any {
        return super.get(group);
    }

    protected static callback(error, value): any {
        if (error) {
            console.error(error);
        } else {
            if (isNil(value)) {
                value = StateConfigs.DEFAULT;
            }
        }

        return value;
    }

}

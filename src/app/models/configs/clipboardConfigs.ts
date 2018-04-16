import { isNil, isEmpty, hasIn } from 'ramda';
import { Configs } from './configs';

export class ClipboardConfigs extends Configs {

    private self: any = this.constructor;

    protected static GROUP: string = 'clipboardConfigs';
    protected static DEFUALT: any = {
        active: false,
        configs: [
            {
                id: 'copy',
                name: 'Format copy',
                selected: 'copyPlain',
                options: {
                    'copyHtml': 'Copy as HTML',
                    'copyPlain': 'Copy as Plain Text'
                }
            }
        ]
    };

    protected configs: any;

    constructor() {
        super();

        this.configs = {};
        this.init();
    }

    public setConfigs(configs: any) {
        this.configs.configs = configs;
        ClipboardConfigs.save(this.configs);
        return this;
    }

    public getConfigs(config: string = null): any {
        const configs = this.configs.configs
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
        ClipboardConfigs.save(this.configs);
        return this.isActive();
    }

    public isActive(): boolean {
        const active = hasIn('active', this.configs) ? this.configs.active : null;
        return active;
    }

    public addConfig(config: any) {
        if (isNil(this.configs)) {
            this.configs = ClipboardConfigs.DEFUALT;
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
                data = this.self.DEFUALT;
            }
            this.configs = data;
        })
    }

    public static save(data: any, group: string = ClipboardConfigs.GROUP): any {
        if (isEmpty(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return super.save(data, group);
    }

    public static get(group: string = ClipboardConfigs.GROUP): any {
        if (isEmpty(group)) {
            group = ClipboardConfigs.GROUP;
        }
        return super.get(group);
    }

    protected static callback(error, value): any {
        if (error) {
            console.error(error);
        } else {
            if (isNil(value)) {
                value = ClipboardConfigs.DEFUALT;
            }
        }

        return value;
    }

}
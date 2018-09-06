import { isNil, hasIn } from 'ramda';
import { standard } from '../profiles/standard';
import { light } from '../profiles/light';

export default class ConfigMapper {

    private generalConfigs = null;
    private componentConfigs = null;
    private currentProfile = 'standard';
    private profiles: Object = {
        'standard': standard,
        'light': light
    };

    constructor() {
        this.init();
    }

    setCurrentProfile(profile) {
        let current = 'standard';
        if (hasIn(profile, this.profiles)) {
            current  = profile;
        }
        this.currentProfile = this.profiles[profile];
        return this;
    }

    setConfigs(configs) {
        this.generalConfigs = configs.general;
        this.componentConfigs = configs.components;
        return this;
    }

    getGeneralConfigs() {
        return this.generalConfigs;
    }

    getComponentConfigs(component = null) {
        if (isNil(component)) {
            return this.componentConfigs;
        } else if (hasIn(component, this.componentConfigs)) {
            return this.componentConfigs[component];
        } else {
            return null;
        }
    }

    private init() {
        const xdam = hasIn('$xdam', window) ? (<any>window).$xdam : null;
        let profile = 'standard';
        if (hasIn('profile', xdam)) {
            profile = xdam.profile;
        }
        this.setCurrentProfile(profile);
        const result = Object.assign({}, this.currentProfile, xdam);

        this.setConfigs(result.configs);
    }

}

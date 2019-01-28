import { isNil, hasIn, mergeDeepRight } from 'ramda';
import { standard } from '../profiles/standard';
import { light } from '../profiles/light';

/**
 * This class extracts and maps data about the components
 * configuration given the active profile.
 */
export default class ConfigMapper {
    /**
     * The general configuration for the application
     */
    private generalConfigs = null;
    /**
     * The configurations for the components
     */
    private componentConfigs = null;
    /**
     * The currently selected profile
     */
    private currentProfile = {
        configs: null,
        general: null
    };
    /**
     * The available profiles
     */
    private profiles: Object = {
        standard: standard,
        light: light
    };

    /**@ignore */
    constructor() {
        this.init();
    }

    /**@ignore */
    setCurrentProfile(profile) {
        profile = hasIn(profile, this.profiles) ? profile : 'standard';
        this.currentProfile = this.profiles[profile];
        return this;
    }

    /**@ignore */
    setConfigs(configs) {
        this.generalConfigs = configs.general;
        this.componentConfigs = mergeDeepRight(this.currentProfile.configs.components, configs.components);
        //this.componentConfigs = Object.assign({}, this.currentProfile.configs.components, configs.components);
        return this;
    }

    /**@ignore */
    getGeneralConfigs() {
        return this.generalConfigs;
    }

    /**
     * Gets the configs for a particular component
     * @param component The component requested
     * @returns {Object} The configs object
     */
    getComponentConfigs(component = null) {
        let configs = null;

        if (isNil(component)) {
            configs = this.componentConfigs;
        } else if (hasIn(component, this.componentConfigs)) {
            configs = this.componentConfigs[component];
        }

        return configs;
    }

    /**
     * Initializes the mapper extracting values from the environment and the active window,
     * prioritising the window object.
     */
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

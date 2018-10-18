import { isNil, hasIn } from 'ramda';
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
    private currentProfile = 'standard';
    /**
     * The available profiles
     */
    private profiles: Object = {
        'standard': standard,
        'light': light
    };

    /**@ignore */
    constructor() {
        this.init();
    }

    /**@ignore */
    setCurrentProfile(profile) {
        let current = 'standard';
        if (hasIn(profile, this.profiles)) {
            current = profile;
        }
        this.currentProfile = this.profiles[profile];
        return this;
    }

    /**@ignore */
    setConfigs(configs) {
        this.generalConfigs = configs.general;
        this.componentConfigs = configs.components;
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
        if (isNil(component)) {
            return this.componentConfigs;
        } else if (hasIn(component, this.componentConfigs)) {
            return this.componentConfigs[component];
        } else {
            return null;
        }
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

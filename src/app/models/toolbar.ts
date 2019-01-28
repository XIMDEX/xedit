import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class Toolbar {
    private icon: IconDefinition;
    private callback: Function;
    private active: boolean;

    constructor(icon: IconDefinition, callback: Function, active: boolean) {
        this.setIcon(icon);
        this.setCallback(callback);
        this.setActive(active);
    }

    public setIcon(icon: IconDefinition) {
        this.icon = icon;
    }

    public getIcon(): IconDefinition {
        return this.icon;
    }

    public setCallback(callback: Function) {
        this.callback = callback;
    }

    public getCallback(): Function {
        return this.callback;
    }

    public setActive(active: boolean) {
        this.active = active;
    }

    public getActive(): boolean {
        return this.active;
    }
}

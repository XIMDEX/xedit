import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export class Toolbar {
    
    private icon: IconDefinition;
    private callback: Function;

    constructor(icon: IconDefinition, callback: Function) {
        this.setIcon(icon);
        this.setCallback(callback);
    }

    public setIcon(icon: IconDefinition) {
        this.icon = icon;
    }

    public getIcon() : IconDefinition {
        return this.icon;
    }

    public setCallback(callback: Function) {
        this.callback = callback;
    }

    public getCallback(): Function {
        return this.callback;
    }
}
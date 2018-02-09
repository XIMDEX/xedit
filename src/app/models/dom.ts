import { indexOf, remove, is } from 'ramda';
import { ElementRef } from '@angular/core';

export class DOM {

    protected target: HTMLElement;
    private classes: Array<string>;

    constructor(target: HTMLElement) {
        this.target = target;
        this.classes = target.className.split(' ');
    }

    /********************* SETER AND GETERS *********************/

    public setTarget(target: HTMLElement) {
        this.target = target;
    }

    public getTarget(): HTMLElement {
        return this.target;
    }

    /********************** PUBLIC METHODS **********************/

    public addClass(className: string) {
        const { index, exists } = this.classExists(className);
        if (!exists) {
            this.insertClass(className);
        }
        this.storeAttr('class', this.classes);
    }

    public removeClass(className: string) {
        const { index, exists } = this.classExists(className);
        if (exists) {
            this.deleteClass(index, className);
        }
        this.storeAttr('class', this.classes);
    }

    public toggleClass(className: string) {
        const { index, exists } = this.classExists(className);
        if (exists) {
            this.removeClass(className);
        } else {
            this.addClass(className);
        }
        this.storeAttr('class', this.classes);
    }

    /********************* PRIVATE METHODS *********************/

    private storeAttr(attr: string, value: string | Array<string>) {
        if (Array.isArray(value)) {
            value = value.join(' ');
        }

        this.target.setAttribute('class', String(value));
    }

    private classExists(className: string) {
        const index = indexOf(className, this.classes);
        const exists = index >= 0;
        return { index, exists };
    }

    private insertClass(className: string) {
        this.classes.push(className);
    }

    private deleteClass(index: number, className: string) {
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    }

    /***************** STATIC METHODS **************************/

    public static element(selector: ElementRef | string): DOM | undefined {
        let element = undefined
        if (selector instanceof ElementRef) {
            element = selector.nativeElement;
        } else {
            element = new ElementRef(document.body).nativeElement.querySelector(selector);
        }
        return new DOM(element);
    }

    // TODO Clean
    private static setClass(classes: Array<string>, className: string) {
        classes.push(className);
    }

    private static deleteClass(classes: Array<string>, className: string) {
        const index = indexOf(className, classes);
        if (index >= 0) {
            classes.splice(index, 1);
        }
    }

    static getClass(element: ElementRef): Array<string> {
        return element.nativeElement.className.split(' ');
    }

    static existClass(element: ElementRef, className: string) {
        const classes = DOM.getClass(element);
        const index = indexOf(className, classes);
        const exist = index >= 0;
        return { classes, index, exist };
    }

    static addClass(element: ElementRef, className: string): ElementRef {
        const { classes, index, exist } = DOM.existClass(element, className);
        if (!exist) {
            DOM.setClass(classes, className);
            element.nativeElement.setAttribute('class', classes.join(' '));
        }
        return element;
    }

    static removeClass(element: ElementRef, className: string): ElementRef {
        const { classes, index, exist } = DOM.existClass(element, className);
        if (exist) {
            DOM.deleteClass(classes, className);
            element.nativeElement.setAttribute('class', classes.join(' '));
        }
        return element;
    }

    static toggleClass(element: ElementRef, className: string): ElementRef {
        const { classes, index, exist } = DOM.existClass(element, className);
        if (exist) {
            DOM.deleteClass(classes, className);
        } else {
            DOM.setClass(classes, className);
        }
        element.nativeElement.setAttribute('class', classes.join(' '));
        return element;
    }
}

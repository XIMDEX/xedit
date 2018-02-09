import { indexOf, remove } from 'ramda';
import { ElementRef } from '@angular/core';

export class DOM {

    constructor() { }

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

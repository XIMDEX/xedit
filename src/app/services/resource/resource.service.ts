import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    private isOpen: BehaviorSubject<boolean>;

    constructor() {
        this.isOpen = new BehaviorSubject<boolean>(false);
    }

    /**
     * Display the resource modal
     */
    public show() {
        this.isOpen.next(true);
    }

    /**
     * Hide the resource modal
     */
    public hide() {
        this.isOpen.next(false);
    }

    /**
     * Change the status of modal betwen show or hide
     *
     * @param open
     */
    public setStatus(open: boolean) {
        this.isOpen.next(open);
    }

    /**
     * Get the current status of modal
     *
     */
    public getStatus(): Observable<boolean> {
        return this.isOpen.asObservable();
    }
}

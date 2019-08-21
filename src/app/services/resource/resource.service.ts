import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    private isOpen: BehaviorSubject<boolean>;
    private type: BehaviorSubject<string | null>;
    private selectAction: BehaviorSubject<Function | null>;

    constructor() {
        this.isOpen = new BehaviorSubject<boolean>(false);
        this.type = new BehaviorSubject<string | null>(null);
        this.selectAction = new BehaviorSubject<Function>(evt => {});
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

    /**
     * Set current type to filter resources
     *
     * @param type
     */
    public setType(type: string | null) {
        this.type.next(type);
    }

    /**
     * Get current type to filter resources
     *
     * @return Observable<string|null>
     */
    public getType(): Observable<string | null> {
        return this.type.asObservable();
    }

    /**
     * Set current type to filter resources
     *
     * @param type
     */
    public setOnSelect(selectAction: Function | null) {
        this.selectAction.next(selectAction);
    }

    /**
     * Get current type to filter resources
     *
     * @return Observable<string|null>
     */
    public getOnSelect(): Observable<Function | null> {
        return this.selectAction.asObservable();
    }
}

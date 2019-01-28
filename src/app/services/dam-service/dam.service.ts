import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DamService {
    // Variables
    private closed: BehaviorSubject<boolean>;
    private configs: BehaviorSubject<object>;
    private onSelect: BehaviorSubject<Function>;

    // Constructor
    constructor() {
        // this.open = new BehaviorSubject<any>(null);
        this.closed = new BehaviorSubject<any>(null);
        this.configs = new BehaviorSubject<object>(null);
        this.onSelect = new BehaviorSubject<Function>(evt => {});
    }

    // ************************************** Getters and setters **************************************/
    getOpen(): Observable<object> {
        return this.configs.asObservable();
    }

    setOpen(configs: object) {
        this.configs.next(configs);
    }

    isClose(): Observable<boolean> {
        return this.closed.asObservable();
    }

    close() {
        this.closed.next(true);
    }

    getOnSelect() {
        return this.onSelect.asObservable();
    }

    setOnSelect(func: Function) {
        this.onSelect.next(func);
    }
}

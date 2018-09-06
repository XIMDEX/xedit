import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DamService {

  // Variables
  private open: BehaviorSubject<boolean>;
  private onSelect: BehaviorSubject<Function>;

  // Constructor
  constructor() {
    this.open = new BehaviorSubject<boolean>(false);
    this.onSelect = new BehaviorSubject<Function>((evt) => { });
  }

  // ************************************** Getters and setters **************************************/
  isOpen(): Observable<boolean> {
    return this.open.asObservable();
  }

  setIsOpen(open: boolean): void {
    this.open.next(open);
  }

  getOnSelect() {
    return this.onSelect.asObservable();
  }

  setOnSelect(func: Function) {
    this.onSelect.next(func);
  }

}

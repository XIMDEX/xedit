import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StateService {

  //Variables
  private currentView: BehaviorSubject<string>;
  private availableViews: BehaviorSubject<Array<string>>;

  //Constructor
  constructor() {
    this.currentView = new BehaviorSubject<string>('');
    this.availableViews = new BehaviorSubject<Array<string>>([]);
  }

  //************************************** Getters and setters **************************************/
  getCurrentView(): Observable<string> {
    return this.currentView.asObservable();
  }

  setCurrentView(view: string): void {
    this.currentView.next(view);
  }

  getAvailabelViews(): Observable<Array<string>> {
    return this.availableViews.asObservable();
  }

  setAvailableViews($availableViews): void {
    this.availableViews.next($availableViews);
  }
}

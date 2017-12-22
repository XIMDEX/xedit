import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FileService {

  private dataArray = new BehaviorSubject<string>('default');
  currentMessage = this.dataArray.asObservable();

  constructor() { }

  insertData(data: string) {
    this.dataArray.next(data);
  }
}

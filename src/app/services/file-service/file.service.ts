import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Image } from '../../models/image';

@Injectable()
export class FileService {

  private dataArray = new BehaviorSubject<string>('<p>Ejemplo</p><ximdex:image nodeId=\'prueba\'></ximdex:image>');
  currentMessage = this.dataArray.asObservable();

  private exampleMultiView = new BehaviorSubject<Image>(new Image());
  exampleMultiViewOb = this.exampleMultiView.asObservable();

  constructor() { }

  insertData(data: string) {
    this.dataArray.next(data);
  }

  changeImage(data: Image) {
    this.exampleMultiView.next(data);
  }
}

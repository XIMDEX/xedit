import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Image } from '../../models/image';
import { File } from '../../models/file';

@Injectable()
export class FileService {

  private file;
  public obsFile;

  private exampleMultiView = new BehaviorSubject<Image>(new Image());
  exampleMultiViewOb = this.exampleMultiView.asObservable();

  constructor() {
    this.file = new BehaviorSubject<File>(new File);
    this.obsFile = this.file.asObservable();
  }

  setFile(data) {
    var file = new File(data);
    this.file.next(file);
  }

  public lastStateFile = function () {
    var file = this.file._value.lastState();
    this.file.next(file);
  }

  public nextStateFile = function () {
    var file = this.file._value.nextState();
    this.file.next(file);
  }

  changeImage(data: Image) {
    this.exampleMultiView.next(data);
  }
}

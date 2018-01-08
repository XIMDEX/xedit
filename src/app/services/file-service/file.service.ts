import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Image } from '../../models/image';
import { html2json } from 'html2json';
import { File } from '../../models/file';

@Injectable()
export class FileService {

  private schema;
  private content;

  public obsScheme;
  public obsContent;

  private exampleMultiView = new BehaviorSubject<Image>(new Image());
  exampleMultiViewOb = this.exampleMultiView.asObservable();

  constructor() {
    this.content = new BehaviorSubject<JSON>(html2json('<p>Ejemplo</p>'));
    this.obsContent = this.content.asObservable();

    this.schema = new BehaviorSubject<JSON>(null);
    this.obsScheme = this.schema.asObservable();
  }

  setFile(data: string, schema: JSON) {

    if (data) {
      // Convert html to JSON
      var content = File.html2json(data);
      this.content.next(content);
    }

    if (schema)
      this.schema.next(schema);

    console.log(this.content);
  }

  changeImage(data: Image) {
    this.exampleMultiView.next(data);
  }
}

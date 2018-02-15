import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }

  transform(value: any): any {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

}

import { keys } from 'ramda';
import { Pipe, PipeTransform } from '@angular/core';

import { Node } from '@models/node';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value, args: string[]): any {
    /*const attributes = [];
    node.getAvailableAttributes().forEach(element => {
      attributes.push({ name: element, value: node.getAttribute(element, '') });
    });
    return attributes;*/
    return keys(value);
  }
}

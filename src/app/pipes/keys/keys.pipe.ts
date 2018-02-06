import { Pipe, PipeTransform } from '@angular/core';
import { Node } from '../../models/node';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(node: Node): any {
    var attributes = [];
    node.getAvailableAttributes().forEach(element => {
      attributes.push({ name: element, value: node.getAttribute(element, '') })
    });
    return attributes;
  }
}

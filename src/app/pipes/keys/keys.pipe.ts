import { Pipe, PipeTransform } from '@angular/core';
import { Node } from '../../models/node';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(node: Node): any {
    var attributes = [];
    console.log(node.getType());
    console.log(node.getAvailableAttributes());
    Object.keys(node.getAttributes()).forEach(element => {
      if (node.getAvailableAttributes().includes(element))
        attributes.push({ name: element, value: node.getAttribute(element) })

    });
    return attributes;
  }
}

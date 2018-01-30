import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debug'
})
export class DebugPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('VALUE', value, 'TYPEOF', typeof value, 'ARGS', args);
  }

}

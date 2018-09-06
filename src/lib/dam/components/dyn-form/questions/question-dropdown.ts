import { QuestionBase } from './question-base';
import { hasIn, is } from 'ramda';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] | string;
  multi: boolean;
  searchable: boolean;
  fetchable: boolean;
  endpoint: string;

  constructor (
    options: {} = {},
    multi?: boolean,
    searchable?: boolean,
    fetchable?: boolean,
    endpoint?: string) {

    super(options);

    this.set(options, 'options', [])
      .set(options, 'multi', false)
      .set(options, 'searchable', false)
      .set(options, 'fetchable', false)
      .set(options, 'endpoint', '');

  }

  setVal(val: any = null) {
    let result: any;
    if (Array.isArray(val)) {
      result = val.map((index) => {
        return this.valFixer(index)
      });
    } else {
      result = this.valFixer(val)
    }

    this.val = result;
    return this;
  }

  private valFixer (val: any): Object {
    let result = {key: null, value: null};
    if(is(Object, val)) {
      const key = hasIn(this.map['key'], val) ? val[this.map['key']] : null;
      const value = hasIn(this.map['value'], val) ? val[this.map['value']] : null;
      result = key
    } else {
      result = val
    }
    return result;
  }
}

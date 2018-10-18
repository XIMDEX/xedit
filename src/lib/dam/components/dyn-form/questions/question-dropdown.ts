import { QuestionBase } from './question-base';
import { hasIn, is } from 'ramda';

/** This components extends a dropdown field question from a question base */
export class DropdownQuestion extends QuestionBase<string> {
  /**The field type */
  controlType = 'dropdown';
  /** The available options for the dropdown */
  options: {key: string, value: string}[] | string;
  /** If is multi-selectable */
  multi: boolean;
  /** If the field is searchable */
  searchable: boolean;
  /** If the field needs its data from a API endpoint */
  fetchable: boolean;
  /** The endpoint from where the data is fetched */
  endpoint: string;

  /**@ignore */
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

  /** Sets the value(s) checking whether the value is an array or not */
  setVal(val: any = null) {
    let result: any;
    if (Array.isArray(val)) {
      result = val.map((index) => {
        return this.valFixer(index);
      });
    } else {
      result = this.valFixer(val);
    }

    this.val = result;
    return this;
  }

  /**@ignore */
  private valFixer (val: any): Object {
    let result = {key: null, value: null};
    if (is(Object, val)) {
      const key = hasIn(this.map['key'], val) ? val[this.map['key']] : null;
      const value = hasIn(this.map['value'], val) ? val[this.map['value']] : null;
      result = key;
    } else {
      result = val;
    }
    return result;
  }
}

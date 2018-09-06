import { hasIn } from 'ramda';

export class QuestionBase<T> {

  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  val: any;
  map: { key: string, value: string };

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    val?: any,
    map?: { key: string, value: string }
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    const val = options.val || null;
    this.set(options, 'map', {})
      .setVal(val);
  }

  set(object, field: string, _default: any = null): QuestionBase<T> {
    let value = _default;
    if (hasIn(field, object)) {
      value = object[field];
    }
    this[field] = value;
    return this;
  }

  setVal(val: any = null) {
    this.val = val;
    return this;
  }
}

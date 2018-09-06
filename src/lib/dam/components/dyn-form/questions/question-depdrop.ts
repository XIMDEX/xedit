import { QuestionBase } from './question-base';

export class DepDropQuestion extends QuestionBase<string> {
  controlType = 'depdrop';
  options: {key: string, value: string}[] = [];
  ref: number;
  endpoint: string;
  param: string;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.ref = options['ref'] || 0;
    this.endpoint = options['endpoint'] || '';
    this.param = options['param'] || '';
  }
}

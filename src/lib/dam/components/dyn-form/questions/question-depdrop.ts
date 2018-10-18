import { QuestionBase } from './question-base';

/** This components extends a dropdown field question from a question base
 *  where their options depend on another dropdown or depdrop selection
*/
export class DepDropQuestion extends QuestionBase<string> {
  /**The field type */
  controlType = 'depdrop';
  /** The available options for the dropdown */
  options: {key: string, value: string}[] = [];
  /** The depending dropdown reference */
  ref: number;
  /** The endpoint from where the data is fetched */
  endpoint: string;
  /**@ignore */
  param: string;

  /**@ignore */
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
    this.ref = options['ref'] || 0;
    this.endpoint = options['endpoint'] || '';
    this.param = options['param'] || '';
  }
}

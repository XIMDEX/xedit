import { QuestionBase } from './question-base';

/** This components extends a text area field question from a question base */
export class TextAreaQuestion extends QuestionBase<string> {
  /**The field type */
  controlType = 'text-area';
  /**@ignore */
  type: string;

  /**@ignore */
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    if (this.val instanceof Object) {
      this.value = '';
    } else {
      this.value = this.val;
    }
  }
}

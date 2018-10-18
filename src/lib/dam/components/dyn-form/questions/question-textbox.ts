import { QuestionBase } from './question-base';

/** This components extends a text input field question from a question base */
export class TextboxQuestion extends QuestionBase<string> {
  /**The field type */
  controlType = 'text';
  /**@ignore */
  type: string;

  /**@ignore */
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

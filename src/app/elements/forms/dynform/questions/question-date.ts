import { QuestionBase } from './question-base';

/** This components extends a date input field question from a question base */
export class DateQuestion extends QuestionBase<string> {
    /**The field type */
    controlType = 'date';
    /**@ignore */
    type: string;

    /**@ignore */
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}

import { QuestionBase } from './question-base';

export class FileQuestion extends QuestionBase<string> {
    /**The field type */
    controlType = 'file';
    /**The accepted mimes*/
    accept="*"
}
import { QuestionBase } from './question-base';
import { NgxSmartModalService } from 'ngx-smart-modal';

export class ImageQuestion extends QuestionBase<string> {
    /**The field type */
    controlType = 'image';
    /**If it should use a callback*/
    callback: any;

    /**@ignore */
    constructor(
        options: {} = {},
        callback?: any, 
    ) {
        super(options);
        this.set(options, 'callback', 'modal-1');
    }
    
}
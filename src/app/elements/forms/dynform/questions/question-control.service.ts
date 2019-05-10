import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { QuestionBase } from "./question-base";
/**
 * Service that manages the questions and creates the form groups.
 */
@Injectable()
export class QuestionControlService {
    /**@ignore */
    constructor() {}

    /**
     * Create a new form group given a questions array.
     * @param {QuestionBase<any>} questions The questions array
     * @returns {FormGroup} The created form group
     */
    toFormGroup(questions: QuestionBase<any>[]) {
        const group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required
                ? new FormControl(
                      {
                          value: question.value || "",
                          disabled: !!question.readonly
                      },
                      Validators.required
                  )
                : new FormControl({
                      value: question.value || "",
                      disabled: !!question.readonly
                  });
        });
        return new FormGroup(group);
    }
}

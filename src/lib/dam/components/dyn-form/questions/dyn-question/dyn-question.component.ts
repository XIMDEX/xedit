import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { isNil, hasIn } from 'ramda';
import { MainService } from '../../../../services/main.service';

/**
 * Component extracted from the Angular docs for creating dynamic questions
 * for dynamic forms.
 */
@Component({
  selector: 'app-question',
  templateUrl: './dyn-question.component.html'
})
export class DynQuestionComponent implements OnInit {
  /**
   * A question to be processed
   */
  @Input() question: QuestionBase<any>;
  /**
   * The form group where this question belongs to
   */
  @Input() form: FormGroup;

  /**@ignore */
  constructor(
    private mainService: MainService
  ) { }

  /**@ignore */
  ngOnInit() {
    if (hasIn('ref', this.question)) {
      this.form.get(this.question['ref']).valueChanges.subscribe(val => {
        this.searchOptions();
      });
    }
    if (this.question.controlType === 'dropdown' && this.question['fetchable']) {
      this.getOptions();
    }
  }

  /**
   * Returns the validity of the form control for the question
   * @returns {Boolean} True if valid, False otherwise
   */
  get isValid() { return this.form.controls[this.question.key].valid; }

  /**
   * Gets the options for the dropdown or depdrop component
   */
  searchOptions() {
    const value = this.form.get(this.question['ref']).value;
    if ( value !== '') {
      this.mainService.getOptions(
        this.question['endpoint'], this.question['param'], value
      ).subscribe(resp => {
          this.question['options'] = [];
          this.question['options'] = resp['result'].data.map(
            item => (
              {
                key: item[this.question['map'].key], value: item[this.question['map'].value]
              })
            );
        });
    }
  }

  /**
   * Gets the options for the dropdown or depdrop component
   */
  getOptions() {
      this.mainService.getOptions(this.question['endpoint'], '', '').subscribe(
        resp => {
          this.question['options'] = [];
          this.question['options'] = resp['result'].data.map(
            item => (
              {
                key: item[this.question['map'].key], value: item[this.question['map'].value]
              })
            );
        });
    }
}

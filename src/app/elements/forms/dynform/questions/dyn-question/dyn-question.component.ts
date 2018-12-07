import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { isNil, hasIn } from 'ramda';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  /**
   *The authorization token for api calls.
   *
   * @type {string}
   * @memberof DynQuestionComponent
   */
  @Input() token: string = null;
  /**
   *The URL to use for fetching depdrop and dopdrown options.
   *
   * @type {string}
   * @memberof DynQuestionComponent
   */
  @Input() fetchUrl: string = null;

  @Input() questionClass = 'dam-form-item dam-edit-item';

  /**@ignore */
  constructor(
    private http: HttpClient
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
   * Gets the options for the depdrop component
   */
  searchOptions() {
    const value = this.form.get(this.question['ref']).value;
    if ( value !== '') {
      this.fetchOptions(
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
   * Gets the options for the dropdown component
   */
  getOptions() {
      this.fetchOptions(this.question['endpoint'], '', '').subscribe(
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

  fetchOptions(end: string, key: string, param: string) {
    const url = this.fetchUrl + end;
    const params = {};
    params[key] = param;
    let heads = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json'
    });
    if (!isNil(this.token)) {
      heads = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + this.token,
        'Accept': 'application/json'
      });
    }
    return this.http.get(url, { headers: heads, params: params });
  }
}

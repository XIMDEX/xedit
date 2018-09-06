import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';
import { isNil, hasIn } from 'ramda';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-question',
  templateUrl: './dyn-question.component.html'
})
export class DynQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    if (hasIn('ref', this.question)) {
      this.form.get(this.question['ref']).valueChanges.subscribe(val => {
        this.searchOptions();
      });
    }
    if(this.question.controlType === 'dropdown' && this.question['fetchable']) {
      this.getOptions();
    }
  }

  get isValid() { return this.form.controls[this.question.key].valid; }

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

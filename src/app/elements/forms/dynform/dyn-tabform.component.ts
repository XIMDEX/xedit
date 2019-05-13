import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { QuestionBase } from './questions/question-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from './questions/question-control.service';
import TabsFormMapper from './TabsFormMapper';
import { isNil } from 'ramda';

@Component({
  selector: 'app-dyn-tabform',
  templateUrl: './dyn-tabform.component.html',
  styleUrls: ['./dyn-tabform.component.css'],
  providers: [ QuestionControlService ]
})
export class DynTabformComponent implements OnInit, OnChanges {
  @Input() schema: any = {};
  tabs: any[] = [];
   /**
   * The array of questions
   */
  questions: QuestionBase<any>[] = [];
  /**
   * The angular form group instance
   */
  tabform: FormGroup;
  /**
   * The payload input with all the data
   */
  @Input()
  payLoad = {};
  /**
   * An emitter to emit the data form after finished
   */
  @Output()
  sendForm = new EventEmitter<any>();
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
  @Input() forceTabs = false;

  show = false;
  formMapper: TabsFormMapper = null;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.formMapper = new TabsFormMapper(this.schema);
    this.tabs = this.formMapper.getTabs();
    this.extractQuestions(this.formMapper.hasSections);
    this.tabform.valueChanges.subscribe(data => {
      this.sendForm.emit(data);
    });
  }

  ngOnChanges() {}

  extractQuestions(hasSections) {
    this.questions = [];
    if (hasSections) {
      this.tabs.map((tab) => {
        tab.sections.map((section) => {
          this.questions = this.questions.concat(section.questions);
        });
      });
    } else {
      this.tabs.map((tab) => {
        this.questions = this.questions.concat(tab.questions);
      });
    }
    this.tabform = this.qcs.toFormGroup(this.questions);
  }

  /**
   * Sends the data as a json string when submitted
   */
  onSubmit() {
    this.payLoad = JSON.stringify(this.tabform.value);
  }

  toggleVisible() {
    this.show = !this.show;
  }


}

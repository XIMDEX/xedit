import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './questions/question-base';
import { QuestionControlService } from './questions/question-control.service';
import { isNil } from 'ramda';

/**
 * This component represents a form build by dynamic fields retrieved by the forms mapper.
 */
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dyn-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynFormComponent implements OnInit, OnChanges {

  /**
   * The array of questions
   */
  @Input() questions: QuestionBase<any>[] = [];
  /**
   * The angular form group instance
   */
  form: FormGroup;
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
   * A reset signal
   */
  @Input()
  reset = false;

  /**@ignore */
  constructor(private qcs: QuestionControlService) { }

  /**@ignore */
  ngOnInit() {
    this.form.valueChanges.subscribe(data => {
      this.sendForm.emit(data);
    });
  }

  /**@ignore */
  ngOnChanges() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.form.valueChanges.subscribe(data => {
      this.sendForm.emit(data);
    });
  }

  /**
   * Sends the data as a json string when submitted
   */
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}

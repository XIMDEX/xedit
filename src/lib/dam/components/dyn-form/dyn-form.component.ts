import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './questions/question-base';
import { QuestionControlService } from './questions/question-control.service';
import { isNil } from 'ramda';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dyn-form.component.html',
  providers: [QuestionControlService]
})
export class DynFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  @Input()
  payLoad = {};
  @Output()
  sendForm = new EventEmitter<any>();

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    this.form.valueChanges.subscribe(data => {
      this.sendForm.emit(data);
    });
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}

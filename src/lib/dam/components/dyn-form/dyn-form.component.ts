import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './questions/question-base';
import { QuestionControlService } from './questions/question-control.service';
import { isNil } from 'ramda'

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dyn-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynFormComponent implements OnInit, OnChanges {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  @Input()
  payLoad = {};
  @Output()
  sendForm = new EventEmitter<any>();
  @Input()
  reset: boolean = false;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => {
      this.sendForm.emit(data);
    });
  }
  ngOnChanges(){
    this.form = this.qcs.toFormGroup(this.questions);
    console.log("hola")
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}

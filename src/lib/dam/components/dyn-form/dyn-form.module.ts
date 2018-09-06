import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DynFormComponent } from './dyn-form.component';
import { DynQuestionComponent } from './questions/dyn-question/dyn-question.component';
import { NgSelectModule } from '@ng-select/ng-select';

 @NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, NgSelectModule ],
  declarations: [DynFormComponent, DynQuestionComponent],
  bootstrap: [],
  exports: [DynFormComponent, DynQuestionComponent]
})
export class DynFormModule {
  constructor() {}
}

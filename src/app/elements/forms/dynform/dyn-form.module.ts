import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DynTabformComponent } from './dyn-tabform.component';
import { DynQuestionComponent } from './questions/dyn-question/dyn-question.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';

 @NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, NgSelectModule ],
  declarations: [DynTabformComponent, DynQuestionComponent, TabComponent, TabsComponent],
  bootstrap: [],
  exports: [DynTabformComponent, DynQuestionComponent, TabComponent, TabsComponent]
})
export class DynFormModule {
  constructor() {}
}

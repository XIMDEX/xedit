import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './filters.component';
import { FilterItemComponent } from './filter-item/filter-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FiltersComponent,
    FilterItemComponent
  ]
})
export class FiltersModule { }

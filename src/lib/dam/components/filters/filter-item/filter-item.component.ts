import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

/**
 * @class
 * @ignore
 */
@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {
  form: FormGroup;
  options: [{}];
  constructor() { }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynQuestionComponent } from './dyn-question.component';

describe('DynQuestionComponent', () => {
  let component: DynQuestionComponent;
  let fixture: ComponentFixture<DynQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiInputAcordionComponent } from './multi-input-acordion.component';

describe('MultiInputAcordionComponent', () => {
  let component: MultiInputAcordionComponent;
  let fixture: ComponentFixture<MultiInputAcordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiInputAcordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiInputAcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

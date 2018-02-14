import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAcordionComponent } from './input-acordion.component';

describe('InputAcordionComponent', () => {
  let component: InputAcordionComponent;
  let fixture: ComponentFixture<InputAcordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAcordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

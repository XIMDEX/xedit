import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordionComponent } from './acordion.component';

describe('AcordionComponent', () => {
  let component: AcordionComponent;
  let fixture: ComponentFixture<AcordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

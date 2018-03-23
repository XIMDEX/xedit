import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateControllerComponent } from './state-controller.component';

describe('StateControllerComponent', () => {
  let component: StateControllerComponent;
  let fixture: ComponentFixture<StateControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

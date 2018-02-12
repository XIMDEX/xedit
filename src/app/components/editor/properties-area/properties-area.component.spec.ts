import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesAreaComponent } from './properties-area.component';

describe('PropertiesAreaComponent', () => {
  let component: PropertiesAreaComponent;
  let fixture: ComponentFixture<PropertiesAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

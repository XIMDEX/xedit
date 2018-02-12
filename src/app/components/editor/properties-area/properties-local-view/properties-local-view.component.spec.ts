import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesLocalViewComponent } from './properties-local-view.component';

describe('PropertiesViewComponent', () => {
  let component: PropertiesLocalViewComponent;
  let fixture: ComponentFixture<PropertiesLocalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesLocalViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesLocalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesGlobalViewComponent } from './properties-global-view.component';

describe('PropertiesViewComponent', () => {
  let component: PropertiesGlobalViewComponent;
  let fixture: ComponentFixture<PropertiesGlobalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertiesGlobalViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesGlobalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

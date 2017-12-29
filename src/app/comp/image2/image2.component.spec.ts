import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image2Component } from './image2.component';

describe('Image2Component', () => {
  let component: Image2Component;
  let fixture: ComponentFixture<Image2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

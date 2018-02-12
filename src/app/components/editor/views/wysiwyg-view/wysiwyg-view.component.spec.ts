import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygViewComponent } from './wysiwyg-view.component';

describe('WysiwygViewComponent', () => {
  let component: WysiwygViewComponent;
  let fixture: ComponentFixture<WysiwygViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysiwygViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

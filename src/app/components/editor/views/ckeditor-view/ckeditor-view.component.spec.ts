import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorViewComponent } from './ckeditor-view.component';

describe('CkeditorViewComponent', () => {
  let component: CkeditorViewComponent;
  let fixture: ComponentFixture<CkeditorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkeditorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

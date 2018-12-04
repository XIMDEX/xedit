import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataViewComponent } from './metadata-view.component';

describe('MetadataViewComponent', () => {
  let component: MetadataViewComponent;
  let fixture: ComponentFixture<MetadataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

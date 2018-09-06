import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsModalComponent } from './assets-modal.component';

describe('AssetsModalComponent', () => {
  let component: AssetsModalComponent;
  let fixture: ComponentFixture<AssetsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

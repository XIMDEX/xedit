import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynTabformComponent } from './dyn-tabform.component';

describe('DynTabformComponent', () => {
  let component: DynTabformComponent;
  let fixture: ComponentFixture<DynTabformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynTabformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynTabformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

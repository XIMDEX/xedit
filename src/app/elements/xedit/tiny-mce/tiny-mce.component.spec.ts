import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyMCEComponent } from './tiny-mce.component';

describe('TinyMCEComponent', () => {
    let component: TinyMCEComponent;
    let fixture: ComponentFixture<TinyMCEComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TinyMCEComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TinyMCEComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

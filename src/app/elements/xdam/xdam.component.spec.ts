import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdamComponent } from './xdam.component';

describe('XdamComponent', () => {
    let component: XdamComponent;
    let fixture: ComponentFixture<XdamComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [XdamComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(XdamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

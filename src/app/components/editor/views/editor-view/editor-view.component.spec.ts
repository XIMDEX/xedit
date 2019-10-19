import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorViewComponent } from './editor-view.component';

describe('EditorViewComponent', () => {
    let component: EditorViewComponent;
    let fixture: ComponentFixture<EditorViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditorViewComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditorViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

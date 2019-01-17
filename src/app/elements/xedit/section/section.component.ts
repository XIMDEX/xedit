import { Component, OnInit, ElementRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { XeditBaseComponent } from '../xedit.base.component';
import { isNil } from 'ramda';
import { DOM } from '../../../models/dom';

@Component({
    selector: 'app-section',
    template: '<ng-content></ng-content>',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent extends XeditBaseComponent implements OnInit, OnChanges {

    public static hasSlot: boolean = true;

    constructor(public host: ElementRef) {
        super();
    }

    ngOnInit() {
    }

    ngOnChanges({ selected }: SimpleChanges) {
        if (!isNil(selected) && selected.currentValue !== selected.previousValue) {
            const element = new DOM(this.host.nativeElement.querySelector('[xe_section]'));
            if (this.isSelected()) {
                element.addClass('xe_selected')
            } else {
                element.removeClass('xe_selected');
            }
        }
    }

    @HostListener('click', ['$event'])
    onClick(evt: MouseEvent) {
        evt.stopPropagation();
        const { uuid } = this.content;
        this.selectNode.emit(uuid);
        this.toolbar.emit(null);
    }

}

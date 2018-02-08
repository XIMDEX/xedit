import { EditorService } from '../../services/editor-service/editor.service';
import { isNil, equals } from 'ramda';
import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { XeditMapper } from '../../models/schema/xedit-mapper';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

    @Output() selectNode: EventEmitter<string> = new EventEmitter();

    public breadcrumb: Array<Object> = [];
    private currentNode: any;
    constructor(private _editorService: EditorService, private _elementRef: ElementRef) { }

    ngOnInit() {
        this._editorService.getCurrentNode().subscribe(currentNode => {
            if (!isNil(currentNode)) {
                this.breadcrumb = this.getBreadCrumb(currentNode.getSection());
            }
        });
    }

    getBreadCrumb(currentNode, rootTag = 'xedit', path: Array<Object> = []) {
        let section = null;
        let key = null;

        if (!isNil(currentNode) && !isNil(section = currentNode.getAttribute(XeditMapper.TAG_SECTION_TYPE)) &&
            !isNil(key = currentNode.getAttribute(XeditMapper.TAG_UUID))) {
            path.unshift({ key: key, name: section });
        }

        return isNil(currentNode) || isNil(currentNode.parentNode) || equals(currentNode.nodeName.toLowerCase(), rootTag) ?
            path : this.getBreadCrumb(currentNode.parentNode, rootTag, path);
    }

    changeSelection(elementKey) {
        this.selectNode.emit(elementKey);
    }

}

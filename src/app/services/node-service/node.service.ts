import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Node } from '@app/models/node';
import { isNil } from 'ramda';

@Injectable({
    providedIn: 'root'
})
export class NodeService {
    private next: Subject<Node>;
    private current: Node;

    constructor() {
        this.next = new Subject<Node>();
        this.current = null;
    }

    /******************************** Getters and setters  ********************************/

    public set(node: Node) {
        if (!this.equals(node, this.current)) {
            this.beforChange(node);
            this.next.next(node);
            this.afterChange(node);
            this.current = node;
        }
    }

    public get() {
        return this.next.asObservable();
    }

    /******************************** Aux methods  ********************************/

    private beforChange(node: Node) {
        if (!isNil(this.current)) {
            this.current.beforeUnselect();
        }
        if (!isNil(node)) {
            node.beforeSelect();
        }
    }

    private afterChange(node: Node) {
        if (!isNil(this.current)) {
            this.current.afterUnselect();
        }
        if (!isNil(node)) {
            node.afterSelect();
        }
    }

    /**
     *
     * @param node
     * @param node2
     *
     * @return boolean
     */
    private equals(node: Node, node2: Node) {
        const cond1 = isNil(node) && isNil(node2);
        const cond2 = !isNil(node) && !isNil(node2) && node.getUuid() === node2.getUuid();

        return cond1 || cond2;
    }
}

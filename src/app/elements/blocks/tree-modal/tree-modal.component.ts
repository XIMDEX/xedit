import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { isNil } from 'ramda';
import { TreeComponent } from '@elements/blocks/tree/tree.component';

@Component({
  selector: 'app-tree-modal',
  templateUrl: './tree-modal.component.html',
  styleUrls: ['./tree-modal.component.scss']
})
export class TreeModalComponent implements OnInit {
  @ViewChild('tree') tree: TreeComponent;

  public close = false;
  public selectedId: string;

  public type;
  public path;

  constructor(private ngxModal: NgxSmartModalService) { }

  openModal(id, type, p = []) {
    this.close = false;
    this.selectedId = null;
    this.path = p;
    this.type = type;
    this.ngxModal.open(id);
    this.tree.resetTreeModel();

    const promise = new Promise(
      (resolve, reject) => {
        const loop = window.setInterval(() => {
          try {
            const treeModal = window['treeModal'];
            if (!isNil(treeModal.selectedId)) {
              window.clearInterval(loop);
              this.ngxModal.close(id);
              resolve(treeModal.selectedId);
            } else if (treeModal.close && isNil(treeModal.selectedId)) {
              window.clearInterval(loop);
              this.ngxModal.close(id);
              reject('Closed without selection');
            }
          } catch (e) {
            window.clearInterval(loop);
            this.ngxModal.close(id);
            reject(e);
          }
        }, 300);

      }
    );
    return promise;
  }

  closeModal(id, selectedId = null) {
    this.selectedId = selectedId;
    this.close = true;
  }

  ngOnInit() {
    window['treeModal'] = this;
  }
}

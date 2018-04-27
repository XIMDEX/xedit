import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService, ModalComponent } from 'angular-5-popup';
import { isNil, path } from 'ramda';
import { TreeComponent } from '@elements/blocks/tree/tree.component';

@Component({
  selector: 'app-tree-modal',
  templateUrl: './tree-modal.component.html',
  styleUrls: ['./tree-modal.component.scss']
})
export class TreeModalComponent implements OnInit {
  @ViewChild("modal") modal: ModalComponent;
  @ViewChild("tree") tree: TreeComponent;

  public close: boolean = false;
  public selectedId: string;

  private type;
  private path;

  constructor(private ms: ModalService) { }

  openModal(id, type, path = []) {
    this.close = false;
    this.selectedId = null;
    this.path = path;
    this.type = type;
    this.modal.openModal(id);
    this.tree.resetTreeModel();

    let promise = new Promise(
      (resolve, reject) => {
        const loop = window.setInterval(() => {
          try {
            const treeModal = window['treeModal'];
            if (!isNil(treeModal.selectedId)) {
              window.clearInterval(loop);
              this.modal.closeModal(id);
              resolve(treeModal.selectedId);
            } else if (treeModal.close && isNil(treeModal.selectedId)) {
              window.clearInterval(loop);
              this.modal.closeModal(id);
              reject("Closed without selection");
            }
          } catch (e) {
            window.clearInterval(loop);
            this.modal.closeModal(id);
            reject(e);
          }
        }, 300);

      }
    );
    return promise;
  }

  closeModal(id, selectedId) {
    this.selectedId = selectedId;
    this.close = true;
  }

  ngOnInit() {
    window['treeModal'] = this;
  }
}
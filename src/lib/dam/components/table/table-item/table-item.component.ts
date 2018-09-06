import { Component, OnInit, Input } from '@angular/core';
import { faDownload, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../../../services/main.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { saveAs } from 'file-saver';
import { Item } from '../../../models/Item';
import { Asset } from '../../../models/Asset';
import { hasIn } from 'ramda';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  faDownload = faDownload;
  faEdit = faEdit;
  faTrash = faTrash;
  image = '';
  @Input() item: Item;
  itemConfigs = null;
  header = '';
  title = '';
  subtitle = '';

  constructor(
    private mainService: MainService,
    private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.image = this.parseImage();
    this.itemConfigs = this.mainService.getComponentConfigs('tableItem');
    this.initFields();
  }

  initFields() {
    this.header = this.itemConfigs.fields.header.replace('$', this.item.type);
    this.title = this.itemConfigs.fields.title.replace('$', this.item.title);
    this.subtitle = this.itemConfigs.fields.subtitle.replace('$', this.item.size);
  }

  parseImage() {
    let img = '';
    switch (this.item.type) {
      case 'image':
        img = this.getResourceImage(this.item.hash);
        break;
      case 'audio':
        img = 'https://via.placeholder.com/200/ef680e/ffffff?text=Audio';
        break;
      case 'video':
        img = 'https://via.placeholder.com/200/af8282/ffffff?text=Video';
        break;
      case 'pdf':
        img = this.getResourceImage(this.item.hash);
        break;
      case 'other':
        img = 'https://via.placeholder.com/200/5ab1c9/ffffff?text=Other';
        break;
    }
    return img;
  }

  getResourceImage(hash) {
    const token = this.mainService.getToken();
    return this.mainService.getRoute(
      'get', 'resources') + '/' + hash + '/image?api_token=' + token + '&size=mini';
  }

  downloadFile() {
    this.mainService.getResource(this.item.hash).subscribe(
      res => {
        const ext = res['result'].data.extension;
        this.mainService.downloadResource(this.item.hash).subscribe(
          response => {
            saveAs(response, this.item.title + '.' + ext);
          }
        );
      }
    );
  }

  deleteFile() {
    this.mainService.deleteResource(this.item.id).subscribe(
      res => {
        this.mainService.setCurrentPage(this.mainService.getCurrentPageValue());
      }
    );
  }

  editFile() {
    let itemData;
    let asset;
    this.mainService.getResource(this.item.hash).subscribe(
      response => {
        itemData = response['result'].data;
        asset = new Asset(
          itemData.title,
          itemData.description,
          itemData.author,
          '',
          null,
          itemData.extension,
          itemData.items.length > 0 ? itemData.items : null,
          itemData.type,
          itemData.category
        );
        const data: Object = {
          id: this.item.id,
          asset: asset
        };
        this.ngxSmartModalService.setModalData(data, 'assets');
        this.ngxSmartModalService.getModal('assets').open();
        this.mainService.setCurrentPage(this.mainService.getCurrentPageValue());
      }
    );
  }
}

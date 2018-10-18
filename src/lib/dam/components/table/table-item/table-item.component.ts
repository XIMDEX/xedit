import { Component, OnInit, Input } from '@angular/core';
import { faDownload, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MainService } from '../../../services/main.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { saveAs } from 'file-saver';
import { Item } from '../../../models/Item';
import { Asset } from '../../../models/Asset';

/**
 * Component used as a item in the table list for displaying the data of the assigned record.
 */
@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  /**
   * @ignore
   */
  faDownload = faDownload;
  /**
   * @ignore
   */
  faEdit = faEdit;
  /**
   * @ignore
   */
  faTrash = faTrash;
  /**
   * The image src to be displayed by the item.
   */
  image = '';
  /**
   * The item data as a Item model instance.
   */
  @Input() item: Item;
  /**
   * Config object for this component extracted using the Profile mapper.
   */
  itemConfigs = null;
  /**
   * The string displayed as a header for the item.
   */
  header = '';
  /**
   * The string displayed as a title for the item.
   */
  title = '';
  /**
   * The string displayed as a subtitle for the item.
   */
  subtitle = '';
  /**
   * Mapper for IDs for multiple requests methods
   */
  requestsModel = null;

  /**
   * @ignore
   */
  constructor(
    private mainService: MainService,
    private ngxSmartModalService: NgxSmartModalService) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.image = this.parseImage();
    this.itemConfigs = this.mainService.getComponentConfigs('tableItem');
    this.requestsModel = this.mainService.getModel('requests');
    this.initFields();
  }

  /**
   * Creates the strings used in the display replacing values using the config given by the Profile mapper.
   */
  initFields() {
    this.header = this.itemConfigs.fields.header.replace('$', this.item.type);
    this.title = this.itemConfigs.fields.title.replace('$', this.item.title);
    this.subtitle = this.itemConfigs.fields.subtitle.replace('$', this.item.size);
  }

  /**
   * Generates image src given the data in the item.
   * @returns {string} img
   */
  parseImage() {
    let img = '';
    switch (this.item.type) {
      case 'image':
        img = this.getResourceImage(this.item.image);
        break;
      case 'audio':
        img = 'https://via.placeholder.com/200/ef680e/ffffff?text=Audio';
        break;
      case 'video':
        img = 'https://via.placeholder.com/200/af8282/ffffff?text=Video';
        break;
      case 'pdf':
        img = this.getResourceImage(this.item.image);
        break;
      case 'other':
        img = 'https://via.placeholder.com/200/5ab1c9/ffffff?text=Other';
        break;
    }
    return img;
  }

  /**
   * Generates a valid src string using the auth token.
   * @param {string} image The src string
   */
  getResourceImage(image: string) {
    const token = this.mainService.getToken();
    return image + '&api_token=' + token;
  }

  /**
   * Fetchs a file and downloads it in the user device.
   */
  downloadFile() {
    this.mainService.getResource(this.item.hash).subscribe(
      res => {
        const ext = res['result'].data.extension;
        this.mainService.downloadResource(this.item[this.requestsModel.get]).subscribe(
          response => {
            saveAs(response, this.item.title + '.' + ext);
          }
        );
      }
    );
  }

  /**
   * Opens delete modal to confirm permanent item deletion from the server.
   */
  deleteFile() {
    /*this.mainService.deleteResource(this.item.id).subscribe(
      res => {
        this.mainService.setCurrentPage(this.mainService.getCurrentPageValue());
      }
    );*/
    const data: Object = {
      id: this.item[this.requestsModel.delete],
      title: this.title
    };
    this.ngxSmartModalService.setModalData(data, 'deleteModal');
    this.ngxSmartModalService.getModal('deleteModal').open();
  }

  /**
   * Fetch data from server using the item id, sets up the assets modal and opens it.
   */
  editFile() {
    let itemData;
    let asset;
    this.mainService.getResource(this.item[this.requestsModel.get]).subscribe(
      response => {
        itemData = response['result'].data;
        asset = <Asset> itemData;
        const data: Object = {
          id: this.item[this.requestsModel.put],
          asset: asset
        };
        this.ngxSmartModalService.setModalData(data, 'assets');
        this.ngxSmartModalService.getModal('assets').open();
        // this.mainService.setCurrentPage(this.mainService.getCurrentPageValue());
      }
    );
  }
}

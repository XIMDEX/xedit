import { Image } from '../../models/image';
import { FileService } from '../../services/file-service/file.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ximdex:image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() nodeId: string = '';
  @Input() uid: string = '';
  image = new Image();

  url: string = 'https://pbs.twimg.com/profile_images/469433151354179585/9ZcEyREy_400x400.png';

  constructor(private _fileService: FileService) { }


  ngOnInit() {
    if (!this.nodeId)
      this._fileService.exampleMultiViewOb.subscribe(message => this.image = message);
    else
      this.configureUrl();
  }

  configureUrl() {
    var urls = {
      'prueba': 'https://www.ag-grid.com/images/angular2.png',
      'otra': 'https://pbs.twimg.com/profile_images/469433151354179585/9ZcEyREy_400x400.png'
    };

    if (this.nodeId) {
      this.image.nodeId = this.nodeId;
      this.image.url = (this.nodeId in urls) ? urls[this.nodeId] : urls['otra'];
    } else {
      this.image.url = 'http://www.cuentoscortos.com/imagenes/1573';
      this._fileService.changeImage(this.image);
    }
    console.log(this.image);
  }

}

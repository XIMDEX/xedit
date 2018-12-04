import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata-view',
  templateUrl: './metadata-view.component.html',
  styleUrls: ['./metadata-view.component.scss']
})
export class MetadataViewComponent implements OnInit {

  payload: any = {};
  schema = 
    {
    name: 'lomes',
    title: 'LOMES',
    api: false,
      tabs: [
        {
          title: 'Pestaña 1',
          fields: [
            {
              object: {
                realName: 'one',
                key: 'one',
                label: 'First Field'
              },
              type: 'text'
            },
            {
              object: {
                realName: 'onehalf',
                key: 'onehalf',
                label: 'First and a half Field'
              },
              type: 'text'
            },
            {
              object: {
                realName: 'two',
                key: 'two',
                label: 'Second Field',
                multi: true,
                searchable: true,
                options: [
                  { key: 'option1', value: 'Option 1' },
                  { key: 'option2', value: 'Option 2' },
                  { key: 'option3', value: 'Option 3' }
                ]
              },
              type: 'dropdown',          
            }
          ]
        },
        {
          title: 'Pestaña 2',
          fields: [
            {
              object: {
                realName: 'three',
                key: 'three',
                label: 'Third Field'
              },
              type: 'text'
            },
            {
              object: {
                realName: 'four',
                key: 'four',
                label: 'Fourth Field'
              },
              type: 'text'
            }
          ]
        }
      ]
    }
      

  constructor() { }

  ngOnInit() {
  }

  formResult(event) {
    this.payload = event;
  }
 
}

import { Component, ViewChild } from '@angular/core';
import { TaskbarComponent } from '../../../x-edit/src/app/components/taskbar/taskbar.component';
import { PropertiesViewComponent } from './components/properties-view/properties-view.component';
import { EditorComponent } from '../../../x-edit/src/app/components/editor/editor.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'app';


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { SafeHtmlPipe } from './pipes/inner-html/safe-html.pipe';
import { ButtonsComponent } from './components/elements/buttons/buttons.component';
import { PropertiesViewComponent } from './components/properties-view/properties-view.component';
import { WysiwygViewComponent } from './components/wysiwyg-view/wysiwyg-view.component';
import { FormViewComponent } from './components/form-view/form-view.component';
import { StateService } from './services/state-service/state.service';
import { EditorService } from './services/editor-service/editor.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    EditorComponent,
    ButtonsComponent,
    PropertiesViewComponent,
    WysiwygViewComponent,
    FormViewComponent,
    SafeHtmlPipe
  ],
  imports: [
    /* 3rd party components */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AceEditorModule
  ],
  providers: [
    EditorService,
    StateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

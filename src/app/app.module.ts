import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { LoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextMenuModule } from 'ngx-contextmenu';

import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { SafeHtmlPipe } from './pipes/inner-html/safe-html.pipe';
import { ButtonsComponent } from './components/elements/buttons/buttons.component';
import { PropertiesViewComponent } from './components/properties-view/properties-view.component';
import { WysiwygViewComponent } from './components/wysiwyg-view/wysiwyg-view.component';
import { TextViewComponent } from './components/text-view/text-view.component';
import { StateService } from './services/state-service/state.service';
import { EditorService } from './services/editor-service/editor.service';
import { DebugPipe } from './pipes/debug/debug.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ClickOutsideModule } from 'ng4-click-outside';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { PropertiesAreaComponent } from './components/editor/properties-area/properties-area.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    EditorComponent,
    ButtonsComponent,
    PropertiesViewComponent,
    WysiwygViewComponent,
    TextViewComponent,
    SafeHtmlPipe,
    DebugPipe,
    KeysPipe,
    ContextMenuComponent,
    BreadcrumbComponent,
    PropertiesAreaComponent
  ],
  imports: [
    /* 3rd party components */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AceEditorModule,
    LoadingModule,
    ContextMenuModule.forRoot(),
    ClickOutsideModule
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

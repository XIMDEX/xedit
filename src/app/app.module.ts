import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { FileService } from './services/file-service/file.service';
import { ImageComponent } from './comp/image/image.component';
import { Image2Component } from './comp/image2/image2.component';
import { SafeHtmlPipe } from './pipes/inner-html/safe-html.pipe';
import { ButtonsComponent } from './components/elements/buttons/buttons.component';
import { PropertiesViewComponent } from './components/properties-view/properties-view.component';
import { WysiwygViewComponent } from './components/wysiwyg-view/wysiwyg-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    EditorComponent,
    ImageComponent,
    Image2Component,
    SafeHtmlPipe,
    ButtonsComponent,
    PropertiesViewComponent,
    WysiwygViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

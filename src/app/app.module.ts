import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { LoadingModule } from 'ngx-loading';
import { ClickOutsideModule } from 'ng4-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextMenuModule } from 'ngx-contextmenu';

import { StateService } from '@services/state-service/state.service';
import { EditorService } from '@services/editor-service/editor.service';
import { SafeHtmlPipe } from '@pipes/inner-html/safe-html.pipe';
import { DebugPipe } from '@pipes/debug/debug.pipe';
import { KeysPipe } from '@pipes/keys/keys.pipe';
import { TaskbarComponent } from '@components/taskbar/taskbar.component';
import { EditorComponent } from '@components/editor/editor.component';
import { PropertiesGlobalViewComponent } from '@components/editor/properties-area/properties-global-view/properties-global-view.component';
import { PropertiesLocalViewComponent } from '@components/editor/properties-area/properties-local-view/properties-local-view.component';
import { WysiwygViewComponent } from '@components/editor/views/wysiwyg-view/wysiwyg-view.component';
import { TextViewComponent } from '@components/editor/views/text-view/text-view.component';
import { ContextMenuComponent } from '@components/context-menu/context-menu.component';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component';
import { PropertiesAreaComponent } from '@components/editor/properties-area/properties-area.component';
import { MultiInputComponent } from '@elements/forms/multi-input/multi-input.component';
import { MultiInputAcordionComponent } from './elements/forms/multi-input-acordion/multi-input-acordion.component';
import { InputAcordionComponent } from './elements/forms/input-acordion/input-acordion.component';

@NgModule({
    declarations: [
        AppComponent,
        TaskbarComponent,
        EditorComponent,
        PropertiesLocalViewComponent,
        PropertiesGlobalViewComponent,
        WysiwygViewComponent,
        TextViewComponent,
        SafeHtmlPipe,
        DebugPipe,
        KeysPipe,
        ContextMenuComponent,
        BreadcrumbComponent,
        PropertiesAreaComponent,
        MultiInputComponent,
        MultiInputAcordionComponent,
        InputAcordionComponent
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

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
import { DynFormModule } from 'app/elements/forms/dynform/dyn-form.module';

import { AngularDraggableModule } from 'angular2-draggable';
import { CollapsibleModule } from 'angular2-collapsible';

import { StateService } from '@services/state-service/state.service';
import { EditorService } from '@services/editor-service/editor.service';
import { DebugPipe } from '@pipes/debug/debug.pipe';
import { KeysPipe } from '@pipes/keys/keys.pipe';
import { UrlPipe } from '@pipes/url/url.pipe';

import { TaskbarComponent } from '@components/taskbar/taskbar.component';
import { EditorComponent } from '@components/editor/editor.component';
import { PropertiesGlobalViewComponent } from '@components/taskbar/properties-global-view/properties-global-view.component';
import { PropertiesLocalViewComponent } from '@components/editor/properties-area/properties-local-view/properties-local-view.component';
import { WysiwygViewComponent } from '@components/editor/views/wysiwyg-view/wysiwyg-view.component';
import { TextViewComponent } from '@components/editor/views/text-view/text-view.component';
import { ContextMenuComponent } from '@components/context-menu/context-menu.component';
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component';
import { PropertiesAreaComponent } from '@components/editor/properties-area/properties-area.component';
import { MultiInputComponent } from '@elements/forms/multi-input/multi-input.component';
import { MultiInputAcordionComponent } from './elements/forms/multi-input-acordion/multi-input-acordion.component';
import { InputAcordionComponent } from './elements/forms/input-acordion/input-acordion.component';
import { AcordionComponent } from './elements/blocks/acordion/acordion.component';
import { ButtonComponent } from './elements/forms/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CheckboxComponent } from './elements/forms/checkbox/checkbox.component';
import { StateControllerComponent } from './components/taskbar/state-controller/state-controller.component';
import { ListboxComponent } from './elements/forms/listbox/listbox.component';
import { DamModule } from '../lib/dam';
import { DamService } from './services/dam-service/dam.service';
import { TreeModule } from 'angular-tree-component';
import { TreeModalComponent } from './elements/blocks/tree-modal/tree-modal.component';
import { TreeComponent } from './elements/blocks/tree/tree.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MetadataViewComponent } from './components/editor/views/metadata-view/metadata-view.component';
import { EditorViewComponent } from './components/editor/views/editor-view/editor-view.component';

import { AutoloadModulesService } from './services/autoload-modules-service/autoload-modules.service';
import { RuntimeHtmlCompilerComponent } from './core/runtime-html-compiler/runtime-html-compiler.component';

import { PropertiesToolbarComponent } from './components/editor/properties-area/properties-toolbar/properties-toolbar.component';
import { ImageModalComponent } from './elements/xedit/image/image-modal/image-modal.component';
import { ImagesModule } from 'lib/images';
import { SafeHtmlPipe } from './pipes/inner-html/safe-html.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TaskbarComponent,
        EditorComponent,
        PropertiesLocalViewComponent,
        PropertiesGlobalViewComponent,
        WysiwygViewComponent,
        TextViewComponent,
        UrlPipe,
        DebugPipe,
        KeysPipe,
        ContextMenuComponent,
        BreadcrumbComponent,
        PropertiesAreaComponent,
        MultiInputComponent,
        MultiInputAcordionComponent,
        InputAcordionComponent,
        AcordionComponent,
        ButtonComponent,
        CheckboxComponent,
        ListboxComponent,
        StateControllerComponent,
        TreeModalComponent,
        TreeComponent,
        MetadataViewComponent,
        EditorViewComponent,
        RuntimeHtmlCompilerComponent,
        PropertiesToolbarComponent,
        ImageModalComponent,
        SafeHtmlPipe
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
        ClickOutsideModule,
        AngularDraggableModule,
        CollapsibleModule,
        HttpClientModule,
        SimpleNotificationsModule.forRoot(),
        DamModule,
        TreeModule.forRoot(),
        NgxSmartModalModule.forRoot(),
        FontAwesomeModule,
        DynFormModule,
        ImagesModule
    ],
    providers: [EditorService, StateService, DamService, AutoloadModulesService],
    bootstrap: [AppComponent]
})
export class AppModule {}

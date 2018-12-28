import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgModule } from '@angular/core';
import { CkeditorComponent } from '@app/elements/ckeditor/ckeditor.component';

@NgModule({
    imports: [
        CKEditorModule
     ],
    declarations: [
        CkeditorComponent
    ],
    exports: [
        CkeditorComponent
    ]
})
  
export class RuntimeModule {}
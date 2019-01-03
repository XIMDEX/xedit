import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgModule } from '@angular/core';
import { CkeditorComponent } from '@app/elements/xedit/ckeditor/ckeditor.component';
import { ImageComponent } from '@app/elements/xedit/image/image.component';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@app/elements/xedit/section/section.component';

@NgModule({
    imports: [
        CommonModule,
        CKEditorModule
     ],
    declarations: [
        SectionComponent,
        CkeditorComponent,
        ImageComponent
    ],
    exports: [
        CkeditorComponent,
        ImageComponent,
        SectionComponent
    ]
})
  
export class RuntimeModule {}
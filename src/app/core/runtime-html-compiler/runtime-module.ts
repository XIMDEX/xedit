import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgModule } from '@angular/core';
import { CkeditorComponent } from '@app/elements/xedit/ckeditor/ckeditor.component';
import { ImageComponent } from '@app/elements/xedit/image/image.component';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@app/elements/xedit/section/section.component';
import { SafeHtmlPipe } from '@pipes/inner-html/safe-html.pipe';

@NgModule({
    imports: [
        CommonModule,
        CKEditorModule
     ],
    declarations: [
        SectionComponent,
        CkeditorComponent,
        ImageComponent,
        SafeHtmlPipe,
    ],
    exports: [
        CkeditorComponent,
        ImageComponent,
        SectionComponent,
        SafeHtmlPipe,
    ]
})
  
export class RuntimeModule {}
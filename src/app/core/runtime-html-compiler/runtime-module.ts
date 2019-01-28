import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgModule } from '@angular/core';
import { CkeditorComponent } from '@app/elements/xedit/ckeditor/ckeditor.component';
import { ImageComponent } from '@app/elements/xedit/image/image.component';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@app/elements/xedit/section/section.component';
import { SafeHtmlPipe } from '@pipes/inner-html/safe-html.pipe';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TinyMCEComponent } from '@app/elements/xedit/tiny-mce/tiny-mce.component';

@NgModule({
    imports: [CommonModule, CKEditorModule, EditorModule],
    declarations: [SectionComponent, CkeditorComponent, ImageComponent, TinyMCEComponent],
    exports: [CkeditorComponent, ImageComponent, SectionComponent, TinyMCEComponent]
})
export class RuntimeModule {}

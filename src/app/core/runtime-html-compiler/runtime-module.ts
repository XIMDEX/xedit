import { NgModule } from '@angular/core';
import { ImageComponent } from '@app/elements/xedit/image/image.component';
import { CommonModule } from '@angular/common';
import { SectionComponent } from '@app/elements/xedit/section/section.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TinyMCEComponent } from '@app/elements/xedit/tiny-mce/tiny-mce.component';

@NgModule({
    imports: [CommonModule, EditorModule],
    declarations: [SectionComponent, ImageComponent, TinyMCEComponent],
    exports: [ImageComponent, SectionComponent, TinyMCEComponent]
})
export class RuntimeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditImageComponent } from './components/edit-image/edit-image.component';

import { AngularCropperjsModule } from 'angular-cropperjs';
import { BrowserModule } from '@angular/platform-browser';
import { CropperjsComponent } from './components/cropperjs/cropperjs.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [CommonModule, BrowserModule, AngularCropperjsModule, FontAwesomeModule],
    declarations: [EditImageComponent, CropperjsComponent],
    exports: [EditImageComponent, CropperjsComponent]
})
export class ImagesModule {}

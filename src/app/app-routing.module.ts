import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true, // <-- debugging purposes only
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

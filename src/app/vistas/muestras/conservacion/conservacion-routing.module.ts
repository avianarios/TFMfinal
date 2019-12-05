import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConservacionComponent } from './conservacion.component';

const routes: Routes = [
  {
    path: '',
    component: ConservacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConservacionRoutingModule {}

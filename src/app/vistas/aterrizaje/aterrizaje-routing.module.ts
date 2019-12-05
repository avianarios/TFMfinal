import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AterrizajeComponent } from './aterrizaje.component';

const routes: Routes = [
  {
    path: '',
    component: AterrizajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AterrizajeRoutingModule {}

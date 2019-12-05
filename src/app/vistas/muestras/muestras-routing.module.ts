import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestrasComponent } from './muestras.component';

const routes: Routes = [
  {
    path: '',
    component: MuestrasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuestrasRoutingModule {}

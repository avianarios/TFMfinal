import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EleccionVinoComponent } from './eleccion-vino.component';

const routes: Routes = [
  {
    path: '',
    component: EleccionVinoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EleccionVinoRoutingModule {}

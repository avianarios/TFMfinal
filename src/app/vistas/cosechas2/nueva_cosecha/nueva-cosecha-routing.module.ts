import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaCosechaComponent } from './nueva-cosecha.component';

const routes: Routes = [
  {
    path: '',
    component: NuevaCosechaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaCosechaRoutingModule {}

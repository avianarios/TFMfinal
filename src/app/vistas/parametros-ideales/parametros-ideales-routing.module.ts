import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrosIdealesComponent } from './parametros-ideales.component';

const routes: Routes = [
  {
    path: '',
    component: ParametrosIdealesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosIdealesRoutingModule {}

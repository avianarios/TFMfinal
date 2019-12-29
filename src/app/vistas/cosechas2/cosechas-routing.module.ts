import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CosechasComponent } from './cosechas.component';

const routes: Routes = [
  {
    path: '',
    component: CosechasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CosechasRoutingModule {}

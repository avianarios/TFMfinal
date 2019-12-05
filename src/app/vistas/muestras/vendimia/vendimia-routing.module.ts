import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendimiaComponent } from './vendimia.component';

const routes: Routes = [
  {
    path: '',
    component: VendimiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendimiaRoutingModule {}

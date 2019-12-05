import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TratamientosComponent } from './tratamientos.component';

const routes: Routes = [
  {
    path: '',
    component: TratamientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TratamientosRoutingModule {}

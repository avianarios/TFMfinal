import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoRoutingModule } from './acceso-routing.module';
import { AccesoComponent } from './acceso.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AccesoComponent],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AccesoModule { }

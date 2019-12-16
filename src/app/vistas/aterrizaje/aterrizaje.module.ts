import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AterrizajeRoutingModule } from './aterrizaje-routing.module';
import { AterrizajeComponent } from './aterrizaje.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AterrizajeComponent],
  imports: [
    CommonModule,
    AterrizajeRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AterrizajeModule { }

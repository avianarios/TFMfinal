import { NgModule } from '@angular/core';

import { AterrizajeRoutingModule } from './aterrizaje-routing.module';
import { AterrizajeComponent } from './aterrizaje.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AterrizajeComponent],
  imports: [SharedModule, AterrizajeRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class AterrizajeModule {}

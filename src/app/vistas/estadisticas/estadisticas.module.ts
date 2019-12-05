import { NgModule } from '@angular/core';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasComponent } from './estadisticas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EstadisticasComponent],
  imports: [SharedModule, EstadisticasRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class EstadisticasModule {}

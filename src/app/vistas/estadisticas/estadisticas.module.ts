import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { EstadisticasComponent } from './estadisticas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EstadisticasComponent],
  imports: [SharedModule, EstadisticasRoutingModule, MaterialModule, FlexLayoutModule, ChartsModule],
  providers: []
})
export class EstadisticasModule {}

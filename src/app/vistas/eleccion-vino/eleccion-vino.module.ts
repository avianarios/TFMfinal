import { NgModule } from '@angular/core';

import { EleccionVinoRoutingModule } from './eleccion-vino-routing.module';
import { EleccionVinoComponent } from './eleccion-vino.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EleccionVinoComponent],
  imports: [SharedModule, EleccionVinoRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class EleccionVinoModule {}

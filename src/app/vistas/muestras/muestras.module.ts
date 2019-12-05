import { NgModule } from '@angular/core';

import { MuestrasRoutingModule } from './muestras-routing.module';
import { MuestrasComponent } from './muestras.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MuestrasComponent],
  imports: [SharedModule, MuestrasRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class MuestrasModule {}

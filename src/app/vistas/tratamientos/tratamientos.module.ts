import { NgModule } from '@angular/core';

import { TratamientosRoutingModule } from './tratamientos-routing.module';
import { TratamientosComponent } from './tratamientos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TratamientosComponent],
  imports: [SharedModule, TratamientosRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class TratamientosModule {}

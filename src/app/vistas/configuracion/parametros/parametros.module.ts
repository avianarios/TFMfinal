import { NgModule } from '@angular/core';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ParametrosComponent } from './parametros.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ParametrosComponent],
  imports: [SharedModule, ParametrosRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class ParametrosModule {}

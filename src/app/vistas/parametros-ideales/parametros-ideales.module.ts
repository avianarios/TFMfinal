import { NgModule } from '@angular/core';

import { ParametrosIdealesRoutingModule } from './parametros-ideales-routing.module';
import { ParametrosIdealesComponent } from './parametros-ideales.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ParametrosIdealesComponent],
  imports: [SharedModule, ParametrosIdealesRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class ParametrosIdealesModule {}

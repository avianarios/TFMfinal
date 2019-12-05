import { NgModule } from '@angular/core';

import { MaduracionRoutingModule } from './maduracion-routing.module';
import { MaduracionComponent } from './maduracion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MaduracionComponent],
  imports: [SharedModule, MaduracionRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class MaduracionModule {}

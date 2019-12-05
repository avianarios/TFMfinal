import { NgModule } from '@angular/core';

import { ConservacionRoutingModule } from './conservacion-routing.module';
import { ConservacionComponent } from './conservacion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ConservacionComponent],
  imports: [SharedModule, ConservacionRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class ConservacionModule {}

import { NgModule } from '@angular/core';

import { VendimiaRoutingModule } from './vendimia-routing.module';
import { VendimiaComponent } from './vendimia.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [VendimiaComponent],
  imports: [SharedModule, VendimiaRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class VendimiaModule {}

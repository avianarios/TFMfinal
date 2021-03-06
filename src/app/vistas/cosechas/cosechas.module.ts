import { NgModule } from '@angular/core';

import { CosechasRoutingModule } from './cosechas-routing.module';
import { CosechasComponent } from './cosechas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CosechasComponent,
   ],
  imports: [SharedModule, CosechasRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class CosechasModule {}

import { NgModule } from '@angular/core';

import { NuevaCosechaRoutingModule } from './nueva-cosecha-routing.module';
import { NuevaCosechaComponent } from './nueva-cosecha.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NuevaCosechaComponent,
    //CosechaDetalleComponent,
      ],
  imports: [SharedModule, NuevaCosechaRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class NuevaCosechaModule {}

import { NgModule } from '@angular/core';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionComponent } from './configuracion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
/*import { CosechaComponent } from './cosecha/cosecha.component';
import { ParametrosComponent } from './parametros/parametros.component';*/

//import { CosechaDetalleComponent } from './cosecha-detalle/cosecha-detalle.component';

@NgModule({
  declarations: [ConfiguracionComponent
    //, CosechaComponent, ParametrosComponent
  //  ,CosechaDetalleComponent
  ],
  imports: [SharedModule, ConfiguracionRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class ConfiguracionModule {}

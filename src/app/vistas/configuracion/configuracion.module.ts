import { NgModule } from '@angular/core';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { ConfiguracionComponent } from './configuracion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ConfiguracionComponent
  ],
  imports: [SharedModule, ConfiguracionRoutingModule, MaterialModule, FlexLayoutModule],
  providers: []
})
export class ConfiguracionModule {}

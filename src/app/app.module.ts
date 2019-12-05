import { MAT_DATE_LOCALE } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { rootRouterConfig } from './app-routing'
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MuestrasMaduracionService } from './shared/servicios/muestras-maduracion.service';
import { CosechasService } from './shared/servicios/cosechas.service';
//import { CosechaElementoComponent } from './vistas/cosecha-elemento/cosecha-elemento.component'
//import { CosechasComponent } from './vistas/cosechas/cosechas.component';
/*import { MaduracionComponent } from './vistas/maduracion/maduracion.component';
import { VendimiaComponent } from './vistas/vendimia/vendimia.component';
import { ConservacionComponent } from './vistas/conservacion/conservacion.component';
import { MuestrasComponent } from './vistas/muestras/muestras.component';
import { EstadisticasComponent } from './vistas/estadisticas/estadisticas.component';*/


//import { StoreModule } from '@ngrx/store';
//import { reducers, metaReducers } from './reducers';
//import { EffectsModule } from '@ngrx/effects';
//import { AppEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
//CosechaElementoComponent,
//    CosechasComponent,
    /*MaduracionComponent,
    VendimiaComponent,
    ConservacionComponent,
    MuestrasComponent,
    EstadisticasComponent*/
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),

    /*StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects])*/
  ],
  providers: [
    MuestrasMaduracionService,
    CosechasService,
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},  //para Datepicker, que no funciona bien
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

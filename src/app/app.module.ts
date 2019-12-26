import { MAT_DATE_LOCALE } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { rootRouterConfig } from './app-routing'
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APIService } from './shared/servicios/API.service';
import { CosechasService } from './shared/servicios/cosechas.service';
//import { GraficoComponent } from './shared/estadisticas/grafico/grafico.component';

//import { StoreModule } from '@ngrx/store';
//import { reducers, metaReducers } from './reducers';
//import { EffectsModule } from '@ngrx/effects';
//import { AppEffects } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
  //  GraficoComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [
    APIService,
    CosechasService,
    DatePipe,
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},  //para Datepicker, que no funciona bien
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { AterrizajeComponent } from './vistas/aterrizaje/aterrizaje.component';
import { IniciosesionComponent } from './vistas/iniciosesion/iniciosesion.component';
import { ConfparametrosComponent } from './vistas/confparametros/confparametros.component';

@NgModule({
  declarations: [
    AppComponent,
    AterrizajeComponent,
    IniciosesionComponent,
    ConfparametrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MuestrasComponent } from './vistas/muestras/muestras.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AterrizajeDisposicionComponent } from './shared/components/aterrizaje-disposicion/aterrizaje-disposicion.component';
//import { AdminLayoutCimport { TokenResponse } from '../../../models/token.interface';omponent } from './compartido/components/admin-layout/admin-layout.component';
//import { ConfparametrosComponent } from './vistas/confparametros/confparametros.component';
//import { AterrizajeComponent } from './vistas/aterrizaje/aterrizaje.component';
//import { TratamientosComponent } from './vistas/tratamientos/tratamientos.component';

//const routes: Routes = [
export const rootRouterConfig: Routes = [
//    { path: '', redirectTo: 'aterrizaje', pathMatch: 'full' },
    { path: '', redirectTo: 'aterrizaje', pathMatch: 'full' },
    {
      path: 'aterrizaje',
      component: AterrizajeDisposicionComponent,
      children:[
/*
    {
      path: 'aterrizaje',
      loadChildren: './vistas/aterrizaje/aterrizaje.module#AterrizajeModule',
      data: { title: 'Inicio de sesión' }
    },*/
      {
        path: 'acceso',
        loadChildren: './vistas/aterrizaje/acceso/acceso.module#AccesoModule',
        data: { title: 'Acceso' }
      },
    ]},
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children:[
        {
          path: 'configuracion',
          loadChildren: './vistas/configuracion/configuracion.module#ConfiguracionModule',
          data: { title: 'Configuración' }
        },
        {
          path: 'cosechas',
          loadChildren: './vistas/cosechas/cosechas.module#CosechasModule',
          data: { title: 'Cosechas' }
        },
        {
          path: 'cosechas/nuevaCosecha',
          loadChildren: './vistas/cosechas/nueva_cosecha/nueva-cosecha.module#NuevaCosechaModule',
          data: { title: 'Cosechas' }
        },
        {
          path: 'muestras',
          loadChildren: './vistas/muestras/muestras.module#MuestrasModule',
          data: { title: 'Muestras' }
        },
        {
          path: 'configuracion/parametros',
          loadChildren: './vistas/configuracion/parametros/parametros.module#ParametrosModule',
          data: { title: 'Parámetros del vino', breadcrumb: 'Parámetros del vino' }
        },
        {
          path: 'tratamientos',
          loadChildren: './vistas/tratamientos/tratamientos.module#TratamientosModule',
          data: { title: 'Tratamientos', breadcrumb: 'tratamientos' }
        },
        {
          path: 'maduracion',
          loadChildren: './vistas/muestras/maduracion/maduracion.module#MaduracionModule',
          data: { title: 'Maduración', breadcrumb: 'Maduracion' }
        },
        {
          path: 'vendimia',
          loadChildren: './vistas/muestras/vendimia/vendimia.module#VendimiaModule',
          data: { title: 'Vendimia', breadcrumb: 'Vendimia' }
        },
        {
          path: 'conservacion',
          loadChildren: './vistas/muestras/conservacion/conservacion.module#ConservacionModule',
          data: { title: 'Conservacion', breadcrumb: 'Conservacion' }
        }/*,
        {
          path: 'estadisticas',
          loadChildren: './vistas/estadisticas/estadisticas.module#EstadisticasModule',
          data: { title: 'Estadísticas', breadcrumb: 'Estadísticas' }
        }*/
      ]
    },
    {
      path: '**',
      redirectTo: 'sessions/404'
    }
];


/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

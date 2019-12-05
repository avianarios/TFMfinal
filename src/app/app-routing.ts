import { MuestrasComponent } from './vistas/muestras/muestras.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
//import { EleccionVinoComponent } from './vistas/eleccion-vino/eleccion-vino.component';
//import { AdminLayoutCimport { TokenResponse } from '../../../models/token.interface';omponent } from './compartido/components/admin-layout/admin-layout.component';
//import { ConfparametrosComponent } from './vistas/confparametros/confparametros.component';
//import { AterrizajeComponent } from './vistas/aterrizaje/aterrizaje.component';
//import { TratamientosComponent } from './vistas/tratamientos/tratamientos.component';

//const routes: Routes = [
export const rootRouterConfig: Routes = [
//    { path: '', redirectTo: 'aterrizaje', pathMatch: 'full' },
    { path: '', redirectTo: 'signin', pathMatch: 'full' },

    {
      path: 'signin',
      loadChildren: './vistas/signin/signin.module#SigninModule',
      data: { title: 'Inicio de sesión' }
    },
    {
      path: 'aterrizaje',
      loadChildren: './vistas/aterrizaje/aterrizaje.module#AterrizajeModule',
      data: { title: 'Página principal' }
    },
    {
      path: 'eleccionCosecha',
      loadChildren: './vistas/cosechas/cosechas.module#CosechasModule',
      data: { title: 'Cosechas' }
    },
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children:[
        {
          path: 'parametrosIdeales',
          loadChildren: './vistas/parametros-ideales/parametros-ideales.module#ParametrosIdealesModule',
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
        },
        {
          path: 'estadisticas',
          loadChildren: './vistas/estadisticas/estadisticas.module#EstadisticasModule',
          data: { title: 'Estadísticas', breadcrumb: 'Estadísticas' }
        }
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

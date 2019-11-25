import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AdminLayoutComponent } from './compartido/components/admin-layout/admin-layout.component';


const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', loadChildren: () => import('./vistas/signin/signin.module').then(m => m.SigninModule), data:{title:'Signin'}},
    { path: 'aterrizaje', loadChildren: () => import('./vistas/signin/signin.module').then(m => m.SigninModule), data:{title:'Aterrizaje'}},
    /*{
      path: 'admin',
      component: AdminLayoutComponent,
      children: [
        {
          path: 'dashboard',
          loadChildren: './vistas/dashboard/dashboard.module#DashboardModule',
          data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
        },
        {
          path: 'favorites',
          loadChildren: './vistas/favorites/favorites.module#FavoritesModule',
          data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
        },
        {
          path: 'profile',
          loadChildren: './vistas/profile/profile.module#ProfileModule',
          data: { title: 'Material', breadcrumb: 'MATERIAL' }
        },
        {
          path: 'offers',
          loadChildren: './vistas/offers/offers.module#OffersModule',
          data: { title: 'Offers', breadcrumb: 'Offers' }
        }
      ]
    },
    {
      path: '**',
      redirectTo: 'sessions/404'
    }*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

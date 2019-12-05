import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS
//import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
//import { EleccionVinoComponent } from '../vistas/eleccion-vino/eleccion-vino.component';
import { MuestrasComponent } from '../vistas/muestras/muestras.component';
import { MaterialModule } from './material.module';

//import { CosechaDetalleComponent } from '../vistas/cosechas/cosecha-detalle/cosecha-detalle.component';


// DIRECTIVES

// PIPES

// SERVICES
//import { AppConfirmService } from './services/app-confirm/app-confirm.service';

const declarations = [
  //EleccionVinoComponent,
  //CosechaDetalleComponent,
  MuestrasComponent,
  //AppComfirmComponent,
  AdminLayoutComponent];
const exports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
//  AppComfirmComponent,
  AdminLayoutComponent
];
//const providers = [AppConfirmService];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
     MaterialModule
   ],
  //entryComponents: [AppComfirmComponent],
  //providers,
  declarations,
  exports
})
export class SharedModule {}

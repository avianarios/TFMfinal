import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AterrizajeDisposicionComponent } from './components/aterrizaje-disposicion/aterrizaje-disposicion.component';

import { MaterialModule } from './material.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFacebookSquare, faTwitter, faLinkedin, faDribbble, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTrash, faTrashAlt/*, faUser*/ } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEye } from '@fortawesome/free-regular-svg-icons';

// DIRECTIVES

// PIPES

// SERVICES
//import { AppConfirmService } from './services/app-confirm/app-confirm.service';

const declarations = [
  AterrizajeDisposicionComponent,
  AdminLayoutComponent];
const exports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AterrizajeDisposicionComponent,
  AdminLayoutComponent
];
//const providers = [AppConfirmService];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
     MaterialModule,
     FontAwesomeModule,
   ],
  //entryComponents: [AppComfirmComponent],
  //providers,
  declarations,
  exports
})

export class SharedModule {
  constructor (library: FaIconLibrary){
    //library.add(faFacebook, faTwitter, faLinkedin, faDribbble, faYoutube, faTrash);
    library.addIcons(faFacebookSquare, faTwitter, faLinkedin, faDribbble, faYoutube, faTrash, faTrashAlt, faUser, faEye);

  }
}

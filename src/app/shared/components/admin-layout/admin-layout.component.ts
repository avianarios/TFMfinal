import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/shared/servicios/sesion.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html'
})
export class AdminLayoutComponent implements OnInit{

  constructor(private _router:Router, private _sesion: SesionService) { }

  ngOnInit(){
    /*if (!this._sesion.sesionEstaIniciada())
      this._router.navigateByUrl('/signin');*/
  }

  /*cerrarSesion(){
    this._sesion.cerrarSesion();
    this._router.navigateByUrl('/signin');
  }*/
}

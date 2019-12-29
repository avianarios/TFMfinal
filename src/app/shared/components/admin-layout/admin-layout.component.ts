import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/shared/servicios/sesion.service';
//import { definicionUsuarios } from 'src/app/shared/modelos/usuarios.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html',
  styleUrls: ['./admin-layout.scss']
})

export class AdminLayoutComponent implements OnInit{
  usuario:Array<any>=[];
//usuario: definicionUsuarios;

  constructor(
    private _router:Router,
    private _sesion: SesionService
  ) { }

  ngOnInit(){
    if (!this._sesion.sesionEstaIniciada())
      this._router.navigateByUrl('/aterrizaje/acceso');
    else{
      this.usuario=this._sesion.usuarioSesion();
    }
  }

  cerrarSesion(){
    this._sesion.cerrarSesion();
    this._router.navigateByUrl('/aterrizaje');
  }
}

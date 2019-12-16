import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/shared/servicios/sesion.service';
import { UsuariosService } from 'src/app/shared/servicios/usuarios.service';

import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  usuarios: any[] = [];
  formulario: FormGroup;
  autenticado: boolean;

  constructor(
      private _builder: FormBuilder,
      private _sesion: SesionService,
      private _router: Router,
      private _usuarios: UsuariosService
    ) { }

  crearFormulario() {
    this.formulario = this._builder.group({
      usuario: new FormControl(''),
      clave: new FormControl(),
    });
  }

  private isUser(user, { usuario, clave }) {
    return (
      user.usuario === usuario &&
      user.clave === clave
    );
  }

  login() {
    const credenciales = {
      usuario: this.formulario.value.usuario,
      clave: this.formulario.value.clave
    };
    const user = this.usuarios.find(_user => this.isUser(_user, credenciales));
    if (user) {
      this._sesion.iniciarSesion(user);
      this._router.navigateByUrl('/admin/configuracion');
      this.autenticado=true;
    }else
      this.autenticado=false;
  }

  ngOnInit() {
    this.crearFormulario();
    this._usuarios.devolverUsuarios().subscribe(data => {
      this.usuarios = data;
    });
    this.autenticado=true;
  }
}

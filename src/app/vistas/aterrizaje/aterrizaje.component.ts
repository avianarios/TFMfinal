import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/shared/servicios/API.service';
import { SesionService } from 'src/app/shared/servicios/sesion.service';

@Component({
  selector: 'app-aterrizaje',
  templateUrl: './aterrizaje.component.html',
  styleUrls: ['./aterrizaje.component.scss']
})
export class AterrizajeComponent implements OnInit {
  usuarios: any[] = [];
//  usuario_actual: Array<any>=[];
  loginForm: FormGroup = this._builder.group({
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    clave: new FormControl('', [Validators.required/*, Validators.minLength(3)*/])
  });

  constructor(
    private _builder: FormBuilder,
    private _sesion: SesionService,
    private _router: Router,
    private _servicioAPI: APIService
  ) {}

  private isUser(user, { username, password }) {
    return (
      user.usuario === username &&
      user.clave === password
    );
  }

  login() {
    const credentials = {
      username: this.loginForm.value.usuario,
      password: this.loginForm.value.clave
    };
    const user = this.usuarios.find(_user => this.isUser(_user, credentials));
    if (user) {
//      this._sesion.iniciarSesion(user['identificacion'].usuario, user.tipo);
      this._sesion.iniciarSesion(user);
      this._router.navigateByUrl('/eleccionCosecha');
    }else
      this._router.navigateByUrl('/sesion');
    /*     for (const usuario of this.usuarios) {
      if (
        usuario['identificacion'].usuario === this.loginForm.value.usuario &&
        usuario['identificacion'].clave === this.loginForm.value.clave
      ) {
        this.autenticado = true;
        this._sesion.iniciarSesion(
          usuario['identificacion'].usuario,
          usuario.tipo
        );
        this._router.navigateByUrl('/dashboard');
      }
    } */
  }

  cerrarSesion(){
    this._sesion.cerrarSesion();
    this._router.navigateByUrl('/sesion');
  }

  ngOnInit() {
    this._servicioAPI.devolverTodas("usuarios").subscribe(data => {
      this.usuarios = data;
    });
  }
}

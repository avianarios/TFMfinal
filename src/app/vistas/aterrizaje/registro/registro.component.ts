import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/servicios/API.service';
import { SesionService } from 'src/app/shared/servicios/sesion.service';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private _builder: FormBuilder,
    private _sesion: SesionService,
    private _router: Router,
    private _servicioAPI: APIService,
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this._builder.group({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      correo: new FormControl(''),
      usuario: new FormControl(''),
      clave: new FormControl(),
    });
  }

  login() {
    const credenciales = {
      usuario: this.formulario.value.usuario,
      clave: this.formulario.value.clave
    };
    this._sesion.iniciarSesion(credenciales);
    this._router.navigateByUrl('/admin/configuracion');
  }


  registrar(){
    this._servicioAPI.guardar("usuarios", JSON.stringify(this.formulario.value)).subscribe(datos=>{
      this.login();
    });
  }

}

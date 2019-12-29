import { Injectable } from '@angular/core';
//import { definicionUsuarios } from 'src/app/shared/modelos/usuarios.model';


@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionIniciada:boolean=false;
//  credenciales= {id:"", tipo:""};
  usuario: Array<any>=[];
  //usuario: definicionUsuarios;

  constructor() {
  }

/*  iniciarSesion(usuario:string, tipo_usuario:string){
    this.sesionIniciada=true;
    this.credenciales.id=usuario;
    this.credenciales.tipo=tipo_usuario;
  }*/

  cerrarSesion(){
    this.sesionIniciada=false;
  //  this.credenciales= {id:"", tipo:""};
    this.usuario=[];
  }

  sesionEstaIniciada(){
    return (this.sesionIniciada);
  }

  usuarioSesion(){
      return this.usuario;
//    return this.credenciales;
  }

  iniciarSesion (usuario){
    this.sesionIniciada=true;
    this.usuario=usuario;
  }
}

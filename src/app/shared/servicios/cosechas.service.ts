import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { definicionCosecha } from '../modelos/cosechas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CosechasService {
  base_url: string = 'http://127.0.0.1:8000/api/';
  url_endpoint = 'cosecha';
  cabecera = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };
   elegida: definicionCosecha;

  constructor(private _http: HttpClient) {}

  devolverCosechas(): Observable<any>{
    return this._http.get<any>(this.base_url+this.url_endpoint);
  }

  devolverCosecha(id): Observable<any>{
    return this._http.get<any>(this.base_url+this.url_endpoint+id);
  }

  guardarCosecha(cuerpo): Observable<any>{
    console.log (cuerpo);
    return this._http.post(this.base_url+this.url_endpoint, cuerpo, this.cabecera);
  }

  eliminarCosecha($id): Observable<any>{
    return this._http.delete(this.base_url+this.url_endpoint+"/"+$id);
  }

  elegirCosecha($cosecha){
    this.elegida=$cosecha;
    //console.log ("he elegido"+$cosecha);
  }

  devolverCosechaElegida(){
    return (this.elegida);
  }

  actualizarCosechaElegida($cosecha, $cuerpo){
    console.log ($cosecha);
    console.log ($cosecha["id_cosecha"]);

//console.log (this.elegida);
    //le quito el indicador de actual a la cosecha que lo tiene en la base de datos
    return this._http.put(this.base_url+this.url_endpoint+"/"+$cosecha["id_cosecha"], $cuerpo);
    //return this._http.put(this.base_url+this.url_endpoint+"/"+cosecha["id_cosecha"], cuerpoActual);


//    this.elegida=$cosecha;
    //return this._http.put(this.base_url+this.url_endpoint+"/"+this.elegida["id_cosecha"], cuerpo);*/

  }

}

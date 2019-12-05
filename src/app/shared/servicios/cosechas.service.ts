import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { definicionCosecha } from '../modelos/cosechas.model';

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

  devolverCosechas() {
    return this._http.get<any>(this.base_url+this.url_endpoint);
  }

  devolverCosecha(id){
    return this._http.get<any>(this.base_url+this.url_endpoint+id);
  }

  crearCosecha(cuerpo){
    return this._http.post(this.base_url+this.url_endpoint, cuerpo, this.cabecera);
  }

  eliminarCosecha($id){
    return this._http.delete(this.base_url+this.url_endpoint+"/"+$id);
  }

  elegirCosecha($cosecha){
    this.elegida=$cosecha;
  }

  devolverCosechaElegida(){
    return (this.elegida);
  }

}

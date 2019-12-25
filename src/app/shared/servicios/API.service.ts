import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter }  from  'rxjs/operators';

@Injectable()
export class APIService {
 base_url: string = 'http://127.0.0.1:8000/api/';
 cabecera = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 constructor(private _http: HttpClient) {}

 devolverTodas($url_endpoint): Observable<any>{
   return this._http.get<any>(this.base_url+$url_endpoint);
 }

  devolverUna($url_endpoint, $id): Observable<any>{
    return this._http.get<any>(this.base_url+$url_endpoint+"/"+$id);
  }

  guardar($url_endpoint, cuerpo): Observable<any>{
    return this._http.post(this.base_url+$url_endpoint, cuerpo, this.cabecera);
  }

  eliminar($url_endpoint, $id: string): Observable<any>{
    return this._http.delete(this.base_url+$url_endpoint+"/"+$id);
  }

  actualizar($url_endpoint, $id, $cuerpo): Observable<any>{
    return this._http.put(this.base_url+$url_endpoint+"/"+$id, $cuerpo);
  }

  devolverParametrosFase($url_endpoint, $fase, $parametro, $id_cosecha){
    return this._http.get<any>(this.base_url+$url_endpoint+"/"+$fase+"/"+$parametro+"/"+$id_cosecha);
  }
}

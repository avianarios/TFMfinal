import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable/*, Subject*/ } from 'rxjs';
//import { map } from 'rxjs/operators';

@Injectable()
export class MuestrasService {
// usuarios: any[] = [];
 base_url: string = 'http://127.0.0.1:8000/api/';
 url_endpoint = 'maduracion';
 cabecera = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


 constructor(private _http: HttpClient) {}

 //devolverTodas(): Observable<any>{
 //  return this._http.get<any>(this.base_url+this.url_endpoint);
 devolverTodas($url_endpoint): Observable<any>{
   return this._http.get<any>(this.base_url+$url_endpoint);
 }

  devolverMuestra($id): Observable<any>{
    return this._http.get<any>(this.base_url+this.url_endpoint+$id);
  }

  guardarMuestraMaduracion(cuerpo): Observable<any>{
    /*return this._http.post(this.base_url+this.muestras_endpoint,datos, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).pipe(map(data=>
     data));*/
    return this._http.post(this.base_url+this.url_endpoint, cuerpo, this.cabecera);
  }

  eliminarMuestraMaduracion($id: string): Observable<any>{
    return this._http.delete(this.base_url+this.url_endpoint+"/"+$id);
  }
}

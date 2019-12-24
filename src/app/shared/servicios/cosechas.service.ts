import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { definicionCosecha } from '../modelos/cosechas.model';
import { definicionParametros } from '../modelos/parametros.model';
import { Observable } from 'rxjs';
import { APIService } from '../../shared/servicios/API.service';

@Injectable({
  providedIn: 'root'
})
export class CosechasService {
  /*base_url: string = 'http://127.0.0.1:8000/api/';
  url_endpoint = 'cosecha';
  cabecera = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };*/
   cosechaActual: definicionCosecha;
   parametrosActuales: definicionParametros;
   //procedencia: string;

  constructor(
    private _http: HttpClient,
    private _servicioAPI: APIService
  ) {}

  elegirCosecha($nuevaCosechaActual){
      this.cosechaActual=$nuevaCosechaActual;
  }

  devolverCosechaElegida(){
    return (this.cosechaActual);
  }

  guardarCosecha($nuevaCosecha){
    const sinActual={"actual":"0"};
    this._servicioAPI.actualizar("cosecha", this.cosechaActual["id_cosecha"], sinActual).subscribe(datos=>{
      this._servicioAPI.guardar("cosecha", $nuevaCosecha).subscribe(datos=>{
        this.cosechaActual=$nuevaCosecha;
      });
    });
  }

  elegirParametros(parametros){
    this.parametrosActuales=parametros;
  }

  devolverParametros(){
    return (this.parametrosActuales);
  }





  /*establecerProcedencia(pagina){
    this.procedencia=pagina;
  }

  devolverProcedencia(){
    return (this.procedencia);
  }*/
}

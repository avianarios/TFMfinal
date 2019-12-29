import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { definicionCosecha } from 'src/app/shared/modelos/cosechas.model';
import { definicionParametros } from 'src/app/shared/modelos/parametros.model';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/shared/servicios/API.service';

@Injectable({
  providedIn: 'root'
})
export class CosechasService {
   cosechaActual: definicionCosecha;
   parametrosActuales: definicionParametros;

  constructor(
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
}

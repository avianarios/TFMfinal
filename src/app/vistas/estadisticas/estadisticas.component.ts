import { Component, OnInit } from '@angular/core';
import { APIService } from '../../shared/servicios/API.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  campos:any[]=[];
  muestras:any[]=[];

  constructor(
      private _ServicioMuestras: APIService
  ) { }

  ngOnInit() {
/*    this._ServicioMuestras.devolverTodas().subscribe(datos=>{
      this.campos=Object.keys(datos[0]);
      datos.forEach(muestra_act=>{
        this.muestras.push (Object.values(muestra_act));
      });
    });*/
  }

}

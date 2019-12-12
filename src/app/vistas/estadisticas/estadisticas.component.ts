import { Component, OnInit } from '@angular/core';
import { MuestrasService } from '../../shared/servicios/muestras.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  campos:any[]=[];
  muestras:any[]=[];

  constructor(
      private _ServicioMuestras: MuestrasService
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

import { Component, OnInit } from '@angular/core';
import { MuestrasMaduracionService } from '../../shared/servicios/muestras-maduracion.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  campos:any[]=[];
  muestras:any[]=[];

  constructor(
      private _MuestrasMaduracion: MuestrasMaduracionService
  ) { }

  ngOnInit() {
    this._MuestrasMaduracion.devolverMuestrasMaduracion().subscribe(datos=>{
      this.campos=Object.keys(datos[0]);
      datos.forEach(muestra_act=>{
        this.muestras.push (Object.values(muestra_act));
      });
    });
  }

}

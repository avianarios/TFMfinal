import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { definicionMuestraMaduracion, definicionMuestraVendimia, definicionMuestraConservacion } from '../../shared/modelos/muestras.model';
import { MuestrasService } from '../../shared/servicios/muestras.service';
//import { MuestrasVendimiaService } from '../../shared/servicios/muestras-vendimia.service';
//import { MuestrasConservacionService } from '../../shared/servicios/muestras-conservacion.service';

@Component({
  selector: 'app-muestras',
  templateUrl: './muestras.component.html',
  styleUrls: ['./muestras.component.css']
})
export class MuestrasComponent implements OnInit {
  columnasMaduracion=["cata", "ph", "acidez", "grado_alcoholico", "fecha", "acciones"];
  datosMaduracion=new MatTableDataSource<definicionMuestraMaduracion>([]);

  columnasVendimia=["ph", "acidez", "temperatura", "densidad", "fecha", "acciones"];
  datosVendimia=new MatTableDataSource<definicionMuestraVendimia>([]);

  columnasConservacion=["sulfuroso", "ph", "acidez", "fecha", "acciones"];
  datosConservacion=new MatTableDataSource<definicionMuestraConservacion>([]);


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild('paginador') paginador: MatPaginator;
  //@ViewChild('paginador2') paginador2: MatPaginator;
  //@ViewChild(MatPaginator, {static: true}) paginador: MatPaginator;
  @ViewChild('paginador', {static: true}) paginador: MatPaginator;
  @ViewChild('paginador2', {static: true}) paginador2: MatPaginator;
  @ViewChild('paginador3', {static: true}) paginador3: MatPaginator;



  constructor(
    private _ServicioMuestras: MuestrasService,
  ) { }


  ngOnInit() {
/*this._ServicioMuestras.devolverTodas("maduracion").subscribe(datos=>{
  console.log (datos);
});*/
    this.cargarMaduracion();
    this.cargarVendimia();
    this.cargarConservacion();
  }


  cargarMaduracion(){
    this._ServicioMuestras.devolverTodas("maduracion").subscribe(datos=>{
      this.datosMaduracion.data = datos;
    });
    this.datosMaduracion.paginator = this.paginador;
    this.datosMaduracion.sort = this.sort;
  }

  cargarVendimia(){
    this._ServicioMuestras.devolverTodas("vendimia").subscribe(datos=>{
      this.datosVendimia.data = datos;
    });
    this.datosVendimia.paginator = this.paginador2;
    this.datosVendimia.sort = this.sort;
  }

  cargarConservacion(){
    this._ServicioMuestras.devolverTodas("conservacion").subscribe(datos=>{
      this.datosConservacion.data = datos;
    });
    this.datosConservacion.paginator = this.paginador3;
    this.datosConservacion.sort = this.sort;
  }

  eliminar($id){
    console.log ($id);
  }


}

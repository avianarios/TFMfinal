import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { definicionMuestraMaduracion, definicionMuestraVendimia, definicionMuestraConservacion } from '../../shared/modelos/muestras.model';
import { APIService } from '../../shared/servicios/API.service';
import { CosechasService } from '../../shared/servicios/cosechas.service';
//import { MuestrasVendimiaService } from '../../shared/servicios/muestras-vendimia.service';
//import { MuestrasConservacionService } from '../../shared/servicios/muestras-conservacion.service';
import { filter }  from  'rxjs/operators';

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

  filterArray=[];
  filtrados_maduracion=[];
  filtrados_vendimia=[];
  filtrados_conservacion=[];

  id_cosecha_elegida:number;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild('paginador') paginador: MatPaginator;
  //@ViewChild('paginador2') paginador2: MatPaginator;
  //@ViewChild(MatPaginator, {static: true}) paginador: MatPaginator;
  @ViewChild('paginador', {static: true}) paginador: MatPaginator;
  @ViewChild('paginador2', {static: true}) paginador2: MatPaginator;
  @ViewChild('paginador3', {static: true}) paginador3: MatPaginator;



  constructor(
    private _servicioAPI: APIService,
    private _servicioCosechas: CosechasService,
  ) { }


  ngOnInit() {
    this.id_cosecha_elegida=this._servicioCosechas.devolverCosechaElegida()['id_cosecha'];
    this.filterArray.push(this.id_cosecha_elegida);
    this.cargarDatos();
  }

  cargarDatos(){
    this.cargarMaduracion();
    this.cargarVendimia();
    this.cargarConservacion();
  }


  cargarMaduracion(){
    this._servicioAPI.devolverTodas("maduracion").subscribe(datos=>{
      //me quedo solo con las muestras que pertencen a la cosecha actual
      this.filtrados_maduracion=datos.filter(({id_cosecha}) => this.filterArray.includes(id_cosecha));
      this.datosMaduracion.data = this.filtrados_maduracion;
    });
    this.datosMaduracion.paginator = this.paginador;
    this.datosMaduracion.sort = this.sort;
  }

  cargarVendimia(){
    this._servicioAPI.devolverTodas("vendimia").subscribe(datos=>{
      this.filtrados_vendimia=datos.filter(({id_cosecha}) => this.filterArray.includes(id_cosecha));
      this.datosVendimia.data = this.filtrados_vendimia;
    });
    this.datosVendimia.paginator = this.paginador2;
    this.datosVendimia.sort = this.sort;
  }

  cargarConservacion(){
    this._servicioAPI.devolverTodas("conservacion").subscribe(datos=>{
      this.filtrados_conservacion=datos.filter(({id_cosecha}) => this.filterArray.includes(id_cosecha));
      this.datosConservacion.data = this.filtrados_conservacion;
    });
    this.datosConservacion.paginator = this.paginador3;
    this.datosConservacion.sort = this.sort;
  }


  eliminar(endpoint, id){
    this._servicioAPI.eliminar(endpoint, id).subscribe(respuesta=>{
      this.cargarDatos();
      //this._encaminador.navigate(['/admin/muestras']);
    });
  }

}

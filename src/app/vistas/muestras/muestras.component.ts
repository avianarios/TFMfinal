import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { definicionMuestraMaduracion, definicionMuestraVendimia, definicionMuestraConservacion } from 'src/app/shared/modelos/muestras.model';
import { CosechasService } from 'src/app/shared/servicios/cosechas.service';
import { APIService } from 'src/app/shared/servicios/API.service';
import { filter }  from  'rxjs/operators';

@Component({
  selector: 'app-muestras',
  templateUrl: './muestras.component.html',
  styleUrls: ['./muestras.component.scss']
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
  numFiltradosMaduracion: number=0;
  filtrados_vendimia=[];
  numFiltradosVendimia: number=0;
  filtrados_conservacion=[];
  numFiltradosConservacion: number=0;

  id_cosecha_elegida:number;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
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
      this.numFiltradosMaduracion=this.filtrados_maduracion.length;
      this.datosMaduracion.data = this.filtrados_maduracion;
    });
    this.datosMaduracion.paginator = this.paginador;
    this.datosMaduracion.sort = this.sort;
  }

  cargarVendimia(){
    this._servicioAPI.devolverTodas("vendimia").subscribe(datos=>{
      this.filtrados_vendimia=datos.filter(({id_cosecha}) => this.filterArray.includes(id_cosecha));
      this.numFiltradosVendimia=this.filtrados_vendimia.length;
      this.datosVendimia.data = this.filtrados_vendimia;
    });
    this.datosVendimia.paginator = this.paginador2;
    this.datosVendimia.sort = this.sort;
  }

  cargarConservacion(){
    this._servicioAPI.devolverTodas("conservacion").subscribe(datos=>{
      this.filtrados_conservacion=datos.filter(({id_cosecha}) => this.filterArray.includes(id_cosecha));
      this.numFiltradosConservacion=this.filtrados_conservacion.length;
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

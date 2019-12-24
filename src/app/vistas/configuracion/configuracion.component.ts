import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CosechasService } from '../../shared/servicios/cosechas.service';
import { APIService } from '../../shared/servicios/API.service';

//El siguiente servicio sirve también para los parámetros
import { definicionCosecha } from '../../shared/modelos/cosechas.model';
import { definicionParametros } from '../../shared/modelos/parametros.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


export interface Vino {
  valor: string;
  mostrar: string;
}
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})


export class ConfiguracionComponent implements OnInit {
//  formulario: FormGroup;
  columnasCosechas=["tipo_vino", "anyo", "variedad_uva", "acciones"];
  datosCosechas=new MatTableDataSource<definicionCosecha>([]);
//si no lo inicializo,da error (aunque al final sale todo bien) porque se renderiza el html, donde se incluye un {{cosechaActual.tipo_vino}} antes de que los datos estén cargados
  cosechaActual: definicionCosecha={
    "id_cosecha":0,
    "tipo_vino":"",
    "anyo":1900,
    "variedad_uva": "",
    "actual":0,
    "recogida": "",
    "produccion":"",
    "litros": 0,
    "kg":0
  }

  parametrosActuales: definicionParametros;
  parametrosActualesCargados: Promise<Boolean>;

  paso:number;
  hayParametros: boolean;

  //columnasParametros=["tipo_vino", "variedad_uva", "sulfuroso", "grado", "gluconico", "malico", "cata", "acidez", "ph", "acciones"];
  columnasParametros=["sulfuroso", "grado", "gluconico", "malico", "cata", "acidez", "ph", "acciones"];
  datosParametros=new MatTableDataSource<definicionParametros>([]);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginador: MatPaginator;

  constructor(
    private _servicioCosechas: CosechasService,
    private _servicioAPI: APIService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.cargarCosechas();
    this.paso=1;
    this.hayParametros=false;
  }

  cargarCosechas(){
    this.hayParametros=false;
    this._servicioAPI.devolverTodas("cosecha").subscribe(datos=>{
      this.datosCosechas.data = datos;
      datos.forEach(cosecha=>{
        if (cosecha.actual){
          this.cosechaActual=cosecha;
          this._servicioCosechas.elegirCosecha(cosecha);
        }
      });
      this.cargarParametros();
    });
    this.datosCosechas.paginator = this.paginador;
    this.datosCosechas.sort = this.sort;
  }

  cargarParametros(){
//para cambiar variedad_uva por tipo_vino, es necesario hacerlo aquí y en controladorParametros
    this._servicioAPI.devolverUna("parametros", this.cosechaActual["variedad_uva"]).subscribe(datos=>{
      if (datos.length>0){
        this.parametrosActuales=datos[0];
        this.hayParametros=true;
        this.parametrosActualesCargados=Promise.resolve(true);
        this.datosParametros.data = datos;
        this._servicioCosechas.elegirParametros(datos[0]);
      }

    });
  }

  cambiarEleccion($nuevaCosechaActual){
   //this.cosechaActual contiene la que, hasta ahora, era la cosecha actual. $nuevaCosechaActual es la nueva, elegida por el usuario
   const sinActual={"actual":"0"};
   const conActual={"actual":"1"};
   this._servicioAPI.actualizar("cosecha", this.cosechaActual["id_cosecha"], sinActual).subscribe(datos=>{
     this._servicioAPI.actualizar("cosecha", $nuevaCosechaActual["id_cosecha"], conActual).subscribe(datos=>{
       this.cargarCosechas();
     });
   });
   this.paso=2;
 }

  cambiarPaso($num){
    this.paso=$num;
  }
}

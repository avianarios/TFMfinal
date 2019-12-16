import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
//import { CosechaDetalleComponent } from './cosecha-detalle/cosecha-detalle.component';
import { Router } from '@angular/router';

import { CosechasService } from '../../shared/servicios/cosechas.service';
import { MuestrasService } from '../../shared/servicios/muestras.service';

//El siguiente servicio sirve también para los parámetros
import { definicionCosecha } from '../../shared/modelos/cosechas.model';
import { definicionParametros } from '../../shared/modelos/parametros.model';

/*import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';*/
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


export interface Vino {
  valor: string;
  mostrar: string;
}
@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})


export class ConfiguracionComponent implements OnInit {
//  formulario: FormGroup;
  elegida: definicionCosecha;
  columnasCosechas=["tipo_vino", "anyo", "variedad_uva", "acciones"];
  datosCosechas=new MatTableDataSource<definicionCosecha>([]);
  paso:number;

  columnasParametros=["tipo_vino", "tipo_uva", "sulfuroso", "grado", "gluconico", "malico", "cata", "acidez", "ph"];
  datosParametros=new MatTableDataSource<definicionParametros>([]);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginador: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginador2: MatPaginator;

/*  selectedValue: string;
  vinos: Vino[] = [
   {valor: 'tinto', mostrar: 'Tinto'},
   {valor: 'blanco', mostrar: 'Blanco'}
 ];*/


  constructor(
    private _servicioCosechas: CosechasService,
    private _ServicioMuestras: MuestrasService,
    //private _builder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.cargarCosechas();
    this.paso=1;
  }

  cargarCosechas(){
    this._servicioCosechas.devolverCosechas().subscribe(datos=>{
      this.datosCosechas.data = datos;
    });
  //  this.crearFormulario();
    this.datosCosechas.paginator = this.paginador;
    this.datosCosechas.sort = this.sort;
  }

  cargarParametros(){
    this._ServicioMuestras.devolverTodas("parametros").subscribe(datos=>{
      this.datosParametros.data = datos;
    });
  //  this.crearFormulario();
    this.datosParametros.paginator = this.paginador2;
    this.datosParametros.sort = this.sort;
  }

  /*crearFormulario() {
    this.formulario = this._builder.group({
      tipo_vino: new FormControl(''),
      variedad_uva: new FormControl(),
      anyo: new FormControl((new Date()).getFullYear()),
    });
  }*/

  elegirCosecha($cosecha){
    this._servicioCosechas.elegirCosecha($cosecha);
    this.cargarParametros();
    this.paso=2;
    //this._router.navigateByUrl('/admin/muestras');
  }

  cosechaElegida (){
    this.elegida=this._servicioCosechas.devolverCosechaElegida();
  }

  /*guardarCosecha(){
    this._servicioCosechas.guardarCosecha(JSON.stringify(this.formulario.value)).subscribe(respuesta=>{
      this.recargarLista();
    });
  }

  eliminarCosecha($id) {
    this._servicioCosechas.eliminarCosecha($id).subscribe(respuesta=>{
      this.recargarLista();
    });
  }*/

}

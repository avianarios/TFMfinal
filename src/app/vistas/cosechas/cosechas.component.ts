import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CosechasService } from '../../shared/servicios/cosechas.service';
import { CosechaDetalleComponent } from './cosecha-detalle/cosecha-detalle.component';
import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { definicionCosecha } from '../../shared/modelos/cosechas.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


export interface Vino {
  valor: string;
  mostrar: string;
}
@Component({
  selector: 'app-cosechas',
  templateUrl: './cosechas.component.html',
  styleUrls: ['./cosechas.component.css']
})


export class CosechasComponent implements OnInit {
  formulario: FormGroup;
  elegida: definicionCosecha;
  columnas=["tipo_vino", "anyo", "variedad_uva", "acciones"];
  dataSource=new MatTableDataSource<definicionCosecha>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  selectedValue: string;
  vinos: Vino[] = [
   {valor: 'tinto', mostrar: 'Tinto'},
   {valor: 'blanco', mostrar: 'Blanco'}
  ];


  constructor(
    private _servicioCosechas: CosechasService,
    private _builder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.recargarLista();
  }

  recargarLista(){
    this._servicioCosechas.devolverCosechas().subscribe(datos=>{
      this.dataSource.data = datos;
    });
    this.crearFormulario();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  crearFormulario() {
    this.formulario = this._builder.group({
      tipo_vino: new FormControl(''),
      variedad_uva: new FormControl(),
      anyo: new FormControl((new Date()).getFullYear()),
    });
  }

  elegirCosecha($cosecha){
    this._servicioCosechas.elegirCosecha($cosecha);
    this._router.navigateByUrl('/admin/estadisticas');
  }

  cosechaElegida (){
    this.elegida=this._servicioCosechas.devolverCosechaElegida();
  }

  guardarCosecha(){
    this._servicioCosechas.guardarCosecha(JSON.stringify(this.formulario.value)).subscribe(respuesta=>{
      this.recargarLista();
    });
  }

  eliminarCosecha($id) {
    this._servicioCosechas.eliminarCosecha($id).subscribe(respuesta=>{
      this.recargarLista();
    });
  }

}

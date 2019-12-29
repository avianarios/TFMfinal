import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CosechasService } from 'src/app/shared/servicios/cosechas.service';
import { APIService } from 'src/app/shared/servicios/API.service';
import { Router } from '@angular/router';
import { definicionCosecha } from 'src/app/shared/modelos/cosechas.model';

import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

export interface Vino {
  valor: string;
  mostrar: string;
}
@Component({
  selector: 'app-cosechas',
  templateUrl: './cosechas.component.html',
  styleUrls: ['./cosechas.component.scss']
})

export class CosechasComponent implements OnInit {
  formulario: FormGroup;
  elegida: definicionCosecha;
  numeroCosechas:number;
  columnas=["tipo_vino", "anyo", "variedad_uva", "acciones"];
  datosCosechas=new MatTableDataSource<definicionCosecha>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  vinos: Vino[] = [
   {valor: 'tinto', mostrar: 'Tinto'},
   {valor: 'blanco', mostrar: 'Blanco'}
  ];

  constructor(
    private _servicioCosechas: CosechasService,
    private _servicioAPI: APIService,
    private _builder: FormBuilder,
    private _router: Router,

  ) { }

  ngOnInit() {
    this.recargarLista();
    this.elegida=this._servicioCosechas.devolverCosechaElegida();
  }

  recargarLista(){
    this._servicioAPI.devolverTodas("cosecha").subscribe(datos=>{
      this.datosCosechas.data = datos;
      this.numeroCosechas=datos.length;
    });
    this.datosCosechas.paginator = this.paginator;
    this.datosCosechas.sort = this.sort;
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this._builder.group({
      tipo_vino: new FormControl(''),
      variedad_uva: new FormControl(),
      anyo: new FormControl((new Date()).getFullYear()),
    });
  }

  guardarCosecha(){
    this._servicioAPI.guardar("cosecha", JSON.stringify(this.formulario.value)).subscribe(respuesta=>{
      this.recargarLista();
    });
  }

  eliminarCosecha($id) {
    const conActual={"actual":"1"};
    this._servicioAPI.eliminar("cosecha", $id).subscribe(respuesta=>{
      if (this.elegida.id_cosecha==$id){
        this._servicioAPI.devolverTodas("cosecha").subscribe(listaCosechas=>{
          //elijo como cosecha actual la última que se introdujo
          this.elegida=listaCosechas[0];
          this._servicioCosechas.elegirCosecha(this.elegida);
          this._servicioAPI.actualizar("cosecha", this.elegida["id_cosecha"], conActual).subscribe();
        });
      }
      this.recargarLista();
    });
  }
}

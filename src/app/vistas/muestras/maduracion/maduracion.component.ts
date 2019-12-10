import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MuestrasMaduracionService } from '../../../shared/servicios/muestras-maduracion.service';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {formatoFecha} from '../../../shared/validadores';
import {definicionMuestraMaduracion} from '../../../shared/modelos/muestraMaduracion.model';
import { definicionCosecha } from '../../../shared/modelos/cosechas.model';
import { DatePipe } from '@angular/common';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CosechasService } from '../../../shared/servicios/cosechas.service';

@Component({
  selector: 'app-maduracion',
  templateUrl: './maduracion.component.html',
  styleUrls: ['./maduracion.component.css']
})
export class MaduracionComponent implements OnInit {
  public hoy=new Date();
  //columnas: string[];
  columnas=["id_muestra", "cata", "ph", "acidez", "grado_alcoholico", "fecha", "acciones"];
  formulario: FormGroup;
  //@Output() onSave: EventEmitter<muestraMaduracion> = new EventEmitter<muestraMaduracion>();
  dataSource=new MatTableDataSource<definicionMuestraMaduracion>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  elegida: definicionCosecha;

  constructor(
      private _MuestrasMaduracion: MuestrasMaduracionService,
      private _builder: FormBuilder,
      private _datepipe: DatePipe,
      private _servicioCosechas: CosechasService
  ) { }

  ngOnInit() {
    this.recargarLista();
    this.cosechaElegida();
  }

  crearFormulario() {
    var fechaHoy = this._datepipe.transform(new Date(),"yyyy-MM-dd");
    this.formulario = this._builder.group({
      id_muestra: new FormControl (''),
      cata: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ph: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      acidez: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      grado_alcoholico: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      fecha: new FormControl(fechaHoy),
    });
  }

  guardar(){
    this.formulario.value.id_cosecha=this._servicioCosechas.devolverCosechaElegida().id_cosecha.toString();    //obtengo el id_cosecha elegida en la primera pantalla para asociar la muestra a dicha cosecha
    this._MuestrasMaduracion.guardarMuestraMaduracion(JSON.stringify(this.formulario.value)).subscribe(respuesta=>{
      this.recargarLista();
    });
  }

  eliminar($id){
    this._MuestrasMaduracion.eliminarMuestraMaduracion($id).subscribe(respuesta=>{
      this.recargarLista();
    });
  }

  recargarLista() {
    this._MuestrasMaduracion.devolverMuestrasMaduracion().subscribe(datos=>{
      /*datos.forEach(muestra_act=>{
        muestra_act.fecha = (this._datepipe.transform(new Date(muestra_act.fecha),"dd-MM-yyyy"));
      });*/
      this.dataSource.data = datos;
    });
    this.crearFormulario();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cosechaElegida (){
    this.elegida=this._servicioCosechas.devolverCosechaElegida();
  }
}

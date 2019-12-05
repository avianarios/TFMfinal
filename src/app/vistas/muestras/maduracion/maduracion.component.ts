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
  columnas: string[];
  formulario: FormGroup;
  //@Output() onSave: EventEmitter<muestraMaduracion> = new EventEmitter<muestraMaduracion>();
  dataSource=new MatTableDataSource<definicionMuestraMaduracion>([]);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
      private _MuestrasMaduracion: MuestrasMaduracionService,
      private _builder: FormBuilder,
      private _datepipe: DatePipe,
      private _cosechasService: CosechasService
  ) { }

  ngOnInit() {
    this._MuestrasMaduracion.devolverMuestrasMaduracion().subscribe(datos=>{
      this.columnas=Object.keys(datos[0]);
      this.columnas.push("acciones");
      datos.forEach(muestra_act=>{
        muestra_act.fecha = (this._datepipe.transform(new Date(muestra_act.fecha),"dd-MM-yyyy"));
      });
      this.dataSource.data = datos;
    });
    this.crearFormulario();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  crearFormulario() {
    //var fechaHoy = this._datepipe.transform(new Date(),"dd/MM/yyyy");
    var fechaHoy = this._datepipe.transform(new Date(),"yyyy-MM-dd");
    this.formulario = this._builder.group({
      id_muestra: new FormControl (''),
      cata: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ph: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      acidez: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      grado_alcoholico: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      fecha: new FormControl(fechaHoy, [Validators.required]),
    });
  }

  public guardar(){
    //alternativa 1
    //this.onSave.emit(this.formulario.value);

    //alternativa 2
    /*this._MuestrasMaduracion.guardarMuestraMaduracion(JSON.stringify(this.formulario.value)).subscribe((respuesta)=>{
      console.log(respuesta);
    });*/
    this.formulario.value.id_cosecha=this._cosechasService.devolverCosechaElegida().id_cosecha;
    this._MuestrasMaduracion.guardarMuestraMaduracion(JSON.stringify(this.formulario.value)).subscribe((respuesta)=>{
      console.log(respuesta);
    });
  }

  public eliminar($id){
    //console.log ($id);
    this._MuestrasMaduracion.eliminarMuestraMaduracion($id);
  }
}

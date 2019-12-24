import { APIService } from '../../../shared/servicios/API.service';
import { CosechasService } from '../../../shared/servicios/cosechas.service';
import { Component, OnInit
  //, Input, Output, EventEmitter
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { definicionCosecha } from '../../../shared/modelos/cosechas.model';
import { definicionParametros } from '../../../shared/modelos/parametros.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit {
  cosechaActual: definicionCosecha;
  parametros: definicionParametros;
  formulario: FormGroup;
  terminado: boolean;
  //@Output() clickGuardar: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(
    private _servicioCosechas: CosechasService,
    private _servicioAPI: APIService,
    private _builder: FormBuilder,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.crearFormulario();
    this.cargarParametros();
    this.rellenarFormulario();
    this.terminado=false;
  }

  crearFormulario() {
    this.formulario = this._builder.group({
      tipo_vino: new FormControl (''),
      variedad_uva: new FormControl (''),
      sulfuroso: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      grado: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      gluconico: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      malico: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      cata: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      acidez: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ph: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    });
  }

  rellenarFormulario(){
    this.formulario.get('tipo_vino').setValue(this.cosechaActual.tipo_vino);
    this.formulario.get('variedad_uva').setValue(this.cosechaActual.variedad_uva);
    //si hay parámetros ya definidos
    if (this.parametros){
      this.formulario.get('sulfuroso').setValue(this.parametros.sulfuroso);
      this.formulario.get('grado').setValue(this.parametros.grado);
      this.formulario.get('gluconico').setValue(this.parametros.gluconico);
      this.formulario.get('malico').setValue(this.parametros.malico);
      this.formulario.get('cata').setValue(this.parametros.cata);
      this.formulario.get('acidez').setValue(this.parametros.acidez);
      this.formulario.get('ph').setValue(this.parametros.ph);
    }
  }

  cargarParametros(){
    this.parametros=this._servicioCosechas.devolverParametros();
    this.cosechaActual=this._servicioCosechas.devolverCosechaElegida();
  }

  guardarParametros(){
    if (this.parametros){
      this._servicioAPI.actualizar ("parametros", this.parametros.id_parametros, this.formulario.value).subscribe (datos=>{
      });
    }else{
      this._servicioAPI.guardar("parametros", this.formulario.value).subscribe(datos=>{
        this._servicioCosechas.elegirParametros(this.formulario.value);
      });
    }
    this._location.back();
    this.terminado=true;
    //this.clickGuardar.emit(true);
  }

}

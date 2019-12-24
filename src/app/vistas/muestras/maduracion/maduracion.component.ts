import { Component, OnInit, EventEmitter } from '@angular/core';
import { APIService } from '../../../shared/servicios/API.service';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {formatoFecha} from '../../../shared/validadores';
import { definicionCosecha } from '../../../shared/modelos/cosechas.model';
import { DatePipe } from '@angular/common';
import { CosechasService } from '../../../shared/servicios/cosechas.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-maduracion',
  templateUrl: './maduracion.component.html',
  styleUrls: ['./maduracion.component.scss']
})
export class MaduracionComponent implements OnInit {
  public hoy=new Date();
  formulario: FormGroup;
  //@Output() onSave: EventEmitter<muestraMaduracion> = new EventEmitter<muestraMaduracion>();
  elegida: definicionCosecha;
  url_endpoint="maduracion";

  constructor(
      private _servicioAPI: APIService,
      private _builder: FormBuilder,
      private _datepipe: DatePipe,
      private _servicioCosechas: CosechasService,
      private _encaminador: Router
  ) { }

  ngOnInit() {
    this.elegida=this._servicioCosechas.devolverCosechaElegida();
    this.crearFormulario();
  }

  crearFormulario() {
    var fechaHoy = this._datepipe.transform(new Date(),"yyyy-MM-dd");
    this.formulario = this._builder.group({
      id_muestra: new FormControl (''),
      id_cosecha: new FormControl(this._servicioCosechas.devolverCosechaElegida().id_cosecha.toString()),
      cata: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ph: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      acidez: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      grado_alcoholico: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      fecha: new FormControl(fechaHoy),
    });
    /*Alternativas para cambiar el valor de un campo de un formulario:
    this.formulario.get('id_cosecha').setValue(this._servicioCosechas.devolverCosechaElegida().id_cosecha.toString());
    Alternativa a lo anterior:    this.formulario.value.id_cosecha=this._servicioCosechas.devolverCosechaElegida().id_cosecha.toString();*/
  }

  guardar(){
    this._servicioAPI.guardar(this.url_endpoint, JSON.stringify(this.formulario.value)).subscribe(respuesta=>{
//      this.recargarLista();
      this._encaminador.navigate(['/admin/muestras']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/servicios/API.service';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {formatoFecha} from 'src/app/shared/validadores';
import { definicionCosecha } from 'src/app/shared/modelos/cosechas.model';
import { DatePipe } from '@angular/common';
import { CosechasService } from 'src/app/shared/servicios/cosechas.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-vendimia',
  templateUrl: './vendimia.component.html',
  styleUrls: ['./vendimia.component.scss']
})
export class VendimiaComponent implements OnInit {
  formulario: FormGroup;
  elegida: definicionCosecha;
  url_endpoint="vendimia";

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
      acidez: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      ph: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      temperatura: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      densidad: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      fecha: new FormControl(fechaHoy),
    });
  }

  guardar(){
    this._servicioAPI.guardar(this.url_endpoint, JSON.stringify(this.formulario.value)).subscribe(respuesta=>{
//      this.recargarLista();
      this._encaminador.navigate(['/admin/muestras']);
    });
  }

}

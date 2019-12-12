import { Component, OnInit, EventEmitter } from '@angular/core';
import { MuestrasService } from '../../../shared/servicios/muestras.service';
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
  styleUrls: ['./maduracion.component.css']
})
export class MaduracionComponent implements OnInit {
  public hoy=new Date();
  //columnas: string[];
  formulario: FormGroup;
  //@Output() onSave: EventEmitter<muestraMaduracion> = new EventEmitter<muestraMaduracion>();
  elegida: definicionCosecha;

  constructor(
      private _ServicioMuestras: MuestrasService,
      private _builder: FormBuilder,
      private _datepipe: DatePipe,
      private _ServicioCosechas: CosechasService,
      private _encaminador: Router
  ) { }

  ngOnInit() {
    this.elegida=this._ServicioCosechas.devolverCosechaElegida();
    this.crearFormulario();
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
    this.formulario.value.id_cosecha=this._ServicioCosechas.devolverCosechaElegida().id_cosecha.toString();    //obtengo el id_cosecha elegida en la primera pantalla para asociar la muestra a dicha cosecha
    this._ServicioMuestras.guardarMuestraMaduracion(JSON.stringify(this.formulario.value)).subscribe(respuesta=>{
//      this.recargarLista();
      this._encaminador.navigate(['/admin/muestras']);
    });
  }

  eliminar($id){
    this._ServicioMuestras.eliminarMuestraMaduracion($id).subscribe(respuesta=>{
      //this.recargarLista();
      this._encaminador.navigate(['/admin/muestras']);
    });
  }

}

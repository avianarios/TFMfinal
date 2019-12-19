import { APIService } from '../../../shared/servicios/API.service';
import { CosechasService } from '../../../shared/servicios/cosechas.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { definicionCosecha } from '../../../shared/modelos/cosechas.model';


@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {
  cosechaActual: definicionCosecha;

  constructor(
    private _servicioCosechas: CosechasService,
    private _servicioAPI: APIService
  ) { }

  ngOnInit() {
    this.cargarParametros();
  }

  cargarParametros(){
    this.cosechaActual=this._servicioCosechas.devolverCosechaElegida();
    console.log (this.cosechaActual);
    /*this._servicioAPI.devolverUna("parametros", this.cosechaActual["tipo_vino"]).subscribe(datos=>{
      this.datosParametros.data = datos;
    });
  //  this.crearFormulario();
    this.datosParametros.paginator = this.paginador2;
    this.datosParametros.sort = this.sort;*/
  }

}

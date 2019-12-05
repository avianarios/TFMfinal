import { Component, OnInit } from '@angular/core';
import { definicionCosecha } from '../../shared/modelos/cosechas.model';
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

@Component({
  selector: 'app-cosechas',
  templateUrl: './cosechas.component.html',
  styleUrls: ['./cosechas.component.css']
})
export class CosechasComponent implements OnInit {

  cosechas: definicionCosecha[];
  formulario: FormGroup;

  constructor(
    private _servicioCosechas: CosechasService,
    private _builder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getCosechas();
    this.crearFormulario();
  }

  getCosechas(): void {
    this._servicioCosechas.devolverCosechas()
        .subscribe(cosechas => this.cosechas = cosechas);
      }

  eliminarCosecha($cosecha){
      this._servicioCosechas.eliminarCosecha($cosecha.id);
  }

  crearFormulario() {
    this.formulario = this._builder.group({
      tipo_vino: new FormControl(''),
      variedad_uva: new FormControl(),
      año: new FormControl((new Date()).getFullYear()),
    });
  }

  crearCosecha($cosecha) {
    console.log ($cosecha.anyo.value);
  }

  elegirCosecha($cosecha){
    this._servicioCosechas.elegirCosecha($cosecha);
    this._router.navigateByUrl('/admin/estadisticas');
  }
  /*eliminarCosecha(tipo_vino: string, anyo: number) {
/*    this.cosechas.splice(id,1);
    let i: number;
    for ( i = 0; i < this.cosechas.length; i++)   //Reorganizo los índices para cerrar el hueco dejado
      this.cosechas[i].id=i;

//FALTA HACER LOS CAMBIOS EN LA BBDD LLAMANDO A LA API
  }*/

}

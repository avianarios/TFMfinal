import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { APIService } from '../../../shared/servicios/API.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export interface Vino {
  valor: string;
  mostrar: string;
}

@Component({
  selector: 'app-nueva-cosecha',
  templateUrl: './nueva-cosecha.component.html',
  styleUrls: ['./nueva-cosecha.component.css']
})
export class NuevaCosechaComponent implements OnInit {
  formulario: FormGroup;
  vinos: Vino[] = [
   {valor: 'tinto', mostrar: 'Tinto'},
   {valor: 'blanco', mostrar: 'Blanco'}
  ];

  constructor(
    private _servicioAPI: APIService,
    private _builder: FormBuilder,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this._builder.group({
      tipo_vino: new FormControl('',Validators.required),
      variedad_uva: new FormControl('',Validators.required),
      anyo: new FormControl((new Date()).getFullYear(), Validators.required),
    });
  }

  guardarCosecha(){
    this.formulario.value.actual=1;
    this._servicioAPI.guardar("cosecha", JSON.stringify(this.formulario.value)).subscribe(datos=>{
      //this._router.navigateByUrl('/admin/cosechas');
      this._location.back();
    });
  }

}

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
import { CosechasService } from '../../../shared/servicios/cosechas.service';

export interface Vino {
  valor: string;
  mostrar: string;
}

@Component({
  selector: 'app-nueva-cosecha',
  templateUrl: './nueva-cosecha.component.html',
  styleUrls: ['./nueva-cosecha.component.scss']
})
export class NuevaCosechaComponent implements OnInit {

  formulario: FormGroup;
  vinos: Vino[] = [
   {valor: 'tinto', mostrar: 'Tinto'},
   {valor: 'blanco', mostrar: 'Blanco'}
  ];

  constructor(
    private _servicioCosechas: CosechasService,
    private _servicioAPI: APIService,
    private _builder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formulario = this._builder.group({
      tipo_vino: new FormControl('',Validators.required),
      variedad_uva: new FormControl('',Validators.required),
      anyo: new FormControl((new Date()).getFullYear(), Validators.required)
    });
  }

  guardarCosecha(){
    this.formulario.value.actual=1;
    const nuevaCosecha=JSON.stringify(this.formulario.value);
    const elegida=this._servicioCosechas.devolverCosechaElegida();

    const sinActual={"actual":"0"};
    this._servicioAPI.actualizar("cosecha", elegida["id_cosecha"], sinActual).subscribe(datos=>{
      this._servicioAPI.guardar("cosecha", nuevaCosecha).subscribe(datos=>{
        this._servicioCosechas.elegirCosecha(nuevaCosecha);
        this._router.navigateByUrl('/admin/configuracion');
      });
    });
  }

}

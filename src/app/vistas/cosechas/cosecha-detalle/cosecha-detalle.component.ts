import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { definicionCosecha } from '../../../shared/modelos/cosechas.model';

@Component({
  selector: 'app-cosecha-detalle',
  templateUrl: './cosecha-detalle.component.html',
  styleUrls: ['./cosecha-detalle.component.css']
})

export class CosechaDetalleComponent implements OnInit {

  @Input() cosecha: definicionCosecha;
  @Output() clickRemove: EventEmitter<number> = new EventEmitter<number>();
  detalles:boolean=false;

  constructor() { }
  ngOnInit() {
  }

  borrarTarea() {
    this.clickRemove.emit(this.cosecha.anyo);
  }

  goDetail(){
    this.detalles=true;
  }
}

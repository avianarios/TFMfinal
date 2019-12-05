import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { definicionCosecha } from '../../shared/modelos/cosechas.model';

@Component({
  selector: 'cosecha-elemento',
  templateUrl: './cosecha-elemento.component.html',
  styleUrls: ['./cosecha-elemento.component.scss']
})

export class CosechaElementoComponent implements OnInit {

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

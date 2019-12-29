import { Component, OnInit, Input} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { APIService } from 'src/app/shared/servicios/API.service';
import { DatePipe } from '@angular/common';
import { CosechasService } from 'src/app/shared/servicios/cosechas.service';
import { definicionCosecha } from 'src/app/shared/modelos/cosechas.model';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  @Input () private datosGrafico:  ChartDataSets[];
  @Input () private titulo: string;
  @Input () private etiquetasGrafico:  Label[];
  @Input () private coloresLinea:  Color[];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.1)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    //Esto saca una línea vertical en pantalla con la leyenda LineAnno
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'April',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'vendimia'
          }
        },
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'May',
          borderColor: 'Blue',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'conservación'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // dark grey
      backgroundColor: 'rgba(99,12,34,0.3)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  constructor() { }

  ngOnInit() {
  }

  public changeColor() {
    this.lineChartColors.forEach(color=>{
        var o = Math.round, r = Math.random, s = 255;
        let fuerte='rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',1)';
        let debil=fuerte.replace(",1)", ",0.1)");
      color.borderColor=fuerte;
      color.backgroundColor=debil;
    });
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }
}

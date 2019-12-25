import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { APIService } from '../../shared/servicios/API.service';
import { DatePipe } from '@angular/common';
import { CosechasService } from '../../shared/servicios/cosechas.service';
import { definicionCosecha } from '../../shared/modelos/cosechas.model';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [{
    data: [],
    label: ''
  }];
  public lineChartLabels: Label[] = [];

  public lineChartData2: ChartDataSets[] = [{
    data: [],
    label: ''
  }];
  public lineChartLabels2: Label[] = [];

  /*public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' },
    { data: [18, 38, 20, 16, 26, 17, 40], label: 'Series D' }
  ];
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'March', 'April', 'May', 'June', 'July'];*/

  //public lineChartOptions: (ChartOptions & { annotation: any }) = {
  public lineChartOptions: (ChartOptions) = {
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
    }/*,
    //Esto saca una línea vertical en pantalla con la leyenda LineAnno
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },*/
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
  //public lineChartPlugins = [pluginAnnotations];

  datosGrafico:Array<number>=[];
  etiqueta:string="";
  etiquetasLinea: Label[]=[];
  elegida: definicionCosecha;


  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(
    //private _servicioCosechas: CosechasService,
    private _datepipe: DatePipe,
    private _servicioCosechas: CosechasService,
    private _servicioAPI: APIService
) { }

  ngOnInit() {

    this.elegida=this._servicioCosechas.devolverCosechaElegida();

    this.etiqueta="PH Maduración";
    this._servicioAPI.devolverParametrosFase("estadisticas", "maduracion", "ph", /*this.elegida.id_cosecha*/40).subscribe(datos=>{
      datos.forEach(elemento=>{
        let fecha=((Object.values(elemento)[1]) as Date);
        this.etiquetasLinea.push(this._datepipe.transform(fecha,"dd-MM-yyyy"));
        this.datosGrafico.push((Object.values(elemento)[0]) as number);
      });
      this.lineChartData[0].data=this.datosGrafico;
      this.lineChartData[0].label=this.etiqueta;
      this.lineChartLabels=this.etiquetasLinea;

      this.chart.update();
    });




/*//este es el formato que hay que conseguir
public lineChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' },
  { data: [18, 38, 20, 16, 26, 17, 40], label: 'Series D' }
];*/

  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }
}

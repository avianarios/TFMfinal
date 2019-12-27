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
  //maximasSeriesPorGrafico debe estar acorde al número de líneas de lineChartData2
  public maximasSeriesPorGrafico=3;
  public lineChartData: ChartDataSets[] = [
    {data: [], label: ''},
    {data: [], label: ''},
    {data: [], label: ''}
  ];

  public lineChartLabels: Label[] = [];

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

//  datosGrafico:Array<number>=[];
  etiquetasLinea: Label[]=[];
  elegida: definicionCosecha;


  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(
    private _datepipe: DatePipe,
    private _servicioCosechas: CosechasService,
    private _servicioAPI: APIService
) { }

  ngOnInit() {
    this.elegida=this._servicioCosechas.devolverCosechaElegida();
    //this.rellenarDatosHistoricos("ph", 1, this.lineChartData, this.lineChartLabels);
    //this.rellenarDatosHistoricos("ph", 2, this.lineChartData2, this.lineChartLabels2);
    this.rellenarDatosHistoricos("ph", 2, this.lineChartData, this.lineChartLabels);

  }


  //rellena el gráfico con datos sobre el parámetro $parametro de las numSeries últimas cosechas
  //como máximo admite tres cosecha (habría que meter más filas vacías en la definición de lineChartData2 al principio)
  rellenarDatosHistoricos($parametro, $numSeries, $datosGrafico, $etiquetasEjeX){
     //this.lineChartData2.push ({data: [], label: ''});
      let leyenda="";
      let maxima=0;
      let etiquetasLinea;
      //elimina las líneas vacías de lineChartData2 para que no aparezcan en la tabla filas sin datos
      $datosGrafico.splice(1,this.maximasSeriesPorGrafico-$numSeries);

      let id_cosechas:Array<number>=[]
      this._servicioAPI.devolverTodas("cosecha").subscribe(cosechas=>{
        cosechas.length=Math.min($numSeries, this.maximasSeriesPorGrafico);
        cosechas.forEach(cosecha=>{
          id_cosechas.push(cosecha['id_cosecha']);
      //en id_cosechas tengo los id de las últimas cosechas
        });

        let i=0;
        cosechas.forEach(cosecha=>{
          let datosGraficoTMP:Array<number>=[];
          //etiqueta visible en la leyenda
          leyenda=$parametro+" cosecha "+cosecha['tipo_vino']+"/"+cosecha['anyo'];

          //obtengo los datos de ese parámetro para cada una de las X últimas cosechas
          this._servicioAPI.devolverParametro("estadisticas", $parametro, cosecha['id_cosecha']).subscribe(datos=>{

            //meto los valores de cada parámetro
            datos.forEach(elemento=>{

              etiquetasLinea=[];

              /*Si el gráfico solo muestra una serie, se usa como leyenda de la línea X la fecha de toma de la muestra
              Si se muestra más de una serie de distintos años, se usa como muestra el número de muestra (pueden no haberse
               tomado las muestras en la misma fecha ni haberse tomado el mismo número de muestras)*/
              if ($numSeries==1){
                let fecha=((Object.values(elemento)[1]) as Date);
                etiquetasLinea.push(this._datepipe.transform(fecha,"dd-MM-yyyy"));
              }else{

                /*calculo el número máximo de muestras tomadas en cada cosecha para mostrar la escala en la línea X del gráfico
                ya que podrían no haberse tomado el mismo número de muestras en las distintas series*/
                if (datos.length>maxima)
                maxima=datos.length;
                for (let $i=1; $i<=maxima; $i++)
                etiquetasLinea.push($i);
              }

              //los meto en una matriz temporal
              datosGraficoTMP.push((Object.values(elemento)[0]) as number);
            });
            $datosGrafico[i].data=datosGraficoTMP;
            $datosGrafico[i].label=leyenda;
            $etiquetasEjeX=etiquetasLinea;
            //this.lineChartLabels=etiquetasLinea;
            i++;
          });
      });
    });
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
}

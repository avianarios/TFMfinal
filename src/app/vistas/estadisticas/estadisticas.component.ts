import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { APIService } from 'src/app/shared/servicios/API.service';
import { DatePipe } from '@angular/common';
import { CosechasService } from 'src/app/shared/servicios/cosechas.service';
import { definicionCosecha } from 'src/app/shared/modelos/cosechas.model';

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

  public lineChartData2: ChartDataSets[] = [
    {data: [], label: ''},
    {data: [], label: ''},
    {data: [], label: ''}
  ];

  public lineChartData3: ChartDataSets[] = [
    {data: [], label: ''},
    {data: [], label: ''},
    {data: [], label: ''}
  ];

  public lineChartData4: ChartDataSets[] = [
    {data: [], label: ''},
    {data: [], label: ''},
    {data: [], label: ''}
  ];

  public lineChartLabels: Label[] = [];

//  datosGrafico:Array<number>=[];
  etiquetasLinea: Label[]=[];
  elegida: definicionCosecha;

  titulos: Array<string>=["ph de la cosecha actual", "ph de las tres últimas cosechas", "acidez de la cosecha actual", "acidez de las tres últimas cosechas"];

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

    //lineChartLabels es pasado como valor, por lo que no se modifica en el interior de la función si se pasa como argumento
    //lineChartData, al ser un objeto, es pasado como referencia, por lo que sí se modifica dentro de la función
    this.rellenarDatosHistoricos("ph", 1, this.lineChartData, this.lineChartLabels);
    this.rellenarDatosHistoricos("ph", 3, this.lineChartData2, this.lineChartLabels);
    this.rellenarDatosHistoricos("acidez", 1, this.lineChartData3, this.lineChartLabels);
    this.rellenarDatosHistoricos("acidez", 3, this.lineChartData4, this.lineChartLabels);

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

            //lineChartLabels es pasado como valor, por lo que no se modifica en el interior de la función si se pasa como argumento
            //$etiquetasEjeX=etiquetasLinea;
            this.lineChartLabels=etiquetasLinea;
            i++;
          });
      });
    });
  }
}

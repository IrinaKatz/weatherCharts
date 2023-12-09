import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartData, ChartEvent, ChartType} from "chart.js";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import {BaseChartDirective} from "ng2-charts";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-charts-element',
  templateUrl: './charts-element.component.html',
  styleUrls: ['./charts-element.component.css']
})
export class ChartsElementComponent implements OnInit{

  @Input() data!: number[];
  @Input() time!: string[];
  @Input() chartName!: string;
  @Input() unitedData!: {data: number[], time: string[], name: string}[];

  public chartNames = {
  temperature1: 'Temperature',
  temperature2: 'Apparent temperature',
  humidity: 'Humidity',
  windSpeed: 'Wind speed'
  }

  public name:string = '';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public chartType: ChartType = 'bar';
  public chartPlugins = [DataLabelsPlugin];

  public chartData: ChartData<ChartType, number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };

  public chartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },

    }
  };

  private colors: string[] = ['darkBlue', 'darkRed', 'green', 'orange', 'purple', 'darkCyan'];
  private currentColor: string = this.colors[0];
  ngOnInit(): void {

    if(!this.unitedData && this.data && this.time && this.chartName) {
      // @ts-ignore
      this.name = this.chartNames[this.chartName]
      this.chartData = {
        labels: this.time,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.currentColor
          },
        ],
      };
      this.chartOptions = {
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          datalabels: {
            display: false
          },

        },
        scales: {
          x: {},
          y: {
            min: this.findMinValue(this.data),
          },
        }
      };
    }
    if(this.unitedData) {
      this.chartOptions = {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          datalabels: {
            display: false
          },

        },
        scales: {
          x: {},
          y: {},
        }
      };
      this.chartData = {
        labels: this.unitedData[0]['time'],
        datasets: [],
      };
      for(let i=0; i<this.unitedData.length; i++){
      // @ts-ignore
        this.chartData.datasets.push({data: this.unitedData[i].data, label: this.chartNames[this.unitedData[i].name], backgroundColor: this.colors[i]})
      }
    }
  }




  // events
  public changeColor() {
    this.currentColor = this.colors[this.colors.indexOf(this.currentColor)+1];
    if(!this.unitedData) {
      this.chartData = {
        labels: this.time,
        datasets: [
          {
            data: this.data,
            backgroundColor: this.currentColor
          },
        ],
      };
    } else {
      this.chartData = {
        labels: this.unitedData[0]['time'],
        datasets: [],
      };
      for(let i=0; i<this.unitedData.length; i++){
        this.chartData.datasets.push({data: this.unitedData[i].data, label: this.unitedData[i].name, backgroundColor: this.colors[i+this.colors.indexOf(this.currentColor)]})
      }
    }

  }

  private findMinValue(arr: number[]): number | undefined {
    if (arr.length === 0) {
      return undefined; // Return null if the array is empty
    }
    return Math.min(...arr);
  }


}

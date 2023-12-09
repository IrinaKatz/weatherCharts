import {Component, Input, OnInit} from '@angular/core';
import {WeatherModel} from "../../../core/charts-data/weather-model";

@Component({
  selector: 'app-charts-block',
  templateUrl: './charts-block.component.html',
  styleUrls: ['./charts-block.component.css']
})
export class ChartsBlockComponent implements OnInit {

  @Input() dataToShow!: WeatherModel;
  @Input() isAllInOne!: boolean;

  singleChartsToShow: {data: number[], time: string[], name: string}[] = [];

  ngOnInit(): void {
    this.singleChartsToShow = [];

    let newLabels:string[] =[];
    if(this.dataToShow) {
      newLabels = this.makeShortLabels(this.dataToShow.time);

      for(let field in this.dataToShow) {
          // @ts-ignore
          if(this.dataToShow[field].length > 0 && field != 'time') {
              // @ts-ignore
              this.createChart(field, this.dataToShow[field], newLabels)
          }
      }
    }
  }

  private makeShortLabels(labels: string[]): string[]{
    let newLabels:string[] = [];
    for(let label of labels) {
      newLabels.push(`${label.slice(8,10)}/${label.slice(11)}`);
    }
    return newLabels;
  }

  createChart(chartName: string, data: number[], time: string[]) {
    this.singleChartsToShow.push({data: data, time: time, name: chartName});
  }

}

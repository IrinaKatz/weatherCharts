import {Component, OnInit} from '@angular/core';
import {ChartsDataService} from "../../../core/charts-data/charts-data.service";
import {map, Observable} from "rxjs";
import {WeatherDTO, WeatherModel} from "../../../core/charts-data/weather-model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  weatherData: WeatherModel = {
    temperature1: [],
    temperature2: [],
    humidity: [],
    windSpeed: [],
    time: []
  };

  allInOneSelected: boolean = false;

  isSelected: boolean = false;

  constructor(private chartsDataService: ChartsDataService) {
  }


  ngOnInit(): void {
  }

  onSelected(event: any) {

    let add: string = new Date(event.range.start).getDay().toString().length === 1 ? '0' : '';
    let dateFrom: string = `${new Date(event.range.start).getFullYear()}-${new Date(event.range.start).getMonth()+1}-${add}${new Date(event.range.start).getDate()}`;
    let dateTo: string = `${new Date(event.range.end).getFullYear()}-${new Date(event.range.end).getMonth()+1}-${add}${new Date(event.range.end).getDate()}`;

    this.getData(event.charts, event.type, dateFrom, dateTo).subscribe();
  }

  private getData(charts: any, type: boolean, dateFrom: string, dateTo: string): Observable<any> {

    this.clearWeatherData();
    this.isSelected = false;

    return this.chartsDataService.getData(dateFrom, dateTo).pipe(map((data: WeatherDTO) => {

      if(charts.temperature1) this.weatherData.temperature1 = data.hourly.temperature_2m;
      if(charts.temperature2) this.weatherData.temperature2 = data.hourly.apparent_temperature;
      if(charts.humidity) this.weatherData.humidity = data.hourly.relative_humidity_2m;
      if(charts.windSpeed) this.weatherData.windSpeed = data.hourly.wind_speed_180m;
      this.weatherData.time = data.hourly.time;
      this.allInOneSelected = type;

      this.isSelected = true;
    }));
  }

  private clearWeatherData() {
    this.weatherData = {
      temperature1: [],
      temperature2: [],
      humidity: [],
      windSpeed: [],
      time: []
    };
  }

}

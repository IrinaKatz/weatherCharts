import {Component} from '@angular/core';
import {ChartsDataService} from "../../../core/charts-data/charts-data.service";
import {map, Observable} from "rxjs";
import {WeatherDTO, WeatherModel} from "../../../core/charts-data/weather-model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  weatherData: WeatherModel = {
    temperature1: [],
    temperature2: [],
    humidity: [],
    windSpeed: [],
    time: []
  };

  allInOneSelected: boolean = false;

  isSelected: boolean = false;
  errorRequest = '';

  constructor(private chartsDataService: ChartsDataService) {}

  onSelected(event: any) {

    let add: string = new Date(event.range.start).getDate().toString().length === 1 ? '0' : '';
    let dateFrom: string = `${new Date(event.range.start).getFullYear()}-${new Date(event.range.start).getMonth()+1}-${add}${new Date(event.range.start).getDate()}`;
    let dateTo: string = `${new Date(event.range.end).getFullYear()}-${new Date(event.range.end).getMonth()+1}-${add}${new Date(event.range.end).getDate()}`;
    if(!event.charts.temperature1 && !event.charts.temperature2 && !event.charts.humidity && !event.charts.windSpeed) {
      this.errorRequest = 'Please select any charts to display';
    }
    else {
      this.getData(event.charts, event.type, dateFrom, dateTo).subscribe({error: err => this.displayError()});
    }
  }

  private getData(charts: any, type: boolean, dateFrom: string, dateTo: string): Observable<any> {

    this.clearWeatherData();
    this.clearError();
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

  displayError() {
    this.errorRequest = 'Something went wrong. Please try to change your request';
  }

  clearError() {
    this.errorRequest = '';
  }
}

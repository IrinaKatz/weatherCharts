import { Component, OnInit } from '@angular/core';
import {ChartsDataService} from "../../../core/charts-data/charts-data.service";
import {map} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {WeatherDTO, WeatherModel} from "../../../core/charts-data/weather-model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  chartsPanelOpenState = false;
  typePanelOpenState = false;
  startDate: string = '2023-12-04';
  endDate: string = '2023-12-08';

  weatherData!: WeatherModel;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private chartsDataService: ChartsDataService) { }

  ngOnInit(): void {
    this.chartsDataService.getData(this.startDate, this.endDate).pipe(map((data: WeatherDTO) => {
      this.weatherData.temperature1 = data.hourly.temperature_2m;
      this.weatherData.temperature2 = data.hourly.apparent_temperature;
      this.weatherData.humidity = data.hourly.relative_humidity_2m;
      this.weatherData.windSpeed = data.hourly.wind_speed_180m;
    })).subscribe();
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {WeatherModel} from "./weather-model";

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {
  private urlBasis: string = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_180m&';

  constructor(private http: HttpClient) { }

  public getData(startDate: string, endDate: string): Observable<WeatherModel> {

    let url = this.urlBasis+`start_date=${startDate}&end_date=${endDate}`;

    return this.http.get<WeatherModel>(url).pipe(map((data:WeatherModel) => {
      console.log(data);
      return data;
    }));
  }

  public hello() {
    console.log('hello')
  }
}

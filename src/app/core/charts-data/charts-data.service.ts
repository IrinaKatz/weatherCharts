import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherDTO} from "./weather-model";

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {
  private urlBasis: string = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_180m&';

  constructor(private http: HttpClient) { }

  public getData(startDate: string, endDate: string): Observable<WeatherDTO> {

    let url = this.urlBasis+`start_date=${startDate}&end_date=${endDate}`;
    return this.http.get<WeatherDTO>(url);
  }

}

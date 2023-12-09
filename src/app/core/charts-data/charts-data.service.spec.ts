import { TestBed } from '@angular/core/testing';

import { ChartsDataService } from './charts-data.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {WeatherDTO} from "./weather-model";
import {HttpClient} from "@angular/common/http";

describe('ChartsDataService', () => {
  let service: ChartsDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChartsDataService]
    });
    service = TestBed.inject(ChartsDataService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data', () => {
    const mockWeatherData: WeatherDTO = {
      hourly: {
        time: ['2021-01-01', '2021-01-02'],
        temperature_2m: [3.4, 2.3],
        apparent_temperature: [3.0, 4.1],
        relative_humidity_2m: [0.8, 0.4],
        wind_speed_180m: [3, 5.5]
      }
    };

    service.getData('2021-01-01', '2021-01-02').subscribe(data => {
      expect(data).toEqual(mockWeatherData); // Check if the service returns the mocked data
    });

    const req = httpTestingController.expectOne('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_180m&start_date=2021-01-01&end_date=2021-01-02');
    expect(req.request.method).toEqual('GET'); // Check if the HTTP request method is 'GET'
    req.flush(mockWeatherData); // Simulate a response with the mock data
  });
});

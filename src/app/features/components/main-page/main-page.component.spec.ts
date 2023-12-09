import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import {ChartsDataService} from "../../../core/charts-data/charts-data.service";
import {WeatherDTO} from "../../../core/charts-data/weather-model";
import {of} from "rxjs";

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let mockChartsDataService: jasmine.SpyObj<ChartsDataService>;

  const mockWeatherData: WeatherDTO = {
    hourly: {
      time: ['2021-01-01', '2021-01-02'],
      temperature_2m: [3.4, 2.3],
      apparent_temperature: [3.0, 4.1],
      relative_humidity_2m: [0.8, 0.4],
      wind_speed_180m: [3, 5.5]
    }
  };

  beforeEach(async () => {
    mockChartsDataService = jasmine.createSpyObj('ChartsDataService', ['getData']);

    mockChartsDataService.getData.and.returnValue(of(mockWeatherData));

    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [{ provide: ChartsDataService, useValue: mockChartsDataService }]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should clear and update weather data on selection', () => {
    const mockEvent = {
      range: { start: new Date(), end: new Date() },
      charts: { temperature1: true, temperature2: false, humidity: true, windSpeed: true },
      type: true
    };
    const mockWeatherData: WeatherDTO = {
      hourly: {
        temperature_2m: [20, 21],
        apparent_temperature: [19, 20],
        relative_humidity_2m: [30, 40],
        wind_speed_180m: [5, 6],
        time: ['2021-01-01', '2021-01-02']
      }
    };

    mockChartsDataService.getData.and.returnValue(of(mockWeatherData));

    component.onSelected(mockEvent);
    expect(component.weatherData.temperature1).toEqual([20, 21]);
    expect(component.weatherData.humidity).toEqual([30, 40]);
    expect(component.weatherData.windSpeed).toEqual([5, 6]);
    expect(component.isSelected).toBeTrue();
  });

  it('should call ChartsDataService with correct parameters', () => {
    // Arrange: Setup mock data and return value
    const mockEvent = {
      range: { start: new Date(2021, 0, 1), end: new Date(2021, 0, 2) },
      charts: { temperature1: true },
      type: false
    };
    mockChartsDataService.getData.and.returnValue(of(mockWeatherData));

    // Act: Call the method that uses the service
    component.onSelected(mockEvent);

    // Assert: Verify the service was called with correct parameters
    expect(mockChartsDataService.getData).toHaveBeenCalledWith('2021-1-01', '2021-1-02');
  });
});

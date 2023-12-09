import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsBlockComponent } from './charts-block.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ChartsBlockComponent', () => {
  let component: ChartsBlockComponent;
  let fixture: ComponentFixture<ChartsBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsBlockComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(ChartsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize singleChartsToShow correctly', () => {
    component.dataToShow = {
      temperature1: [20, 22],
      temperature2: [18, 19],
      humidity: [30, 40],
      windSpeed: [10, 12],
      time: ['2021-01-01T12:00', '2021-01-01T13:00']
    };

    component.ngOnInit();

    expect(component.singleChartsToShow.length).toBeGreaterThan(0);
    expect(component.singleChartsToShow[0].name).toEqual('temperature1');
    expect(component.singleChartsToShow[0].time).toEqual(['01/12:00', '01/13:00']);
  });

  it('should shorten labels correctly', () => {
    const longLabels = ['2021-01-01T12:00', '2021-01-01T13:00'];
    const shortLabels = component.makeShortLabels(longLabels);

    expect(shortLabels).toEqual(['01/12:00', '01/13:00']);
  });

  it('should create and add a chart correctly', () => {
    const chartName = 'testChart';
    const data = [1, 2, 3];
    const time = ['01/12:00', '01/13:00', '01/14:00'];

    component.createChart(chartName, data, time);

    const lastChart = component.singleChartsToShow[component.singleChartsToShow.length - 1];
    expect(lastChart.name).toEqual(chartName);
    expect(lastChart.data).toEqual(data);
    expect(lastChart.time).toEqual(time);
  });
});

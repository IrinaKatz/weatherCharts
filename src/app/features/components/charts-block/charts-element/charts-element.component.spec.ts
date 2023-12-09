import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsElementComponent } from './charts-element.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ChartsElementComponent', () => {
  let component: ChartsElementComponent;
  let fixture: ComponentFixture<ChartsElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsElementComponent],
      // imports: [ChartModule], // Import ng2-charts or similar if required
      schemas: [NO_ERRORS_SCHEMA] // This allows you to ignore elements and attributes you don't recognize

    });
    fixture = TestBed.createComponent(ChartsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize chart data correctly', () => {
    component.data = [1, 2, 3];
    component.time = ['10:00', '11:00', '12:00'];
    component.chartName = 'temperature1';
    component.ngOnInit();

    expect(component.name).toEqual('Temperature');
    expect(component.chartData.labels).toEqual(component.time);
    expect(component.chartData.datasets[0].data).toEqual(component.data);
  });

  it('should correctly change chart color', () => {
    component.data = [1, 2, 3];
    component.time = ['10:00', '11:00', '12:00'];
    component.ngOnInit();

    const initialColor = component.currentColor;
    component.changeColor();

    expect(component.currentColor).not.toEqual(initialColor);
    expect(component.chartData.datasets[0].backgroundColor).toEqual(component.currentColor);
  });

  it('should find the minimum value in an array', () => {
    const result = component.findMinValue([10, 20, 5, 30]);
    expect(result).toEqual(5);
  });

  it('should return undefined for empty array', () => {
    const result = component.findMinValue([]);
    expect(result).toBeUndefined();
  });
});

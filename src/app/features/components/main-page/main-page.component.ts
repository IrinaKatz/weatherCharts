import { Component, OnInit } from '@angular/core';
import {ChartsDataService} from "../../../core/charts-data/charts-data.service";
import {map} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = 'untitled';
  chartsPanelOpenState = false;
  typePanelOpenState = false;
  startDate: string = '2023-12-04';
  endDate: string = '2023-12-08';

  constructor(private chartsDataService: ChartsDataService) { }

  ngOnInit(): void {
    this.chartsDataService.getData(this.startDate, this.endDate).pipe(map(data => {

    })).subscribe();
  }

}

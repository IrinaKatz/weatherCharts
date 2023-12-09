import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-selector-bar',
  templateUrl: './selector-bar.component.html',
  styleUrls: ['./selector-bar.component.css'],
})

export class SelectorBarComponent {

  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  chartsPanelOpenState: boolean = false;
  typePanelOpenState: boolean = false;

  temperature1: FormControl = new FormControl<boolean>(false);
  temperature2: FormControl = new FormControl<boolean>(false);
  humidity: FormControl = new FormControl<boolean>(false);
  windSpeed: FormControl = new FormControl<boolean>(false);
  typeSelected: FormControl = new FormControl<boolean>(false);

  chartsSelected: FormGroup = new FormGroup<any>({
    temperature1: this.temperature1,
    temperature2: this.temperature2,
    humidity: this.humidity,
    windSpeed: this.windSpeed,
  })

  myFilterMin: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-6)
  myFilterMax: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

  rangeSelected: FormGroup = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  setTypeSelected(value: boolean) {
    this.typeSelected.setValue(value);
  }

  setAllValues() {
    this.chartsPanelOpenState = false;
    this.typePanelOpenState = false;
    this.accordion.closeAll();
    this.selected.emit({charts: this.chartsSelected.value, type: this.typeSelected.value, range: this.rangeSelected.value})
  }
}

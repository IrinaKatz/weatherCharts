import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainPageComponent} from "./features/components/main-page/main-page.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, JsonPipe} from "@angular/common";
import {NgChartsModule} from "ng2-charts";
import { SelectorBarComponent } from './features/components/selector-bar/selector-bar.component';
import { ChartsBlockComponent } from './features/components/charts-block/charts-block.component';
import { ChartsElementComponent } from './features/components/charts-block/charts-element/charts-element.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SelectorBarComponent,
    ChartsBlockComponent,
    ChartsElementComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    NgChartsModule.forRoot(),
    MatDividerModule,
    MatRadioModule
  ],
  providers: [
    // {
    //   provide: DateAdapter,
    //   useClass: CustomMomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE],
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

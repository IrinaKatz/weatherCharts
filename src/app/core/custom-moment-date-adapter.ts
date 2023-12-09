// import { Injectable } from '@angular/core';
// import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
// import * as moment from 'moment';
// import 'moment-timezone';
// import {locale, Moment, months} from "moment";
// import {style} from "@angular/animations";
//
// @Injectable()
// export class CustomMomentDateAdapter extends DateAdapter<moment.Moment> {
//   private localeData!: moment.Locale;
//
//   constructor() {
//     super();
//     this.setLocale('en');
//   }
//
//   // Required methods
//   public addCalendarDays(date: moment.Moment, days: number): moment.Moment {
//     return date.clone().add(days, 'days');
//   }
//
//   // Set the locale of the DateAdapter
//   override setLocale(locale: string) {
//     this.localeData = moment.localeData(locale);
//     super.setLocale(locale);
//   }
//
//   // Get the year of the date
//   getYear(date: moment.Moment): number {
//     return date.year();
//   }
//
//   // Get the month of the date (0-indexed)
//   getMonth(date: moment.Moment): number {
//     return date.month();
//   }
//
//   // Get the day of the week
//   getDayOfWeek(date: moment.Moment): number {
//     return date.day();
//   }
//
//   // Get long name for month
//   getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
//     return style === 'long' ? this.localeData.months() : this.localeData.monthsShort();
//   }
//
//   // Get long name for day of the week
//   getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
//     return style === 'long' ? this.localeData.weekdays() : this.localeData.weekdaysShort();
//   }
//
//   // Get the year name for the date
//   getYearName(date: moment.Moment): string {
//     return date.format('YYYY');
//   }
//
//   // Get first day of the week
//   getFirstDayOfWeek(): number {
//     return this.localeData.firstDayOfWeek();
//   }
//
//   // Get number of days in the month
//   getNumDaysInMonth(date: moment.Moment): number {
//     return date.daysInMonth();
//   }
//
//   // Clone the date
//   clone(date: moment.Moment): moment.Moment {
//     return moment(date);
//   }
//
//   // Create date from year, month, and date
//   createDate(year: number, month: number, date: number): moment.Moment {
//     // Moment months are 0-indexed
//     if (month < 0 || month > 11) {
//       throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
//     }
//
//     const result = moment({ year, month, date });
//
//     // If the result isn't valid, the date is invalid
//     if (!result.isValid()) {
//       throw Error(`Invalid date "${date}" for month with index "${month}".`);
//     }
//
//     return result;
//   }
//
//   // Today's date
//   today(): moment.Moment {
//     return moment();
//   }
//
//   // Parse a date from a user-provided value
//   parse(value: any, parseFormat: string | string[]): moment.Moment | null {
//     if (value && typeof value === 'string') {
//       return moment(value, parseFormat);
//     }
//     return value ? moment(value).locale(this.locale) : null;
//   }
//
//   // Format a date for display
//   format(date: moment.Moment, displayFormat: string): string {
//     if (!this.isValid(date)) {
//       throw Error('MomentDateAdapter: Cannot format invalid date.');
//     }
//     return date.format(displayFormat);
//   }
//
//   // Add years
//   addCalendarYears(date: moment.Moment, years: number): moment.Moment {
//     return date.clone().add(years, 'years');
//   }
//
//   // Add months
//   addCalendarMonths(date: moment.Moment, months: number): moment.Moment {
//     return date.clone().add(months, 'months');
//   }
//
//
//   // To ISO 8601
//   toIso8601(date: moment.Moment): string {
//     return date.toISOString();
//   }
//
//   // Checks whether a date is valid
//   isValid(date: moment.Moment): boolean {
//     return date.isValid();
//   }
//
//   // Date instance to Moment
//   override deserialize(value: any): moment.Moment | null {
//     let date;
//     if (value instanceof Date) {
//       date = moment(value);
//     }
//     if (typeof value === 'string') {
//       if (!value) {
//         return null;
//       }
//       date = moment(value);
//     }
//     if (date && this.isValid(date)) {
//       return date;
//     }
//     return super.deserialize(value);
//   }
//
//   // Invalid date
//   invalid(): moment.Moment {
//     return moment.invalid();
//   }
//
//   // Get the date of the month
//   getDate(date: moment.Moment): number {
//     return date.date();
//   }
//
//   getDateNames(): string[] {
//     const dateNames = [];
//     const date = moment();
//
//     // Loop through all the days in a week
//     for (let i = 0; i < 31; i++) {
//       date.date(i + 1); // Set the day of the month
//       dateNames.push(date.format('D')); // Format and push the day number (1-31)
//     }
//
//     return dateNames;
//   }
//
//   isDateInstance(obj: any): boolean {
//     return moment.isMoment(obj);
//   }
// }
//

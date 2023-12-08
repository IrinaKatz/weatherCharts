export interface WeatherDTO {
  hourly: {
    time: string[];
    temperature_2m: number[];
    apparent_temperature: number[];
    relative_humidity_2m: number[];
    wind_speed_180m: number[];
  };
}

export interface WeatherModel {
  temperature1: number[];
  temperature2: number[];
  humidity: number[];
  windSpeed: number[];
}


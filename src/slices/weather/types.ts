export interface Coordinates {
  lat: number;
  long: number;
}
export interface Weather {
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  tenp: number;
  feels_like: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
}
export interface Wind {
  speed: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeather {
    coord: Coordinates;
    weather: Weather;
    main: Main;
    wind: Wind;
    sys: Sys;
    dt: number;
    timezone: number;
    name: string;
}

export interface HourWeather {
    main: string;
    description: string;
    icon: string;
}

export interface Hour {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    wind_speed: number; 
    weather: HourWeather
}
export interface Temp {
    day: number;
}
export interface Daily {
    dt: number;
    sunrise: string;
    sunset: string;
    pressure: number;
    humidity: number;
    wind_speed: number;
    temp: Temp;
    weather: HourWeather;
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../axios";
import { AppThunk } from "../../store";
import { CurrentWeather, ForecastWeather, WeatherState } from "./types";
import { DateTime } from "luxon";

const appId = process.env.REACT_APP_API_KEY;

const initialState: WeatherState = {
  current: null,
  forecast: null,
  unit: "metric"
};

const slice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    currentWeather(state: WeatherState, action: PayloadAction<CurrentWeather>) {
      state.current = action.payload;
    },
    forecastWeather(
      state: WeatherState,
      action: PayloadAction<ForecastWeather>
    ) {
      state.forecast = action.payload;
    },
    changeUnits(state: WeatherState, action: PayloadAction<string>) {
      state.unit = action.payload;
    }
  },
});
export const reducer = slice.reducer;

export const getWeather =
  (city: string, unit: string): AppThunk =>
  async (dispatch) => {
    // Your asynchronous logic here
    try {
      const response = await axios.get<CurrentWeather>(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${appId}`
      );
      if (response.data) {
        const coord = response.data.coord;
        const exclude = "minutely";
        const foreCastResponse = await axios.get<ForecastWeather>(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&units=${unit}&exclude=${exclude}&appid=${appId}`
        );

        dispatch(slice.actions.currentWeather(response.data));
        !!foreCastResponse.data &&
          dispatch(slice.actions.forecastWeather(foreCastResponse.data));
      }
    } catch (error) {
      console.log("An error occured on fetching data", error);
    }
  };

export const formatToLocalTime = (
  secs: number,
  zone: string,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const convertToIcon = (val: string) => {
  return `http://openweathermap.org/img/wn/${val}@2x.png`
}

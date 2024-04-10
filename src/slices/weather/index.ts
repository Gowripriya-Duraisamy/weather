import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "../axios";
import { AppThunk } from "../../store";
import { CurrentWeather, ForecastWeather, WeatherState } from "./types";

const appId = process.env.REACT_APP_API_KEY;

const initialState: WeatherState = {
  current: null,
  forecast: null,
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
  },
});
export const reducer = slice.reducer;

  export const getWeather = (city: string): AppThunk => async (dispatch) => {
    // Your asynchronous logic here
    try {
      const response = await axios.get<CurrentWeather>(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
      );
      if (response.data) {
        const coord = response.data.coord;
        const exclude = "current,minutely";
        const foreCastResponse = await axios.get<ForecastWeather>(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=${exclude}&appid=${appId}`
        );
        
        dispatch(slice.actions.currentWeather(response.data));
        !!foreCastResponse.data &&
          dispatch(slice.actions.forecastWeather(foreCastResponse.data));
      }
    } catch (error) {
      console.log("An error occured on fetching data", error);
    }
  };

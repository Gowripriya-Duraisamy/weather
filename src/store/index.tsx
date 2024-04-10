import {  configureStore, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { reducer as weatherReducer } from "../slices/weather";

export const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, ApplicationState, unknown, PayloadAction<any>>;

export const useSelector: TypedUseSelectorHook<ApplicationState> =
  useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;

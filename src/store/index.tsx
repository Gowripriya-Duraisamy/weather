import { PayloadAction, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { ThunkAction } from "redux-thunk";

export const store = configureStore({
  reducer: {
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
});

export type ApplicationState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, ApplicationState, unknown, PayloadAction>;

export const useSelector: TypedUseSelectorHook<ApplicationState> =
  useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;

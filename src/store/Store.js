import { configureStore } from "@reduxjs/toolkit";
import {WeatherApi} from "../services/WeatherService"


export const store = configureStore({
    reducer: {
        [WeatherApi.reducerPath]: WeatherApi.reducer,
     
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(WeatherApi.middleware),
})
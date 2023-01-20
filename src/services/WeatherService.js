import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY ,BASE_URL } from "../views/Weather-Components/Constant";

export const WeatherApi = createApi({
  reducerPath: "WeatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getTemperature: builder.query({
      query: () => "",
    }),

    getCityAutoComplete: builder.query({
      query: (query) =>
        `/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`,
    }),

    getDailyForecast: builder.query({
      query: (id) => `forecasts/v1/daily/1day/${id}?apikey=${API_KEY}`,
    }),

    getHourlyForecast: builder.query({
      query: (id) => `forecasts/v1/hourly/12hour/${id}?apikey=${API_KEY}`,
    }),
    getlocationsForecast: builder.query({
      query: (id) => `locations/v1/${id}?apikey=${API_KEY}`,
    }),
  
  }),
});
export const {
  useGetTemperatureQuery,
  useGetCityAutoCompleteQuery,
  useGetDailyForecastQuery,
  useGetHourlyForecastQuery,
  useGetlocationsForecastQuery,
} = WeatherApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apikey = "w74RorP4hf7wdUwIUlKNPhRxIa4fEVjW";

export const WeatherApi = createApi({
  reducerPath: "WeatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://dataservice.accuweather.com" }),

  endpoints: (builder) => ({
    getTemperature: builder.query({
      query: () => "",
    }),

    getCityAutoComplete: builder.query({
      query: (query) =>
        `/locations/v1/cities/autocomplete?apikey=${apikey}&q=${query}`,
    }),

    getDailyForecast: builder.query({
      query: (id) => `forecasts/v1/daily/1day/${id}?apikey=${apikey}`,
    }),

    getHourlyForecast: builder.query({
      query: (id) => `forecasts//v1/hourly/12hour/${id}?apikey=${apikey}`,
    }),
  }),
});
export const {
  useGetTemperatureQuery,
  useGetCityAutoCompleteQuery,
  useGetDailyForecastQuery,
  useGetHourlyForecastQuery
} = WeatherApi;

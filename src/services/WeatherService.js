import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query<Pokemon, string>({
        query: (name) => `pokemon/${name}`,
      }),
    }),
  })
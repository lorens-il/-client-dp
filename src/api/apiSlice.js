import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3001"}),
    endpoints: builder => ({
        getFlights: builder.query({
            query: () => "/flights"
        }),
    })
});

export const {useGetFlightsQuery} = apiSlice;
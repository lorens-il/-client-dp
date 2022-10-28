import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3001"}),
    tagTypes: ["listStatus"],
    endpoints: builder => ({
        getStatus: builder.query({
            query: () => "/listStatus",
            providesTags: ["listStatus"]
        }),
        deleteStatus: builder.mutation({
            query: id => ({
                url: `/listStatus/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["listStatus"]
        }),
        getTrainingMaterial: builder.query({
            query: () => "/trainingMaterial",
        }),
        // addPassenger: builder.mutation({
        //     query: value => ({
        //         url: "/success",
        //         method: "POST",
        //         body: value,
        //     }),
        // })
    })
});

export const {
                useGetStatusQuery,
                useDeleteStatusMutation,
                useGetTrainingMaterialQuery                 
} = apiSlice;
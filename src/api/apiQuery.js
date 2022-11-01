import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiQuery = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3001"}),
    tagTypes: ["reparedHardware", "orderedHardware"],
    endpoints: builder => ({
        getStatusRepared: builder.query({
            query: () => "/reparedHardware",
            providesTags: ["reparedHardware"]
        }),
        addStatusRepared: builder.mutation({
            query: newStatusFix => ({
                url: '/reparedHardware',
                method: "POST",
                body: newStatusFix
            }),
            invalidatesTags: ["reparedHardware"]
        }),
        deleteStatusRepared: builder.mutation({
            query: id => ({
                url: `/reparedHardware/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["reparedHardware"]
        }),
        changeStatusRepared: builder.mutation({
            query: ({id, ...values}) => ({
                url: `/reparedHardware/${id}`,
                method: "PUT",
                body: values
            }),
            invalidatesTags: ["reparedHardware"]
        }),

        getStatusOrdered: builder.query({
            query: () => "/orderedHardware",
            providesTags: ["orderedHardware"]
        }),

        getTrainingMaterial: builder.query({
            query: () => "/trainingMaterial",
        })
    })
});

export const {
                useGetStatusReparedQuery,
                useDeleteStatusReparedMutation,
                useAddStatusReparedMutation,
                useChangeStatusReparedMutation,

                useGetStatusOrderedQuery,
                
                useGetTrainingMaterialQuery                 
} = apiQuery;
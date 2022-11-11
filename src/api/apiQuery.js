import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const domains = "domains=ferra.ru,lifehacker.ru,computerra.ru,ixbt.com,overclockers.ru,cnews.ru,rg.ru,mysku.club,hi-tech.mail.ru,habr.com,vz.ru"

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
        addStatusOrdered: builder.mutation({
            query: newStatusOrdered => ({
                url: '/orderedHardware',
                method: "POST",
                body: newStatusOrdered
            }),
            invalidatesTags: ["orderedHardware"]
        }),
        deleteStatusOrdered: builder.mutation({
            query: id => ({
                url: `/orderedHardware/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["orderedHardware"]
        }),
        changeStatusOrdered: builder.mutation({
            query: ({id, ...values}) => ({
                url: `/orderedHardware/${id}`,
                method: "PUT",
                body: values
            }),
            invalidatesTags: ["orderedHardware"]
        }),

        getTrainingMaterial: builder.query({
            query: () => "/trainingMaterial",
        }),
        getNews: builder.query({
            query: () => `https://newsapi.org/v2/everything?q=принтер OR мфу OR (сканер+принтер) OR (сканер+мфу) OR картридж OR тонер&${domains}&apiKey=adcc098530244f92ac18c84a90fa36df`
        })
    })
});

export const {
                useGetStatusReparedQuery,
                useDeleteStatusReparedMutation,
                useAddStatusReparedMutation,
                useChangeStatusReparedMutation,

                useGetStatusOrderedQuery,
                useAddStatusOrderedMutation,
                useDeleteStatusOrderedMutation,
                useChangeStatusOrderedMutation,
                
                useGetTrainingMaterialQuery,
                
                useGetNewsQuery
} = apiQuery;
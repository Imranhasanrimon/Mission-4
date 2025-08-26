import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    tagTypes: ["items",],
    endpoints: (build) => ({
        getItems: build.query({
            query: () => "items",
            providesTags: ['items']
        }),
        addItem: build.mutation({
            query: (body) => ({
                url: "items",
                method: "POST",
                body,
            }),
            invalidatesTags: ['items']
        }),
        updateItem: build.mutation({
            query: ({ id, data }) => ({
                url: `items/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["items"]
        })
    })
})

export const { useGetItemsQuery, useAddItemMutation, useUpdateItemMutation } = itemsApi
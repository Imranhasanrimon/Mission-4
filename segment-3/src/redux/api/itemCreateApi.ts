import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (build) => ({
        getItems: build.query({
            query: () => "items"
        })
    })
})

export const { useGetItemsQuery } = itemsApi
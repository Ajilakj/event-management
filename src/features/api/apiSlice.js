import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bkc-event-management.herokuapp.com/api/' }),
    tagTypes: ['Event'],
    endpoints: builder => ({})
})
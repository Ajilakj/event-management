import { createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import { apiSlice } from "../api/apiSlice";

const EventsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = EventsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEvents: builder.query({
            query: (args) => {
                
                const {keyword,category,location} = args;
  
                return `/events?keyword=${keyword}&category=${category}&location=${location}`;      
                
            } ,
            providesTags: (result, error, arg) => [
                { type: 'Event', id: "LIST" },
                ...result.map(event => ({ type: 'Event', id:event.id }))
            ]
        }),
        getEventsByUserId: builder.query({
            query: id => `/events/?userId=${id}`,
            transformResponse: responseData => {
                let min = 1;
                const loadedEvents = responseData.map(post => {
                    if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                    if (!post?.reactions) post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post;
                });
                return EventsAdapter.setAll(initialState, loadedEvents)
            },
            providesTags: (result, error, arg) => [
                ...result.ids.map(id => ({ type: 'Post', id }))
            ]
        })
    })
})

export const {
    useGetEventsQuery,
    useGetEventsByUserIdQuery,
    useAddNewPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
    useAddReactionMutation
} = extendedApiSlice

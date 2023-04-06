import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../features/api/apiSlice';
import todoReducer from '../features/events/todoSlice';
import globalReducer from '../features/events/GlobalSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        todos: todoReducer,
        global:globalReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './slices/AuthSlice';
import eventsReducer from './slices/EventSlice'

export const Store = configureStore({
    reducer:{
        authUser :userAuthReducer,
        EventsData : eventsReducer
    }
})
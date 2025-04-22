import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './slices/AuthSlice';
import eventsReducer from './slices/EventSlice'
import NotificationToastReducer from "./slices/NotificationToast";

export const Store = configureStore({
    reducer:{
        authUser :userAuthReducer,
        EventsData : eventsReducer,
        NotifyAction:NotificationToastReducer
    }
})
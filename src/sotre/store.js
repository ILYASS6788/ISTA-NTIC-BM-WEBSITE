import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './slices/AuthSlice';

export const Store = configureStore({
    reducer:{
        authUser :userAuthReducer
    }
})
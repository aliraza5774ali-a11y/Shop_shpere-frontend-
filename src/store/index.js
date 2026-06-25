import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './slice/Uislice.js'

export const store = configureStore({
    reducer : {
        ui : uiReducer
    }
})
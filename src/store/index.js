import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './slice/Uislice.js'
import cartReducer from './slice/cartSlice'
import authReducer from './slice/authSlice'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer,
        auth: authReducer,
    }
})
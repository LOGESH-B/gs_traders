

import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./features/homeSlice"
import catagoryReducer from "./features/catagorySlice"
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        catagory: catagoryReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunk)
    }

})
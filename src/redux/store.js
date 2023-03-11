

import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./features/homeSlice"
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        home: homeReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunk)
    }

})
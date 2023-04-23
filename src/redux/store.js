

import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./features/homeSlice"
import catagoryReducer from "./features/catagorySlice"
import branchReducer from "./features/branchSlice"
import productReducer from "./features/productSlice"
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        catagory: catagoryReducer,
        branch: branchReducer,
        product: productReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({serializableCheck: false,}).concat(thunk)
    }

})
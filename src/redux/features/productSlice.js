
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newProduct, editProduct } from '../api'
// import { newProduct } from '../api'

const initialState = {
    success: false,
    pending: true,
    error: false,
    msg: ""
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        resetproduct: (state, action) => {
            // console.log("on reducer2")
            return { ...state, success: false, pending: true, error: false, msg: "" }
            // console.log(featchConstant());
        },
        newproduct: (state, action) => {
            console.log(action.payload.type)
            switch (action.payload.type) {
                case "API_SUCCESS": {
                    console.log("product success");
                    return state = { ...state, success: true, pending: false, msg: action.payload.data.body };
                }
                case "API_PENDING": {
                    console.log("product pending");
                    return state = { ...state, pending: true };
                }
                case "API_ERROR": {
                    console.log("product rejected");
                    console.log(action.message);
                    return state = { ...state, pending: false, error: true, msg: action.message };
                }
            }
        },
        editproduct: (state, action) => {
            // return state = { ...state, success: true, pending: false, msg: action.payload };
            switch (action.payload.type) {
                case "API_SUCCESS": {
                    console.log("edit success");
                    return state = { ...state, success: true, pending: false, msg: "" };
                }
                case "API_PENDING": {
                    console.log("edit pending");
                    return state = { ...state, pending: true };
                }
                case "API_ERROR": {
                    console.log("edit rejected");
                    console.log(action.message);
                    return state = { ...state, pending: false, error: true, msg: action.message };
                }
            }
        },
        deleteproduct: (state, action) => {
            switch (action.payload.type) {
                case "API_SUCCESS": {
                    console.log("delete success");
                    return state = { ...state, success: true, pending: false, msg: "" };
                }
                case "API_PENDING": {
                    console.log("delete pending");
                    return state = { ...state, pending: true };
                }
                case "API_ERROR": {
                    console.log("delete rejected");
                    console.log(action.message);
                    return state = { ...state, pending: false, error: true, msg: action.message };
                }
            }
        }

    },
    // extraReducers: (builder) => {
    // //new product
    //     builder.addCase(newProduct.fulfilled, (state, action) => {
    //         console.log("product fulfilled");
    //         // console.log(action.payload.data.body)
    //         return state = { ...state, success: true, pending: false, msg: action.payload.data.body };
    //     })
    //     builder.addCase(newProduct.pending, (state, action) => {
    //         console.log("product pending");
    //         return state = { ...state, pending: true };
    //     })
    //     builder.addCase(newProduct.rejected, (state, action) => {
    //         console.log("product rejected");
    //         console.log(action.error.message);
    //         return state = { ...state, pending: false, error: true, msg: action.error.message };
    //     })
    //     //edit product
    //     builder.addCase(editProduct.fulfilled, (state, action) => {
    //         console.log("editproduct fulfilled");
    //         console.log(action.payload.data.body)
    //         return state = { ...state, success: true, pending: false, msg: action.payload.data.body };
    //     })
    //     builder.addCase(editProduct.pending, (state, action) => {
    //         console.log("editproduct pending");
    //         return state = { ...state, pending: true };
    //     })
    //     builder.addCase(editProduct.rejected, (state, action) => {
    //         console.log("editproduct rejected");
    //         console.log(action.error.message);
    //         return state = { ...state, pending: false, error: true, msg: action.error.message };
    //     })
    // }

})

export const { resetproduct, newproduct, editproduct, deleteproduct } = productSlice.actions
export default productSlice.reducer
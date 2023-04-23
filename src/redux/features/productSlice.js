
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newProduct } from '../api'
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
        resetproduct: (state) => {
            // console.log("on reducer2")
            return { ...state, success: false, pending: true, error: false, msg: "" }
            // console.log(featchConstant());
        },
        newproduct: (state, action) => {
            // return state;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(newProduct.fulfilled, (state, action) => {
            console.log("product fulfilled");
            // console.log(action.payload.data.body)
            return state = { ...state, success: true, pending: false, msg: action.payload.data.body };
        })
        builder.addCase(newProduct.pending, (state, action) => {
            console.log("product pending");
            return state = { ...state, pending: true };
        })
        builder.addCase(newProduct.rejected, (state, action) => {
            console.log("product rejected");
            console.log(action.error.message);
            return state = { ...state, pending: false, error: true, msg: action.error.message };

        })
    }

})

export const { resetproduct, newproduct } = productSlice.actions
export default productSlice.reducer
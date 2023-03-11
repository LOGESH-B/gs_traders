
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featchConstant } from '../api'

const initialState = {
    companylogo: "",
    companyName: "",
    about: "",
    owner: "",
    address: "",
    contact: 0,
    visitedCount: 0
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        constant: (state) => {
            console.log("on reducer");

            // console.log(featchConstant());
        }
    },
    extraReducers: (builder) => {
        builder.addCase(featchConstant.fulfilled, (state, action) => {
            console.log("fulfilled");
            console.log(action.payload);
            return state = { ...state, ...action.payload };


        })
        builder.addCase(featchConstant.rejected, (state, action) => {
            console.log("rejected");
            console.log(action.error.message);
        })
    }

})

export const { constant } = homeSlice.actions
export default homeSlice.reducer
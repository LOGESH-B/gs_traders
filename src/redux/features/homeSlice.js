
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featchConstant } from '../api'

const initialState = null

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
            console.log("constant fulfilled");
            // console.log(action.payload);
            return state = { ...state, ...action.payload };

        })
        builder.addCase(featchConstant.rejected, (state, action) => {
            console.log("constant rejected");
            console.log(action.error.message);
        })
    }

})

export const { constant } = homeSlice.actions
export default homeSlice.reducer
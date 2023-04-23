
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featchCatagory } from '../api'

const initialState = []

const catagorySlice = createSlice({
    name: 'catagory',
    initialState,
    reducers: {
        catagory: (state) => {
            console.log("on reducer");

            // console.log(featchConstant());
        }
    },
    extraReducers: (builder) => {
        builder.addCase(featchCatagory.fulfilled, (state, action) => {
            console.log("catagory fulfilled");
            // console.log(action.payload);
            return state = [...action.payload ];


        })
        builder.addCase(featchCatagory.rejected, (state, action) => {
            console.log("catagory rejected");
            console.log(action.error.message);
        })
    }

})

export const { constant } = catagorySlice.actions
export default catagorySlice.reducer
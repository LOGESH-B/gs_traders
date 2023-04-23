
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featchBranch } from '../api'

const initialState = []

const branchSlice = createSlice({
    name: 'branch',
    initialState,
    reducers: {
        getbranch: (state) => {
           
        }
    },
    extraReducers: (builder) => {
        builder.addCase(featchBranch.fulfilled, (state, action) => {
            console.log("branch fulfilled");
            // console.log(action.payload);
            return state = [...action.payload ];
        })
        builder.addCase(featchBranch.rejected, (state, action) => {
            console.log("branch rejected");
            console.log(action.error.message);
        })
    }

})

export const { getbranch } = branchSlice.actions
export default branchSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featchConstant } from '../api'

const initialState = {
    success: false,
    pending: true,
    error: false,
    msg: ""
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
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
    }

})

export const { login } = loginSlice.actions
export default loginSlice.reducer
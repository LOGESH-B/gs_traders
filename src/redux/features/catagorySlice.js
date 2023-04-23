
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featchCatagory } from '../api'

const initialState = []

const catagorySlice = createSlice({
    name: 'catagory',
    initialState,
    reducers: {
        getcatagory: (state) => {

            // console.log(featchConstant());
        },
        setcatagory:(state,action)=>{
            // console.log("changed")
            var currstate=JSON.parse(JSON.stringify(state));
            currstate.map(e=>{
                if(e.name=="Bricks"){
                    return e.products.push(action.payload)
                }
                return e;
            })
            // console.log(currstate);
            return state = [...currstate]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(featchCatagory.fulfilled, (state, action) => {
            console.log("catagory fulfilled");
            return state = [...action.payload ];
        })
        builder.addCase(featchCatagory.rejected, (state, action) => {
            console.log("catagory rejected");
            console.log(action.error.message);
        })
    }

})

export const { getcatagory, setcatagory } = catagorySlice.actions
export default catagorySlice.reducer
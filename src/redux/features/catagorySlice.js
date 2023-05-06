
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { featchCatagory } from '../api'

const initialState = []

const catagorySlice = createSlice({
    name: 'catagory',
    initialState,
    reducers: {
        getcatagory: (state, action) => {
            console.log("on category reducer");
            return state = [...action.payload];
            // console.log(featchConstant());
        },
        updatecategory: (state, action) => {
            console.log("On update slice");
            var currstate = JSON.parse(JSON.stringify(state));
            currstate.map(e => {
                if (e.name == action.payload.from) {
                    e.products = e.products.map(ele => {
                        if (ele._id == action.payload.id) {
                            return action.payload.data.body
                        }
                        return ele;

                    })
                    return e;
                }
                return e;
            })
            return state = [...currstate];

        },
        setcatagory: (state, action) => {
            var currstate = JSON.parse(JSON.stringify(state));
            console.log(action.payload.catagory)
            currstate.map(e => {
                if (e.name == action.payload.catagory) {
                    return e.products.push(action.payload.data)
                }
                return e;
            })
            console.log(currstate);
            return state = [...currstate]
        },
        deleteproductcatagory: (state, action) => {
            var currstate = JSON.parse(JSON.stringify(state));
            currstate.map(e => {
                if (e.name == action.payload.from) {
                    e.products = e.products.filter(e => e._id != action.payload.id)
                    return e;
                }
                return e;
            })
            console.log(currstate);
            return state = [...currstate]
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(featchCatagory.fulfilled, (state, action) => {
    //         console.log("catagory fulfilled");
    //         return state = [...action.payload ];
    //     })
    //     builder.addCase(featchCatagory.rejected, (state, action) => {
    //         console.log("catagory rejected");
    //         console.log(action.error.message);
    //     })
    // }

})

export const { getcatagory, setcatagory, updatecategory, deleteproductcatagory } = catagorySlice.actions
export default catagorySlice.reducer
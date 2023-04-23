import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = "http://localhost:3001/";

const Axios = axios.create({ baseURL: baseUrl });

export const featchConstant = createAsyncThunk("home/constant", async () => {
    const constants = await Axios.get("/api/constant");
    // console.log(constants);
    return constants?.data[0]
})

export const featchCatagory = createAsyncThunk("catagory/catagory", async () => {
    const catagory = await Axios.get("/api/catagory");
    // console.log(catagory.data);
    return catagory?.data
})

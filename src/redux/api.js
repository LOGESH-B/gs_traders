import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = "http://localhost:3001/";

const Axios = axios.create({ baseURL: baseUrl });

export const featchConstant = createAsyncThunk("home/constant", async () => {
    const constants = await Axios.get("/constant");
    console.log(constants);
    return constants?.data[0]
})

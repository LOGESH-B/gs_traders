import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = "http://localhost:3001/";

const Axios = axios.create({ baseURL: baseUrl });

//GET

export const featchConstant = createAsyncThunk("home/constant", async () => {
    const constants = await Axios.get("/api/constant");
    // console.log(constants);
    return constants?.data[0]
})

export const featchCatagory = createAsyncThunk("catagory/getcatagory", async () => {
    const catagory = await Axios.get("/api/catagory");
    // console.log(catagory.data);
    return catagory?.data
})

export const featchBranch = createAsyncThunk("branch/getbranch", async () => {
    const branch = await Axios.get("/api/branch");
    // console.log(branch.data);
    return branch?.data
})

//POST

export const newProduct = createAsyncThunk("product", async (data) => {
    // console.log(data);
    const product = await Axios.post("/api/catagory/product/add",(data));
    // console.log(product);
    return product

    
})


import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = "http://localhost:3001/";

const Axios = axios.create({ baseURL: baseUrl });

//GET

export const featchConstant = async () => {
    const constants = await Axios.get("/api/constant");
    return constants?.data[0]
}

export const featchCatagory = async () => {
    const catagory = await Axios.get("/api/catagory");
    // console.log(catagory.data);
    return catagory?.data
}

export const featchBranch = async () => {
    const branch = await Axios.get("/api/branch");
    // console.log(branch.data);
    return branch?.data
}

//POST

export const newProduct = async (data) => {
    console.log("On ap9i");
    const product = await Axios.post("/api/catagory/product/add", (data));
    console.log(product);
    return product?.data


}

export const editProduct = async (data) => {

    const editproduct = await Axios.post("/api/catagory/product/edit", (data));
    // console.log(product);
    return editproduct?.data
}
export const deleteProduct = async (data) => {

    const editproduct = await Axios.post("/api/catagory/product/delete", (data));
    // console.log(product);
    return editproduct?.data
}


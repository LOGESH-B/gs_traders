import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";

import './ModalForm.css'
import { newProduct } from "../../../redux/api";
import { newproduct, resetproduct } from "../../../redux/features/productSlice";
import { setcatagory } from "../../../redux/features/catagorySlice";
import { useNavigate } from "react-router-dom";
function ModalForm(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(state => state.product);
    useEffect(() => {
        if (status.success) {
            dispatch(setcatagory(status.msg));
            // navigate(`/${props.from}`);
            document.getElementById("reset").click()
            props.setCloseModal(props.id);
        }

    }, [status])

    const addinput = (ele) => {
        if (ele == "img") {
            const input = document.getElementById(ele);
            var inputele = document.createElement("input");
            inputele.type = "text";
            inputele.name = "image";
            inputele.className = "form-control my-2"
            inputele.placeholder = "Image Url"
            inputele.id = "duplicate"
            input.appendChild(inputele);
        } else {
            const input = document.getElementById(ele);
            var inputele = document.createElement("input");
            inputele.type = "text";
            inputele.name = "vedio";
            inputele.className = "form-control my-2"
            inputele.placeholder = "Vedio Url"
            inputele.id = "duplicate"
            input.appendChild(inputele);
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        dispatch(resetproduct());
        var obj = {
            name: data.get("name"),
            catagory: data.get("catagory"),
            description: data.get("description"),
            price: data.get("price"),
            img: data.getAll("image"),
            vedio: data.getAll("vedio"),
            isAvailable: data.get("isavailable"),
            lastUpdate: new Date().toISOString()
        }
        dispatch(newProduct((obj)));
        document.getElementById("reset").click()
        console.log(obj)
    }


    return (
        <div className="outerform-modeldiv" id={props.id} style={{ display: "none" }}>
            <div className="modalformContainer" style={{ zIndex: "1" }}>
                <div className="contentmodalform">
                    {status.success ? <h1>Success</h1> : status.pending ? <h1>Pending</h1> : <h1>Error:{status.msg}</h1>}
                    <div className="closeformbutton pe-3"
                        onClick={() => {
                            props.setCloseModal(props.id);
                        }}
                    >
                        <FaTimesCircle />
                    </div>
                    <div>
                        <h3 className="text-center" style={{ color: 'orangered', textTransform: 'uppercase', paddingTop: '2%' }}>{props.name}</h3>
                        <div className="container">
                            <form onSubmit={(e) => handelSubmit(e)}>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <label htmlFor="name" className="form-label">Product Name</label>
                                        <input type="text" className="form-control" name="name" id="name" aria-describedby="product name" required />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label htmlFor="category" className="form-label">Select Catagory</label>
                                        <select className="form-select" name="catagory" id="category" required>
                                            {props.category.length == 1 ? <option value={props.category[0].name} selected >{props.category[0].name}</option> :
                                                props.category.map(e => {
                                                    return <option value={e.name}>{e.name}</option>
                                                })}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6  mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <div className="input-group">
                                            <span class="input-group-text">Rs</span>
                                            <input type="number" name="price" className="form-control" id="price" aria-describedby="product name" required />
                                        </div>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label htmlFor="isavailable" className="form-label">Is Available</label>
                                        <select className="form-select" name="isavailable" id="isavailable" required>
                                            <option value="true" selected>Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="image" className="form-label">Image <span className="pl-5 fs-5 fw-bold" onClick={() => addinput('img')}>+</span></label>
                                    <div id="img">
                                        <input type="text" className="form-control" name="image" id="image" required />
                                    </div>
                                </div>
                                <div className=" mb-3">
                                    <label htmlFor="Vedio" className="form-label">Vedio <span className="pl-5 fs-5 fw-bold" onClick={() => addinput('vedios')}>+</span></label>
                                    <div id="vedios">
                                        <input type="text" className="form-control" name="vedio" id="vedio" />
                                    </div>
                                </div>

                                <label htmlFor="description" name="description" className="form-label">Description</label>
                                <textarea className="form-control" name="description" placeholder="About Product..." id="description" cols="30" rows="7" required></textarea>

                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="reset" id="reset" className="btn btn-primary">reset</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalForm;
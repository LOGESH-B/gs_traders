import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimesCircle } from "react-icons/fa";

//redux
import { editProduct } from "../../../redux/api";
import { newproduct, resetproduct, editproduct } from "../../../redux/features/productSlice";
import { setcatagory, updatecategory } from "../../../redux/features/catagorySlice";

//css
import './ModalEditForm.css'

const ModalEditForm = (props) => {

  const dispatch = useDispatch();
  //store
  const status = useSelector(state => state.product);

  //state
  const [name, setname] = useState(props.data.name);
  const [catagory, setcatagory] = useState(props.data.catagory);
  const [price, setprice] = useState(props.data.price);
  const [offer, setoffer] = useState(props.data.offer);
  const [description, setdescription] = useState(props.data.description);
  const [isavailable, setisavailable] = useState(props.data.isAvailable);

  //late store
  const catagorydata = useSelector(state => state.catagory).filter(e => e.name == catagory)[0];

  //api calls
  const api = async (obj) => {
    console.log("update api call");
    try {
      dispatch(editproduct({ type: "API_PENDING" }));
      const newdata = await editProduct(obj);
      dispatch(editproduct({ type: "API_SUCCESS", data: newdata }));
      dispatch(updatecategory({ data: newdata, id: props.id, from: props.from }));
    } catch (e) {
      console.log(e)
      dispatch(editproduct({ type: "API_ERROR", message: e.message }))
    }
  }
  useEffect(() => {
    if (status.success) {
      // navigate(`/${props.from}`);
      document.getElementById("reset").click()
      props.setCloseModal(props.id + "-edit");
    }

  }, [status])


  //dynamic inputs
  const addinput = (ele) => {
    console.log(ele)
    if (ele == "img-edit") {
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

  //sumbit func

  const handelSubmit = (e) => {
    e.preventDefault();
    var data = new FormData(e.target);
    dispatch(resetproduct());
    var obj = {
      _id: props.id,
      name: data.get("name"),
      catagory: data.get("catagory"),
      description: data.get("description"),
      price: data.get("price"),
      img: data.getAll("image"),
      vedio: data.getAll("vedio"),
      offer: data.get("offer"),
      isAvailable: data.get("isavailable"),
      lastUpdate: new Date().toISOString()
    }
    api(obj);
    console.log(obj)
  }
  return (
    <div className="outer-editform-modeldiv" id={props.id + "-edit"} style={{ display: "none" }}>
      <div className="modal-editformContainer" style={{ zIndex: "1" }}>
        <div className="contentmodal-editform">

          {/* api call status */}
          {status.success ? <h1>Success</h1> : status.pending ? <h1>Pending</h1> : <h1>Error:{status.msg}</h1>}

          <div className="close-editformbutton pe-3"
            onClick={() => {
              props.setCloseModal(props.id + "-edit");
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
                    <input type="text" className="form-control" name="name" id="name" aria-describedby="product name" value={name} onChange={(e) => setname(e.target.value)} required />
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="category" className="form-label">Select Catagory</label>
                    <select className="form-select" name="catagory" id="category" value={catagory} onChange={(e) => setcatagory(e.target.value)} required>
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
                      <input type="number" name="price" className="form-control" id="price" aria-describedby="product name" value={price} onChange={(e) => setprice(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="isavailable" className="form-label">Is Available</label>
                    <select className="form-select" name="isavailable" id="isavailable" value={isavailable} onChange={(e) => setisavailable(e.target.value)} required>
                      <option value="true" >Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
                <div className=" mb-3">
                  <label htmlFor="image" className="form-label">Image <span className="pl-5 fs-5 fw-bold" onClick={() => addinput('img-edit')}>+</span></label>
                  <div id="img-edit">
                    {props.data.img.map(e => <input type="text" className="form-control" name="image" id="image-edit" value={e} required />)}
                  </div>
                </div>
                <div className=" mb-3">
                  <label htmlFor="Vedio" className="form-label">Vedio <span className="pl-5 fs-5 fw-bold" onClick={() => addinput('vedios-edit')}>+</span></label>
                  <div id="vedios-edit">
                    {props.data.vedio.map(e => <input type="text" className="form-control" name="vedio" id="vedio-edit" value={e} />)}
                  </div>
                </div>
                <div className="col mb-3">
                  <label htmlFor="offer" className="form-label">Offer Description {"(If no Offer write => NO)"}</label>
                  <input type="text" className="form-control" name="offer" id="offer" value={offer} onChange={(e) => setoffer(e.target.value)} placeholder="If no Offer write => NO" required />
                </div>
                <label htmlFor="description" name="description" className="form-label">Description</label>
                <textarea className="form-control" name="description" placeholder="About Product..." id="description" cols="30" rows="7" value={description} onChange={(e) => setdescription(e.target.value)} required></textarea>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default ModalEditForm

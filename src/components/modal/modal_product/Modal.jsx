import React from "react";
import { FaTimesCircle, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

import './Modal.css'
import { Link } from "react-router-dom";
function Modal(props) {

  return (
    <div className="outer-modeldiv" id={props.id} style={{ display: "none" }}>

      <div className="modalContainer" style={{ zIndex: "1" }}>
        <div className="contentmodal">
          <div>
            <div className="closebutton pe-3"
              onClick={() => {
                props.setCloseModal(props.id);
              }}
            >
              <FaTimesCircle />
            </div>
            <div className="closebutton pe-3"
              onClick={() => {
                props.setCloseModal(props.id);
              }}
            >
              <FaRegEdit />
            </div>
            <div className="closebutton pe-3"
              onClick={() => {
                props.setCloseModal(props.id);
              }}
            >
              <FaRegTrashAlt />
            </div>
          </div>

          <div>
            <h3 style={{ color: 'orangered', textTransform: 'uppercase', paddingTop: '2%' }}>{props.data.name}</h3>
          </div>

          <div style={{ marginTop: '4%' }} className="row p-3 ">
            <div className="col-lg-6">
              <img className="modalimg" src={props.data.img} alt="no img" />

            </div>
            <div style={{ textAlign: 'justify ' }} className="col-lg-6 pt-5">
              <table className="table table-stripped table-hover text-center table-responsive">
                <tbody>
                  <tr>
                    <th>Availability</th>
                    <td>{props.data.isAvailable ? <span className="fs-4 fw-bold" style={{ color: 'green' }}>&#10003;</span> : <span className="fs-4 fw-bold" style={{ color: 'red' }}>&#128473;</span>}</td>
                  </tr>
                  <tr>
                    <th>Offer</th>
                    <td>{props.data.offer == "No" ? <span >No Offer Available</span> : <>{props.data.offer}</>}</td>
                  </tr>
                  <tr>
                    <th>Vedio</th>
                    <td>{props.data.vedio.length == 0 ? <span>-</span> : props.data.vedio.map((e) => <Link to={e} target="_blank">{e}<br /></Link>)}</td>
                  </tr>
                  <tr>
                    <th className="fs-3">Price</th>
                    <td className="fs-5 fw-bold " style={{ color: 'rgb(255, 127, 7)' }}> Rs {props.data.price} .aprx</td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>
          <div style={{ textAlign: 'justify ' }} className="px-5 pt-5">
            <div className="row d-flex justify-content-between">
              <p className="col-12 col-md-9 fs-2 mb-0 fw-bold" style={{ color: 'rgb(255, 127, 7)' }}>Product Description</p>
              <small className="col-md-3 align-self-end" style={{ color: 'grey' }}><span>LastUpdated:</span>{new Date(props.data.lastUpdate).toLocaleString()}</small>
            </div>
            <hr style={{ color: 'rgb(255, 127, 7)' }} />
            <h5 className="my-5">
              {props.data.description}
            </h5>
          </div>
          <div className='bookbtn pt-2 mt-3'>BOOK NOW</div>
        </div>
      </div>
    </div>

  );
}

export default Modal;
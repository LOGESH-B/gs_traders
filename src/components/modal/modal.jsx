import React from "react";
import { FaTimesCircle } from "react-icons/fa";

import './modal.css'
function Modal(props) {

  return (
    <div className="outer-modeldiv" id={props.id} style={{display:"none"}}>
      
    
    <div className="modalContainer"  style={{  zIndex: "1" }}>
      <div className="contentmodal">

      
      <div className="closebutton pe-3"
        onClick={() => {
          props.setCloseModal(props.id);
        }}
      >
        <FaTimesCircle />

      </div>
      <div>
        <h3 style={{ color: 'orangered', textTransform: 'uppercase', paddingTop: '2%' }}>{props.data.bname}</h3>
      </div>

      <div style={{ marginTop: '4%' }} className="row p-3 ">
        <div className="col-lg-6">
          <img className="modalimg" src={props.data.img} alt="no img" />

        </div>
        <div style={{ textAlign: 'justify ' }} className="col-lg-6 pt-5">
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi repudiandae iste quos culpa animi nam dolorum tempore quod pariatur error!

          </h5>


        </div>

      </div>
      <div style={{ textAlign: 'justify', paddingLeft: '15%' }} className="row ">
        <div style={{ display: 'flex' }}>
          <h5 style={{ color: 'orange' }}>Available :</h5><span>300</span>

        </div>
        <div style={{ display: 'flex' }}>
          <h5 style={{ color: 'orange' }}>Price Range :</h5> <span>300 to 400</span>


        </div>


      </div>


    </div>
    </div>
    </div>

  );
}

export default Modal;
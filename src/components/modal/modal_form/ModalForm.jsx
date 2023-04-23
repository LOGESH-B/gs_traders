import React from "react";
import { FaTimesCircle } from "react-icons/fa";

import './ModalForm.css'
function ModalForm(props) {

    return (
        <div className="outerform-modeldiv" id={props.id} style={{ display: "none" }}>
            <div className="modalformContainer" style={{ zIndex: "1" }}>
                <div className="contentmodalform">
                    <div className="closeformbutton pe-3"
                        onClick={() => {
                            props.setCloseModal(props.id);
                        }}
                    >
                        <FaTimesCircle />
                    </div>
                    <div>
                        <h3 style={{ color: 'orangered', textTransform: 'uppercase', paddingTop: '2%' }}>{props.name}</h3>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalForm;
import React, { useState } from 'react'
import './Banner1.css'

//images


import { FaPhoneAlt } from "react-icons/fa";

const Banner1 = (props) => {
    const [branch, setbranch] = useState(props.branches);
    // console.log(branch)

    return (
        <div>
            <div className='hero' >
                <div className='cardfront pt-5'>
                    <h1 className='fw-bold'> <span className='helo' >Hello</span> we are the GS groups</h1>
                    <div className='line'>
                        {branch && branch.map((e, i) => {
                            return <div key={i} >
                                <div className='d-flex justify-content-around align-items-center'>
                                    <h6>{e}</h6><span className='fs-3 ps-3'>&rarr;</span>
                                    
                                </div>
                                <hr className='mt-0'/>
                            </div>
                        })}
                        {/* <small>Largest suppliers in sivagiri</small>
                        <hr />
                        <small>Largest suppliers in sivagiri</small>
                        <hr />
                        <small>Largest suppliers in sivagiri</small>
                        <hr /> */}
                    </div>
                    <div className='row mail'>
                        <div className='col-8 m'>
                            Enter your Mail
                        </div>
                        <div className='col-4 m1'>
                            Go Mail
                        </div>
                    </div>

                    <div style={{ marginLeft: '50%' }}>
                        or
                    </div>
                    <div className='number'>
                        <FaPhoneAlt />
                        <small> Call us at {props.phn}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1

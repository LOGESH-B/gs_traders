import React from 'react'
import './Banner1.css'

//images


import { FaPhoneAlt } from "react-icons/fa";

const Banner1 = () => {
    return (
        <div>
            <div className='hero' >
                <div className='cardfront pt-5'>
                    <h1 className='fw-bold'> <span className='helo' >Hello</span> we are the GS groups</h1>
                    <div className='line'>
                        <small>Largest suppliers in sivagiri</small>
                        <hr />
                        <small>Largest suppliers in sivagiri</small>
                        <hr />
                        <small>Largest suppliers in sivagiri</small>
                        <hr />
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
                        <small> call us at 123456789</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1

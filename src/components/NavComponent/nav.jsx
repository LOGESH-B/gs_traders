import React from 'react'
import './nav.css'
import { FaPhoneAlt, FaMailBulk, FaBars,FaTimesCircle } from "react-icons/fa";
import { useState } from 'react';


function Nav(props) {


    const [togs, settogs] = useState(false);
  console.log(typeof props.w)


    return (
        <>

            <div className='abovenavd d-flex fs-6'>
                <div className='abovenavd1'>
                    <FaPhoneAlt />
                    <small>9597649181</small>
                    <small>|</small>
                    <FaMailBulk />
                    <small>gstraders@gmail.com</small>
                </div>
            </div>
            <div className='nav'>
                <div className='navcontent1'>
                    <img style={{width:props.w}} className='logo' src={props.img} alt={props.img} />
                </div>
                <div className=" navcontent" >
                    <div className='content'>
                        <a className='h' style={{ fontSize: 'medium' }}>HOME</a>
                        <a className='h' style={{ fontSize: 'medium' }}>ABOUT</a>
                        <a className='h' style={{ fontSize: 'medium' }}>PRODUCTS</a>


                    </div>

                    <div className='button'>
                        <span className='pe-4'>Book Now</span><span className='fs-1 mb-1'>&rarr;</span>
                    </div>
                </div>

                <div onClick={() => { settogs(!togs) }} className='toggle'>
                   {togs? <FaTimesCircle/> :<FaBars /> }


                </div>
            </div>
            {togs ? <div className='dropdown'>

                <li> <a className='h' style={{ fontSize: 'medium' ,color:'white' }}>HOME</a></li>
                <li> <a className='h' style={{ fontSize: 'medium' ,color:'white' }}>ABOUT</a></li>
                <li><a className='h' style={{ fontSize: 'medium' ,color:'white' }}>PRODUCTS</a></li>
                <li><div className='button1'>
                    <span className='pe-4'>Book Now</span><span className='fs-1 mb-1'>&rarr;</span>
                </div></li>
            </div>
                : <div></div>
            }
        </>

    )




}


export default Nav;

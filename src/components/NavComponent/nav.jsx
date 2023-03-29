import React from 'react'
import './nav.css'
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import logo from '../../assets/logo\'s/GS-logo.png'

function Nav() {
    return (
        <>

            <div className='abovenavd d-flex fs-6'>
                <FaPhoneAlt />
                <small>9597649181</small>
                <small>|</small>
                <FaMailBulk />
                <small>gstraders@gmail.com</small>
            </div>

            <div className='navfordesk'>
                <div className='navcontent1'>
                    <img className='logo' src={logo} alt="" />
                </div>

                
                <div  class=" navcontent" >
                    <div className='content'>
                        <a className='h' style={{ fontSize: 'medium' }}>HOME</a>
                        <a className='h' style={{ fontSize: 'medium' }}>ABOUT</a>
                        <a className='h' style={{ fontSize: 'medium' }}>PRODUCTS</a>


                    </div>

                    <div className='button'>
                        <span className='pe-4'>Book Now</span><span className='fs-1 mb-1'>&rarr;</span>
                    </div>


                </div>

            </div>

          

            


        </>

    )
}

export default Nav;

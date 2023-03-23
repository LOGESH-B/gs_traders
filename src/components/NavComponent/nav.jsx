import React from 'react'
import './nav.css'
import {  FaPhoneAlt,FaMailBulk} from "react-icons/fa";
import logo from '../assets/images/nav-logo.png'

function Nav() {
    return (
        <>

        <div className='abovenavd d-flex fs-6'>
            <FaPhoneAlt />
            <small>9597649181</small>
            <FaMailBulk />
            <small>gstraders@gmail.com</small>
        </div>

        <div className='navfordesk'>
            <div className='navcontent1'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='navcontent'>
                <div className='content'>
                     <a className='h' style={{fontSize:'medium'}}>HOME</a>
                   <a  className='h' style={{fontSize:'medium'}}>ABOUT</a>
                   <a  className='h' style={{fontSize:'medium'}}>PRODUCTS</a>
               
                
                </div>
                
                <div className='button'>
                  <span className='pe-4'>Book Now</span><span className='fs-1 mb-1'>&rarr;</span>
                   </div>
                

            </div>

        </div>
        
        <div className='abovenavm'>
           
        </div>

        <div className='navformobile'>
            <div className='navcontentmb'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='navcontentmb1'>
                    <small style={{fontStyle:'italic'}}>Contact us</small>
                    <small>email:gstraders@gmail.com</small>
                    <small>phno:123456789</small>
 
            </div>

        </div>
      
            
        </>

    )
}

export default Nav;

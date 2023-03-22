import React from 'react'
import '../components.css/nav.css'
import { FaList, FaHome, FaInfo, FaCompressArrowsAlt } from "react-icons/fa";
import logo from '../assets/images/nav-logo.png'

function Nav() {
    return (
        <>

        <div className='abovenavd'>
            <h5>Contact us</h5>
            <small>email:gstraders@gmai.com</small>
            <small>phno:123456789</small>
        </div>

        <div className='navfordesk'>
            <div className='navcontent1'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='navcontent'>
                <div className='content'>
                     <a className='h' style={{fontSize:'medium'}}>HOME</a>
                   <a  className='h' style={{fontSize:'medium'}}>ABOUT</a>
               
                
                </div>
                
                <div className='button'>
                    <bold> Book Now-</bold>
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

export default Nav
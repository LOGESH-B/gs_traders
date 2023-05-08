import React, { useEffect } from 'react'
import './Nav.css'
import { FaPhoneAlt, FaMailBulk, FaBars, FaTimesCircle } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Booking from '../booking/booking';
import { useDispatch, useSelector } from 'react-redux';
import { featchConstant } from '../../redux/api';
// import {Link} from 'react-router-dom'

import {constant} from '../../redux/features/homeSlice'

function Nav(props) {
    const dispatch = useDispatch();
    const constants = useSelector(state => state.home);
    const [togs, settogs] = useState(false);
    const api=async()=>{
        try{
            const constant_res=await featchConstant();
            dispatch(constant(constant_res));
        }catch(e){
            console.log(e);
        }

    }
    if (constants == null) {
        api();
    }
    var phn = constants?.contact;
    var email = constants?.email;
// useEffect(()=>{
//     document.addEventListener("mousedown", (e)=> {
//        if(!menuRef.current.contains(e.target)){
//         settogs(false);

//        }
   
        
//    }
//    ,false);
// })
    
    return (
        <>

            <div className='abovenavd d-flex fs-6'>
                <div className='abovenavd1'>
                    <FaPhoneAlt />
                    <small>{phn}</small>
                    <small>|</small>
                    <FaMailBulk />
                    <small>{email}</small>
                </div>
            </div>
            <div className='nav'>
                <div className='navcontent1'>
                    <img style={{ width: props.w }} className='logo' src={props.img} alt={props.img} />
                </div>
                <div className=" navcontent" >
                    <div className='content'>
                        <Link className='h' style={{ fontSize: 'medium', textDecoration: 'none' }} to="/">HOME</Link>

                        <Link className='h'  style={{ fontSize: 'medium' }}>CONTACT</Link>


                        <Link className='h' style={{ fontSize: 'medium' }}>PRODUCTS</Link>



                    </div>

                    <Link to='booking' style={{ textDecoration: 'none' }} className='button' onClick={Booking}>
                        <span className='pe-4'>Book Now</span><span className='fs-1 mb-1'>&rarr;</span>
                    </Link>
                </div>

                <div id='tog' onClick={() => { settogs(!togs) }} className='toggle'>
                    {togs ? <FaTimesCircle /> : <FaBars />}


                </div>
            </div>
            {togs ? <div className='dropdown'>

                <li> <Link className='h' style={{ fontSize: 'medium', color: 'white' }}>HOME</Link></li>
                <li> <Link className='h' style={{ fontSize: 'medium', color: 'white' }}>CONTACT</Link></li>
                <li><Link className='h' style={{ fontSize: 'medium', color: 'white' }}>PRODUCTS</Link></li>
                <li><div className='button1' onClick={Booking}>
                    <span className='pe-4'>Book Now</span><span className='fs-1 mb-1'>&rarr;</span>
                </div></li>
            </div>
                : <div></div>
            }
        </>

    )




}


export default Nav;

import traders from '../../assets/logo\'s/GS-logo-traders.png'
import dalmia from '../../assets/images/dalmia.jpg'
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import './trader.css'
import React from 'react';
import { useState } from 'react';
import datas from './sampledata'
export default function Traders() {


    // const data=datas.map(()=>{

    // })



    return (
        <>




            <div className='nav1'>
                <div className='navcontent1'>
                    <img className='logotrade' src={traders} alt="" />
                </div>


                <div className=" navcontent" >


                    <div className='content1'>
                        <a className='h' style={{ fontSize: 'medium' }}>HOME</a>
                        <a className='h' style={{ fontSize: 'medium' }}>ABOUT</a>
                        <a className='h' style={{ fontSize: 'medium' }}>PRODUCTS</a>


                    </div>

                    <div className='button'>
                        <span className='pe-4'>Book Now</span><span className='fs-1 mb-1'>&rarr;</span>
                    </div>


                </div>

            </div>


            {/* <div>
                <div class="wrapper">
                    <div class="static-txt">I'm a</div>
                    <ul class="dynamic-txts">
                        <li><span>YouTuber</span></li>
                        <li><span>Designer</span></li>
                        <li><span>Developer</span></li>
                        <li><span>Freelancer</span></li>
                    </ul>
                </div>
            </div> */}
            <div className='overall'>


                <div>
                    <div className='headertrade'>
                        <h1 className='head' >
                            We Provide High Quality <br /> <b className='cs' >CEMENT</b> & <b className='cs'>STEEL</b>
                        </h1>
                    </div>



                </div>
                <div className='suppliers'>
                    <h5>
                        Our Products
                    </h5>

                    <div className='row cement'>
                        <div className='col-lg-3 '>
                            <div className='ccard'>
                                <img src={dalmia} className='cardimage' />
                            </div>

                        </div>
                        <div className='col-lg-3'> <div className='ccard'>
                                <img src={dalmia} className='cardimage' />
                            </div></div>
                        <div className='col-lg-3'> <div className='ccard'>
                                <img src={dalmia} className='cardimage' />
                            </div></div>
                        <div className='col-lg-3'> <div className='ccard'>
                                <img src={dalmia} className='cardimage' />
                            </div></div>
        
                    </div>





                </div>




            </div>
        </>
    )
}
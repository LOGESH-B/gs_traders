import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { featchConstant } from '../../redux/api'
import Nav from '../../components/NavComponent/nav'
import img from '../../assets/images/serviceimg.webp'
import simg from '../../assets/images/gsLogo.png'

import './home.css'
function Home() {

    const dispatch = useDispatch();
    const constants = useSelector(state => state.home);
    useEffect(() => {
        dispatch(featchConstant());

    }, [])



    return (
        <div >

            <div className='hero' >
                <Nav /> </div>
            <div className='secondpage'>
                <div className='row'>
                    <div className='col-lg-4 second1'>
                        <div className='fw-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur a neque quia nobis quasi. Rerum laborum a eaque ipsa ipsum..
                        </div>
                        <div className='btnclass1'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 second2'>
                    Ratione accusamus at perferendis atque deleniti iure vel iusto delectus natus nisi corporis nesciunt fugit tempore quas, officiis, enim illum autem asperiores inventore suscipit quidem perspiciatis, eaque aspernatur eligendi. Doloribus suscipit neque adipisci saepe sint laudantium delectus dignissimos, rem sapiente.
                    </div>
                </div>

            </div>
            <div className='services'>
                <div className='row me-0'>
                    <div className="col-lg-4 s "><h4 className='fs-1 fw-bold pb-3'>OUR SERVICES</h4></div>
                    <div className="col-lg-4  s1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus labore officia natus illo ex, rerum rem ad? Quasi, illum accusantium vitae consectetur quisquam saepe.</div>

                    <div className="col-lg-4 col-sm-2">
                        <img src={img} className='image-service' alt="" />
                    </div>
                </div>

                <div className='row servicelist' >
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simg' src={simg} alt="" />
                        </div>
                        <h5 className='fw-bold'>Heading</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simg' src={simg} alt="" />
                        </div>
                        <h5 className='fw-bold'>Heading</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2 specialcard'>

                        <div>
                            <img className='simg' src={simg} alt="" />
                        </div>
                        <h5 className='fw-bold'>Heading</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className='row  mt-4  servicelist1' >
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simg' src={simg} alt="" />
                        </div>
                        <h5 className='fw-bold'>Heading</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simg' src={simg} alt="" />
                        </div>
                        <h5 className='fw-bold'>Heading</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simg' src={simg} alt="" />
                        </div>
                        <h5 className='fw-bold'>Heading</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>


            {/* {constants && <p>{constants.address}</p>} */}
        </div>
    )
}

export default Home
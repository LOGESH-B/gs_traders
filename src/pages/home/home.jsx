import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { featchConstant } from '../../redux/api'
import Nav from '../../components/NavComponent/nav'
import img from '../../assets/images/serviceimg.webp'
import simg from '../../assets/images/gsLogo.png'
import oimg from '../../assets/images/ownerimg.webp'
import s1 from '../../assets/images/s1.jpg'
import s2 from '../../assets/images/s2.jpg'
import brick from '../../assets/logo\'s/GS-logo-brick.png'
import line from '../../assets/logo\'s/GS-logo-line.png'
import metal from '../../assets/logo\'s/GS-logo-metal.png'
import constr from '../../assets/logo\'s/GS-logo-construction.png'
import traders from '../../assets/logo\'s/GS-logo-traders.png'
import Carousel from 'react-bootstrap/Carousel';
import { FaPhoneAlt, FaMailBulk, FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo\'s/GS-logo.png'


import './home.css'
function Home() {

    const dispatch = useDispatch();
    const constants = useSelector(state => state.home);
    useEffect(() => {
        dispatch(featchConstant());

    }, [])



    



    return (
        <div >
            <Nav img={logo} />
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
                    or

                    <div className='number'>
                        <FaPhoneAlt />
                        <small> call us at 123456789</small>
                    </div>



                </div>

            </div>




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
                        Ratione accusamus at perferendis atque deleniti iure vel iusto delectus natusisi corporis nesciunt fugit tempore quas, officiis, enim illum autem asperiores inventore suscipit quidem perspiciatis, eaque aspernatur eligendi. Doloribus suscipit neque adipisci saepe sint laudantium delectus dignissimos, rem sapiente.
                    </div>
                </div>            </div>
            <div className='services'>
                <div className='row me-0'>
                    <div className="col-lg-4 s "><h4 className='fs-1 fw-bold pb-3'>OUR BRANCHES</h4></div>
                    <div className="col-lg-4  s1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus labore officia natus illo ex, rerum rem ad? Quasi, illum accusantium vitae consectetur quisquam saepe.</div>

                    <div className="col-lg-4 col-sm-2">
                        <img src={img} className='image-service' alt="" />
                    </div>
                </div>

                <div className='row servicelist' >
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simgb' src={brick} alt="" />
                        </div>
                        <h5 className='fw-bold'>GS BRICKS</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>
                                
                                <Link to='trade' style={{textDecoration:'none',color:'black'}}>
                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>
                                </Link>


                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simgb' src={metal} alt="" />
                        </div>
                        <h5 className='fw-bold'>BS BLUE METALS</h5>
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
                            <img className='simgb' src={constr} alt="" />
                        </div>
                        <h5 className='fw-bold'>Construction</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2'>

                        <div>
                            <img className='simgb ' src={traders} alt="" />
                        </div>
                        <h5 className='fw-bold'>Traders</h5>
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
                        <h5 className='fw-bold'>Group</h5>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?
                        <div className='btnclass'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className='owner1 row'>

                <div className='col-lg-6 c1'>

                    <img src={oimg} className='ownerimage' alt="" />


                </div>
                <div className='col-lg-6 c2'>
                    <div>
                        <span className='quote'><FaQuoteLeft /></span>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, veritatis. Quas suscipit natus possimus dolorem incidunt. Harum, magnam debitis? Ex unde illum cum amet id? <FaQuoteRight />
                        <div className='btnclass1'>
                            <div className='learn'>

                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <div className='works'>
                

                <Carousel>
                    <Carousel.Item>

                    <div className='works'>
                <div className='workname'>
                    <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>OUR CONSTRUCTION</h4></div>
                    <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>SERVICES</h4></div>


                </div>

                <div>
                    <div className='row'>
                        <div className='col-lg-6'>

                            <img src={s1} className='simage' alt="" />

                        </div>
                        <div className='col-lg-6 '>
                            <div className='ser'>
                                <div ><h4 className='fs-5 fw-bold'>Building in Sivagiri</h4></div>
                                <br />
                                <div>
                                    building for company  and house
                                </div>
                                <br />
                                <div>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?
                                </div>
                                <div className='btnclass2'>
                                    <div className='learn'>

                                        <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className='works'>
                <div className='workname'>
                    <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>OUR CONSTRUCTION</h4></div>
                    <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>SERVICES</h4></div>


                </div>

                <div>
                    <div className='row'>
                        <div className='col-lg-6'>

                            <img src={s1} className='simage' alt="" />

                        </div>
                        <div className='col-lg-6 '>
                            <div className='ser'>
                                <div ><h4 className='fs-5 fw-bold'>Building in Sivagiri</h4></div>
                                <br />
                                <div>
                                    building for company  and house
                                </div>
                                <br />
                                <div>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?
                                </div>
                                <div className='btnclass2'>
                                    <div className='learn'>

                                        <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className='works'>
                <div className='workname'>
                    <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>OUR CONSTRUCTION</h4></div>
                    <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>SERVICES</h4></div>


                </div>

                <div>
                    <div className='row'>
                        <div className='col-lg-6'>

                            <img src={s1} className='simage' alt="" />

                        </div>
                        <div className='col-lg-6 '>
                            <div className='ser'>
                                <div ><h4 className='fs-5 fw-bold'>Building in Sivagiri</h4></div>
                                <br />
                                <div>
                                    building for company  and house
                                </div>
                                <br />
                                <div>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?
                                </div>
                                <div className='btnclass2'>
                                    <div className='learn'>

                                        <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className='works'>
                <div className='workname'>
                    <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>OUR CONSTRUCTION</h4></div>
                    <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>SERVICES</h4></div>


                </div>

                <div>
                    <div className='row'>
                        <div className='col-lg-6'>

                            <img src={s1} className='simage' alt="" />

                        </div>
                        <div className='col-lg-6 '>
                            <div className='ser'>
                                <div ><h4 className='fs-5 fw-bold'>Building in Sivagiri</h4></div>
                                <br />
                                <div>
                                    building for company  and house
                                </div>
                                <br />
                                <div>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?
                                </div>
                                <div className='btnclass2'>
                                    <div className='learn'>

                                        <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className='works'>
                <div className='workname'>
                    <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>OUR CONSTRUCTION</h4></div>
                    <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>SERVICES</h4></div>


                </div>

                <div>
                    <div className='row'>
                        <div className='col-lg-6'>

                            <img src={s1} className='simage' alt="" />

                        </div>
                        <div className='col-lg-6 '>
                            <div className='ser'>
                                <div ><h4 className='fs-5 fw-bold'>Building in Sivagiri</h4></div>
                                <br />
                                <div>
                                    building for company  and house
                                </div>
                                <br />
                                <div>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?
                                </div>
                                <div className='btnclass2'>
                                    <div className='learn'>

                                        <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
                    </Carousel.Item>
                </Carousel>



            </div>

            {/* <div className='works'>
                <div className='workname'>
                    <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>OUR CONSTRUCTION</h4></div>
                    <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>SERVICES</h4></div>


                </div>

                <div>
                    <div className='row'>
                        <div className='col-lg-6'>

                            <img src={s1} className='simage' alt="" />

                        </div>
                        <div className='col-lg-6 '>
                            <div className='ser'>
                                <div ><h4 className='fs-5 fw-bold'>Building in Sivagiri</h4></div>
                                <br />
                                <div>
                                    building for company  and house
                                </div>
                                <br />
                                <div>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?
                                </div>
                                <div className='btnclass2'>
                                    <div className='learn'>

                                        <div className='fs-1 mb-2 btnarrow'>&rarr;</div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>

 */}


            {/* {constants && <p>{constants.address}</p>} */}
        </div>
    )
}

export default Home





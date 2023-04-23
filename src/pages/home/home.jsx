import React, { useEffect } from 'react'
import { useState } from 'react'

//redux imports
import { useSelector, useDispatch } from 'react-redux'
import { featchConstant, featchCatagory } from '../../redux/api'


//components import
import Nav from '../../components/nav_component/Nav'
import Banner1 from '../../components/home_components/banner1/Banner1';
import Banner2 from '../../components/home_components/banner2/Banner2';
import Branches from '../../components/home_components/branches/Branches.jsx'
import Construction from '../../components/home_components/constructions/Construction'
import Contact from '../../components/home_components/contact/Contact'

import Brands from './brand'
import Service from './services'

//css imports
import './Home.css'

//images
import logo from '../../assets/logo/GS-logo.png'


function Home() {

    const dispatch = useDispatch();
    const constants = useSelector(state => state.home);
    const catagory = useSelector(state => state.catagory);
    useEffect(() => {
        var r=!constants?dispatch(featchConstant()):console.log("No C0nstant Api Call");
        var r1=catagory.length==0? dispatch(featchCatagory()):console.log("No Catagory Api Call");

        // dispatch(featchConstant())
        // dispatch(featchCatagory())
    }, [])

    //scroll func
    const scrollToTopBtn = document.getElementById("go-to-top-btn");
    if (scrollToTopBtn) {
        window.addEventListener("scroll", () => {
            // If user scrolls more than 20px from top, show the button
            if (window.pageYOffset > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });


        scrollToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
    // console.log(constants);
    // console.log(catagory)

    return constants&&catagory?
        (

            <div >
                <Nav img={logo}/>
                <button id="go-to-top-btn">Go to top</button>
                <Banner1 branches={constants.branchNames} phn={constants.contact}/>
                <Banner2 address={constants.address} desc={constants.about}/>
                <Branches data={catagory}/>

                <Brands />
                <Service />

                <Construction />
                <Contact />




                {/* <div className='owner1 row'>

                <div className='col-lg-6 c1 p-3'>

                    <img src={oimg} className='ownerimage' alt="" />


                </div>
                <div className='col-lg-6 c2 ps-5'>
                    <div className='ms-5'>
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




            {constants && <p>{constants.address}</p>} */}
            </div>
        ) : "Loding";
}

export default Home





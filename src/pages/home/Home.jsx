import React, { useEffect } from 'react'

//redux imports
import { useSelector, useDispatch } from 'react-redux'
import { featchConstant, featchCatagory, featchBranch } from '../../redux/api'


//components import
import Nav from '../../components/nav_component/Nav'
import Banner1 from '../../components/home_components/banner1/Banner1';
import Banner2 from '../../components/home_components/banner2/Banner2';
import Branches from '../../components/home_components/branches/Branches.jsx'
import Construction from '../../components/home_components/constructions/Construction'
import Loading from '../../components/loading/Loading';
import Brands from './Brand'
import Service from './Services'

//css imports
import './Home.css'

//images
import logo from '../../assets/logo/GS-logo.png'
import { constant } from '../../redux/features/homeSlice'
import { getcatagory } from '../../redux/features/catagorySlice'
import { getbranch } from '../../redux/features/branchSlice'
import Back from '../../components/back_to_top_btn/back_to_top';
import Contact from '../../components/Contact/Contact';



function Home() {

    const dispatch = useDispatch();
    const constants = useSelector(state => state.home);
    const catagory = useSelector(state => state.catagory);
    const branch = useSelector(state => state.branch)
    const apis = async () => {
        if (!constants || catagory.length === 0 || branch.length === 0) {
            try {
                const constant_res = await featchConstant();
                const catagory_res = await featchCatagory();
                const branch_res = await featchBranch();
                console.log("Dispatch called");
                dispatch(constant(constant_res))
                dispatch(getcatagory(catagory_res))
                dispatch(getbranch(branch_res))
                console.log("Dispatch finished");

            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("No Api Calls")
        }
    }
    useEffect(() => {
        apis();
        // var swiper = new Swiper(".mySwiper", {
        //     slidesPerView: 6,
        //     spaceBetween: 30,
        //     pagination: {
        //       el: ".swiper-pagination",
        //       clickable: true,
        //     },
        //   });
        // dispatch(featchConstant())
        // dispatch(featchCatagory())
    }, [])

   
    // console.log(constants);
    // console.log(catagory)
    // console.log(branch)

    return constants && catagory ?
        (
            <div>
                  <Back/>
                <Nav img={logo} />
                <Banner1 branches={constants.branchNames} phn={constants.contact} />
                <Banner2 address={constants.address} desc={constants.about} />
                <Branches data={catagory} />

                {/* <Brands /> */}
                {/* <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" >Slide 1</div>
                        <div class="swiper-slide">Slide 2</div>
                        <div class="swiper-slide">Slide 3</div>
                        <div class="swiper-slide">Slide 4</div>
                        <div class="swiper-slide">Slide 5</div>
                        <div class="swiper-slide">Slide 6</div>
                        <div class="swiper-slide">Slide 7</div>
                        <div class="swiper-slide">Slide 8</div>
                        <div class="swiper-slide">Slide 9</div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div> */}
                 
                <Brands/>
                <Service />
                <Construction />
                <Contact/>
                
                



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
            
        ) : <Loading/>
    }

export default Home





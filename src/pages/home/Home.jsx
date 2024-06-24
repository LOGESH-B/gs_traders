import React, { useEffect } from 'react'

//redux imports
import { useSelector, useDispatch } from 'react-redux'
import { featchConstant, featchCatagory, featchBranch } from '../../redux/api'


//components import
import Nav from '../../components/nav_component/Nav'
import Banner1 from '../../components/home_components/banner1/Banner1';
import Banner2 from '../../components/home_components/banner2/Banner2';
import Branches from '../../components/home_components/branches/Branches.jsx'
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
import Loading from '../../components/loading/Loading';



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

    return constants ?
        (
            <div>
                <Back/>
                <Nav img={logo} />
                <Banner1 branches={constants.branchNames} phn={constants.contact} />
                <Banner2  />
                <Branches data={catagory} />  
                <Brands/>
                <Service />
                <Contact/>
                
            </div>
            
        ) : <Loading/>
    }

export default Home





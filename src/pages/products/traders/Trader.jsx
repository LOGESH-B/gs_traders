import React from 'react';
import { useEffect, useState } from 'react';

//components imports
import ProductBanner from '../../../components/product/product_banner/ProductBanner';
import ProductCard from '../../../components/product/product_card/ProductCard'
import Nav from '../../../components/nav_component/Nav'


//images
import bgimg from '../../../assets/images/pheader.jpeg'

import tradelogo from '../../../assets/logo/GS-logo-traders.png'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { featchBranch, featchCatagory } from '../../../redux/api';
import { getcatagory } from '../../../redux/features/catagorySlice';
import { getbranch } from '../../../redux/features/branchSlice';
import Loading from '../../../components/loading/Loading';

export default function Traders() {
    const [admin, setadmin] = useState(false);

  
    const dispatch = useDispatch();

    //store
    const branch = useSelector(state => state.branch).filter(e => e.name === 'GS TRADERS')[0];
    const catagorydata = useSelector(state => state.catagory);

    const cement = [];
    catagorydata && branch?.category.map(ele => {
        catagorydata.filter(e => {
            if (e.name === ele.name) {
                cement.push(e)
            }
        });
    })
    console.log(cement)


    //api calls
    const apis = async () => {
        if (!cement || !branch) {
            try {
                const cement_res = await featchCatagory();
                const branch_res = await featchBranch();
                console.log("Dispatch called");
                dispatch(getcatagory(cement_res))
                dispatch(getbranch((branch_res)))
                console.log("Dispatch finished");

            } catch (e) {
                console.log(e.message)
            }
        } else {
            console.log("No Api Calls")
        }

    }
    useEffect(() => {
        apis();
    }, [])
    useEffect(() => {
        sessionStorage.getItem("isadmin") ? setadmin(true) : setadmin(false);
    }, [admin]);
    // console.log(branch)
    return (

        cement && branch ? <>

         


            <div className='modalback'>
                <Nav img={tradelogo} w={180} />
                <ProductBanner bgimg={bgimg} name={'GS TRADERS'} content={'We supply all popular brands of cement and steel, catering to both wholesale and retail customers'} />
                
                {/* <ProductBanner name={branch.name} bgimg={bgimg} content={branch.description} /> */}
                <ProductCard isadmin={admin} catagory={branch.category} productdata={cement} />
                <br></br>

            </div>




        </> : <Loading/>
    )
}

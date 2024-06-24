import React, { useState } from "react"
import { useEffect } from "react"

//component imports
import ProductCard from "../../components/product/product_card/ProductCard"
import Nav from '../../components/nav_component/Nav'
import ProductBanner from '../../components/product/product_banner/ProductBanner'

//images
import bluelogo from '../../assets/logo/GS-logo-metal.png'
import bgimg from '../../assets/images/matalBanner.jpeg'


//redux
import { useDispatch, useSelector } from "react-redux"
import { featchBranch, featchCatagory } from "../../redux/api"
import { getcatagory } from "../../redux/features/catagorySlice"
import { getbranch } from "../../redux/features/branchSlice"
import Loading from "../../components/loading/Loading"





export default function Bluemetal() {
    const [admin, setadmin] = useState(false);
    const dispatch = useDispatch();

    //store
    const branch = useSelector(state => state.branch).filter(e => e.name == 'GS BLUE METALS')[0];
    const catagorydata = useSelector(state => state.catagory);
    const metals = [];
    catagorydata && branch?.category.map(ele => {
        catagorydata.filter(e => {
            if (e.name == ele.name) {
                metals.push(e)
            }
        });
    })
    console.log(metals)


    useEffect(() => {

        apis();
    }, [])
    useEffect(() => {
        sessionStorage.getItem("isadmin") ? setadmin(true) : setadmin(false);
    }, [admin]);



    //api calls
    const apis = async () => {
        console.log("on api")
        if (!metals || !branch) {
            try {
                const metals_res = await featchCatagory();
                const branch_res = await featchBranch();
                console.log("Dispatch called");
                dispatch(getcatagory(metals_res))
                dispatch(getbranch((branch_res)))
                console.log("Dispatch finished");

            } catch (e) {
                console.log(e.message)
            }
        } else {
            console.log("No Api Calls")
        }


    }



    return (
        metals && branch ?
            <>

                <Nav img={bluelogo} w={200} />
                <ProductBanner bgimg={bgimg} name={'GS BLUE METALS'} content={'We offer top-quality blue metals and a wide range of construction materials, including various types of blue metals, clay bricks, and soil, available for both wholesale and retail customers. '} />
           
                <ProductCard isadmin={admin}  catagory={branch.category} productdata={metals} />

            </> : <Loading/>
    )
}

import React from "react"
import { useEffect, useState } from "react"

//components import
import ProductCard from "../../components/product/product_card/ProductCard"
import Nav from '../../components/nav_component/Nav'
import ProductBanner from '../../components/product/product_banner/ProductBanner'

//images
import bgimg from '../../assets/images/pheader.jpeg'
import bricklogo from '../../assets/logo/GS-logo-brick.png'

//redux
import { useDispatch, useSelector } from "react-redux"
import { featchBranch, featchCatagory } from "../../redux/api"
import { getbranch } from "../../redux/features/branchSlice"
import { getcatagory } from "../../redux/features/catagorySlice"
import Loading from "../../components/loading/Loading"

export default function Bricks() {
    const [admin, setadmin] = useState(false);
    const dispatch = useDispatch();

    //store
    const branch = useSelector(state => state.branch).filter(e => e.name == 'GS BRICKS')[0];
    const catagorydata = useSelector(state => state.catagory);

    const bricks = [];
    catagorydata && branch?.category.map(ele => {
        catagorydata.filter(e => {
            if (e.name == ele.name) {
                bricks.push(e)
            }
        });
    })
    console.log(bricks)

    //api calls
    const apis = async () => {
        if (!bricks || !branch) {
            try {
                const brick_res = await featchCatagory();
                const branch_res = await featchBranch();
                console.log("Dispatch called");
                dispatch(getcatagory(brick_res))
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
        bricks && branch ?
            <>
                <Nav img={bricklogo} w={150} />
                {/* <ProductBanner bgimg={bgimg} name={'Bricks'} content={'we are the gs bluemetals we provide high quality bluemetals .we supply all kind of bluemetals'} />
            <ProductCard subproduct={'Bricks'} subproduct2={''} productdata={bricks_data}  /> */}
                <ProductBanner name={branch.name} bgimg={bgimg} content={branch.description} />
                <ProductCard isadmin={admin} catagory={branch.category}  productdata={bricks} />


            </> : <Loading/>
    )
}

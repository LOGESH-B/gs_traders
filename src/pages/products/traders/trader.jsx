import React from 'react';
import { useEffect, useState } from 'react';

//components imports
import ProductBanner from '../../../components/product/product_banner/ProductBanner';
import ProductCard from '../../../components/product/product_card/ProductCard'
import Nav from '../../../components/nav_component/Nav'
import Back from '../../../components/back_to_top_btn/back_to_top';

//images
import bgimg from '../../../assets/images/pheader.jpeg'
import dalmia from '../../../assets/images/dalmia.jpg'
import tradelogo from '../../../assets/logo/GS-logo-traders.png'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { featchBranch, featchCatagory } from '../../../redux/api';
import { getcatagory } from '../../../redux/features/catagorySlice';
import { getbranch } from '../../../redux/features/branchSlice';
import Loading from '../../../components/Loading/loading';

export default function Traders() {
    const [admin, setadmin] = useState(false);

    const steel_data = [
        {
            _id: "1",
            bname: 'dalmia1',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "2",
            bname: 'dalmia2',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "3",
            bname: 'dalmia3',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "4",
            bname: 'dalmia4',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "5",
            bname: 'dalmia5',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "6",
            bname: 'dalmia6',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        }
    ]
    const cement_data = [
        {
            _id: "1",
            bname: 'dalmia1',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "2",
            bname: 'dalmia2',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "3",
            bname: 'dalmia3',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "4",
            bname: 'dalmia4',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "5",
            bname: 'dalmia5',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        },
        {
            _id: "6",
            bname: 'dalmia6',
            available: 'true',
            approxprice: '5000',
            img: tradelogo
        }
    ]

    const dispatch = useDispatch();

    //store
    const branch = useSelector(state => state.branch).filter(e => e.name == 'GS TRADERS')[0];
    const catagorydata = useSelector(state => state.catagory);

    const cement = [];
    catagorydata && branch?.category.map(ele => {
        catagorydata.filter(e => {
            if (e.name == ele.name) {
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
                <Nav img={tradelogo} w={150} />
                {/* <ProductBanner bgimg={bgimg} name={'GS TRADERS'} content={'we are the gs traders we provide hight quality cement and steel.we supply all popular brands of cement and steel in tamilnadu'} />
                <ProductCard subproduct={'CEMENT'} subproduct2={'STEEL'} productdata={cement_data} productdata2={steel_data} /> */}

                <ProductBanner name={branch.name} bgimg={bgimg} content={branch.description} />
                <ProductCard isadmin={admin} catagory={branch.category} productdata={cement} />


            </div>




        </> : <Loading/>
    )
}
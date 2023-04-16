
import dalmia from '../../../assets/images/dalmia.jpg'
import tradelogo from '../../../assets/logo\'s/GS-logo-traders.png'
import React from 'react';
import Phead from '../../../components/product/productheader';
import Pdata from '../../../components/product/productdata'
import Nav from '../../../components/NavComponent/nav'
import bgimg from '../../../assets/images/pheader.jpeg'

export default function Traders() {

    const steel_data = [
        {
            _id: "1",
            bname: 'dalmia',
            available: '',
            approxprice: '',
            img: dalmia
        },
        {
            _id: "2",
            bname: 'a',
            available: '',
            approxprice: '',
           
            img: ''
        },
        {
            _id: "3",
            bname: 's',
            available: '',
            approxprice: '',
           
            img: ''
        },
        {
            _id: "4",
            bname: 's',
            available: '',
            approxprice: '',
            
            img: ''
        },
        {
            _id: "5",
            bname: 's',
            available: '',
            approxprice: '',
            
            img: ''
        },
        {
            _id: "6",
            bname: 's',
            available: '',
            approxprice: '',
            
            img: ''
        }
    ]
    const cement_data = [
        {
            _id: "1",
            bname: 'dalmia',
            available: '',
            approxprice: '',
            
            img: dalmia
        },
        {
            _id: "2",
            bname: 'a',
            available: '',
            approxprice: '',
            
            img: ''
        },
        {
            _id: "3",
            bname: 's',
            available: '',
            approxprice: '',
           
            img: ''
        },
        {
            _id: "4",
            bname: 's',
            available: '',
            approxprice: '',
           
            img: ''
        },
        {
            _id: "5",
            bname: 's',
            available: '',
            approxprice: '',
           
            img: ''
        },
        {
            _id: "6",
            bname: 's',
            available: '',
            approxprice: '',
           
            img: ''
        }
    ]
    return (
        <>


            <div className='modalback'>
                <Nav img={tradelogo} w={150} />
                <Phead bgimg={bgimg} name={'GS TRADERS'} content={'we are the gs traders we provide hight quality cement and steel.we supply all popular brands of cement and steel in tamilnadu'} />
                <Pdata subproduct={'CEMENT'} subproduct2={'STEEL'} productdata={cement_data} productdata2={steel_data} />


            </div>




        </>
    )
}
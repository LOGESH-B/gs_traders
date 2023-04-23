
import dalmia from '../../../assets/images/dalmia.jpg'
import tradelogo from '../../../assets/logo/GS-logo-traders.png'
import React from 'react';
import ProductBanner from '../../../components/product/product_banner/ProductBanner';
import ProductCard from '../../../components/product/product_card/ProductCard'
import Nav from '../../../components/nav_component/Nav'
import bgimg from '../../../assets/images/pheader.jpeg'

export default function Traders() {

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
    return (
        <>


            <div className='modalback'>
                <Nav img={tradelogo} w={150} />
                <ProductBanner bgimg={bgimg} name={'GS TRADERS'} content={'we are the gs traders we provide hight quality cement and steel.we supply all popular brands of cement and steel in tamilnadu'} />
                <ProductCard subproduct={'CEMENT'} subproduct2={'STEEL'} productdata={cement_data} productdata2={steel_data} />


            </div>




        </>
    )
}
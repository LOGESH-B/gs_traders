
import dalmia from '../../../assets/images/dalmia.jpg'
import tradelogo from '../../../assets/logo\'s/GS-logo-traders.png'
import './trader.css'
import React from 'react';
import Phead from '../../../components/product/productheader';
import Pdata from '../../../components/product/productdata'
import Nav from '../../../components/NavComponent/nav'
import bgimg from '../../../assets/images/pheader.jpeg'

export default function Traders() {

    const steel_data = [
        {
            bname: 'dalmia',
            available: true,
            approxprice: '',
            total: '',
            img: dalmia
        },
        {
            bname: 'a',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        }
    ]
    const   cement_data = [
        {
            _id:"1",
            bname: 'dalmia',
            available: '',
            approxprice: '',
            total: '',
            img: dalmia
        },
        {
            _id:"2",
            bname: 'a',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            _id:"3",
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            _id:"4",
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            _id:"5",
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        },
        {
            _id:"6",
            bname: 's',
            available: '',
            approxprice: '',
            total: '',
            img: ''
        }
    ]
    return (
        <>

            <Nav img={tradelogo} w={150}/>
            <Phead bgimg={bgimg} name={'GS TRADERS'} content={'we are the gs traders we provide hight quality cement and steel.we supply all popular brands of cement and steel in tamilnadu'} />
            <Pdata cement={'CEMENT'} steel={'STEEL'} cement_data={cement_data} steel_data={steel_data} />


            
        </>
    )
}
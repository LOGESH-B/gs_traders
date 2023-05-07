import React from "react";
import {MdChevronLeft,MdChevronRight} from "react-icons/md"

import ultratech from '../../assets/brandImages/ultratech.png'
import tata from '../../assets/brandImages/tata.jpg'
import  dalmia from '../../assets/brandImages/dalmia.jpg'
import jws from '../../assets/brandImages/jws.jpg'
import gowri from '../../assets/brandImages/gowri.jpg'
import ramco from '../../assets/brandImages/ramco.png'
import priya from '../../assets/brandImages/priya.png'
import arasu from '../../assets/brandImages/arasu.jpg'

const images = [
    ultratech,tata,dalmia,jws,ramco,priya,gowri,arasu
   
  ];
function Brands()
{
    const sliderLeft=()=>
    {
        var slider=document.getElementById("slider");
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const sliderRight=()=>
    {
        var slider=document.getElementById("slider");
        slider.scrollLeft=slider.scrollLeft+500;
    }
    return( 
        <>
            <br/><br/>
            <b style={{fontSize:'7vmin',fontFamily:'Merriweather' ,marginLeft:'25px', color:'rgb(251, 3, 143)'}}>Popular Brands </b><br></br><br></br>
            <div className="relative flex items-center">
            <MdChevronLeft onClick={sliderLeft} size={40}  className="opacity-60"/>
                <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {images.map((items) => (
                        <img className="w-[30vmin] inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300"
                        src={items} alt='brandLogo'
                        />
                    )
                    )}
                </div>
            <MdChevronRight onClick={sliderRight} size={40} className="opacity-60"/>
            </div>
            <br></br><br></br><br></br>
        </>
    )
}
export default Brands;
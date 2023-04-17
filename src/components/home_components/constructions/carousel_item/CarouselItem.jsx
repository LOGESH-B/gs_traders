

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselItem.css"

const CarouselItem = (props) => {
  return (
    <Carousel.Item>
    <div className='works'>
      <div className='workname'>
        <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>{props.title}</h4></div>
        <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>{props.subtitle}</h4></div>
      </div>

      <div>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={props.s1} className='simage' alt="" />
          </div>
          <div className='col-lg-6 '>
            <div className='ser'>
              <div ><h4 className='fs-5 fw-bold'>{props.maintitle}</h4></div>
              <br />
              <div>
                {props.subdes}
              </div>
              <br />
              <div>
              {props.des}
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
  </Carousel.Item>
  )
}

export default CarouselItem

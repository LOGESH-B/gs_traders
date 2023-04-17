

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Construction.css'

//img

import s1 from '../../../assets/images/s1.jpg'
import CarouselItem from './carousel_item/CarouselItem';

const Construction = () => {
  return (

    <Carousel>
      <Carousel.Item>
        <div className='works'>
          <div className='workname'>
            <div className="col-lg-4  w "><h4 className='fs-1 fw-bold pb-3 '>OUR CONSTRUCTION</h4></div>
            <div className="col-lg-4 w1 "><h4 className='fs-1 fw-bold pb-3'>Building in Sivagiri</h4></div>
          </div>

          <div>
            <div className='row'>
              <div className='col-lg-6'>
                <img src={s1} className='simage' alt="" />
              </div>
              <div className='col-lg-6 '>
                <div className='ser'>
                  <div ><h4 className='fs-5 fw-bold'>building for company  and house</h4></div>
                  <br />
                  <div>
                    building for company  and house
                  </div>
                  <br />
                  <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?
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
      {/* <CarouselItem
        src={s1}
        title={"OUR CONSTRUCTION"}
        subtitile={"SERVICES"}
        maintitle={"Building in Sivagiri"}
        subdes={"building for company  and house"}
        des={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?"}
      /> */}
      {/*<CarouselItem
            src={s1}
            title={"OUR CONSTRUCTION"}
            subtitile={"SERVICES"}
            maintitle={"Building in Sivagiri"}
            subdes={"building for company  and house"}
            des={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?"}
          />
          <CarouselItem
            src={s1}
            title={"OUR CONSTRUCTION"}
            subtitile={"SERVICES"}
            maintitle={"Building in Sivagiri"}
            subdes={"building for company  and house"}
            des={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?"}
          />
          <CarouselItem
            src={s1}
            title={"OUR CONSTRUCTION"}
            subtitile={"SERVICES"}
            maintitle={"Building in Sivagiri"}
            subdes={"building for company  and house"}
            des={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?"}
          />
          <CarouselItem
            src={s1}
            title={"OUR CONSTRUCTION"}
            subtitile={"SERVICES"}
            maintitle={"Building in Sivagiri"}
            subdes={"building for company  and house"}
            des={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque?"}
          /> */}



    </Carousel>

  )
}

export default Construction

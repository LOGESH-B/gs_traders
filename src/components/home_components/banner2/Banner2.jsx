

import React from 'react'
import './Banner2.css'

const Banner2 = (props) => {
  return (
    <div>
        <div className='secondpage'>
                <div className='row'>
                    <div className='col-lg-4  second1'>
                        <div className='fw-bold '>{props.address}</div>
                        <div className='btnclass1'>
                            <div className='learn'>
                                <div className='fs-1 mb-2 btnarrow'>&rarr;</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 second2 '>
                        {props.desc}
                    </div>
                </div>           
             </div>
    </div>
  )
}

export default Banner2

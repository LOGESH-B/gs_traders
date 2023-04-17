

import React from 'react'
import { Link } from 'react-router-dom'
import './BranchCard.css'

const BranchCard = (props) => {
    const spl=props.spl?"specialcard":"";
    return (

        <div className={`col-lg-3 col-sm-5 s2 pt-5 px-4 pb-2 ${spl}`}>
            <div>
                <img  src={props.src} alt="" />
            </div>
            <h5 className='fw-bold'>{props.title}</h5>
            {props.des}
            <div className='btnclass'>
                <div className='learn'>

                    <Link to={props.link} style={{ textDecoration: 'none', color: 'black' }}>
                        <div className='fs-1 mb-2 btnarrow'>&rarr;</div>
                    </Link>


                </div>
            </div>
        </div>

    )
}

export default BranchCard

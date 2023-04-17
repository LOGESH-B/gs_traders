

import React from 'react'
import './Branches.css'

import { Link } from 'react-router-dom'

//img
import brick from '../../../assets/logo/GS-logo-brick.png'
import metal from '../../../assets/logo/GS-logo-metal.png'
import constr from '../../../assets/logo/GS-logo-construction.png'
import traders from '../../../assets/logo/GS-logo-traders.png'
import img from '../../../assets/images/serviceimg.webp'
import simg from '../../../assets/logo/GS-logo.png'
import BranchCard from './branch_card/BranchCard'

const Branches = () => {
    return (
        <div>
            <div id='products' className='services'>
                {/* header */}
                <div className='row me-0 d-flex justify-content-center'>
                    <div className="col-lg-4 s "><h4 style={{ color: 'orangered' }} className='fs-1 fw-bold pb-3 mt-3'>OUR BRANCHES</h4></div>
                    <div className="col-lg-4 p-4 s1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus labore officia natus illo ex, rerum rem ad? Quasi, illum accusantium vitae consectetur quisquam saepe.</div>

                    <div className="col-lg-4 col-sm-6 p-3">
                        <img src={img} className='image-service' alt="" />
                    </div>
                </div>
                {/* row1 */}
                <div className='row servicelist' >
                    <BranchCard
                        src={brick}
                        title={"GS BRICKS"}
                        des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?"}
                        link={"bricks"}
                    />
                    <BranchCard
                        src={metal}
                        title={"BS BLUE METALS"}
                        des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?"}
                        link={"bluemetal"}
                    />
                    <BranchCard
                        src={simg}
                        title={"Group"}
                        des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?"}
                        link={"/"}
                        spl={"specialcard"}
                    />
                </div>
                {/* row2 */}
                <div className='row  mt-4  servicelist1' >
                    <BranchCard
                        src={constr}
                        title={"Construction"}
                        des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?"}
                        link={"construction"}
                    />
                    <BranchCard
                        src={traders}
                        title={"Traders"}
                        des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?"}
                        link={"trade"}
                    />
                    <BranchCard
                        src={simg}
                        title={"Group"}
                        des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque vitae magni nesciunt odio veritatis veniam perspiciatis totam, aliquid earum quia?"}
                        link={"/"}
                        spl={"specialcard"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Branches

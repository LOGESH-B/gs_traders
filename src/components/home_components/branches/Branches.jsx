

import React from 'react'

import { useNavigate } from 'react-router-dom';
//img
import brick from '../../../assets/logo/GS-logo-brick.png'
import metal from '../../../assets/logo/GS-logo-metal.png'
import constr from '../../../assets/logo/GS-logo-construction.png'
import traders from '../../../assets/logo/GS-logo-traders.png'
import BranchCard from './branch_card/BranchCard'
import './Branches.css'; // Import the CSS file

const Branches = (props) => {
    const navigate=useNavigate()
    return (
        <div id='products'>

            <div className="fw-bold fs-1 mt-5 branch">
                OUR BRANCHES
            </div>

            <div className='container mt-3 '>
                <div><BranchCard src={traders} link={'/trade'}/></div>
                <div><BranchCard src={constr} link={"/construction"} /></div>
                <div><BranchCard src={brick} link={"/bricks"} /></div>
                <div><BranchCard src={metal} link={"/bluemetal"} /></div>
            </div>
        </div>
    );
}

export default Branches;

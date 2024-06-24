

import React from 'react'
import { Link } from 'react-router-dom'
import './BranchCard.css'
const BranchCard = (props) => {
    return (
        <div className="branch-card">
            <Link to={props.link} style={{ textDecoration: 'none', color: 'black' }}>
                <div>
                    <img src={props.src} alt="" />
                </div>
            </Link>
        </div>
    );
}

export default BranchCard;
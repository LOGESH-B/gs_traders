

import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { featchConstant } from '../redux/api'
import Nav from '../components/nav'

function Home() {

    const dispatch = useDispatch();
    const constants = useSelector(state => state.home);
    useEffect(() => {
        dispatch(featchConstant());

    }, [])



    return (
        <div>
            <Nav/>

            {/* {constants && <p>{constants.address}</p>} */}
        </div>
    )
}

export default Home
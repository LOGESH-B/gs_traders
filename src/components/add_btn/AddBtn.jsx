

import React from 'react'
import {GrAddCircle} from 'react-icons/gr'

const AddBtn = (props) => {
  return (
    <div>
      <style>
              {`
                svg path {
                  stroke: ${props.clr}
                }
                `}
            </style>
        <GrAddCircle className='addbtn' size={props.s}/>

    </div>
  )
}

export default AddBtn

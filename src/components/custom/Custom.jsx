import React from 'react'
import "./Custom.css"
import { images } from '../../constants'

const Custom = ({title,text,img}) => {
  return (
    <div className='custom'>
        <div className="custom__title">
            <h1>{img}</h1>
            <h2 className="custom__title-heading">{title}</h2>
        </div>
        <div className="custom__text">
            <p className="custom__text-para">
                {text}
            </p>
        </div>
      
    </div>
  )
}

export default Custom

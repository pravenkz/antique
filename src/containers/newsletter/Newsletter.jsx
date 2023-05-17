import React from 'react'
import "./Newsletter.css"
import { images } from '../../constants'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="newsletter__content">
            <div className="newsletter__content-img">
                <img src={images.logo} alt="" />
            </div>
            <h1 className='headtext__gold'>Subscribe to our newsletter</h1>
            <div className="newsletter__content-about">
                <input type="email" placeholder='enter your email' />
                <button className="custom__button1">Explore</button>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter

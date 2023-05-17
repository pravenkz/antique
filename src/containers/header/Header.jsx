import React from 'react'
import "./Header.css"
import {images} from "../../constants"



const Header = () => {
  return (
    <div className='header section__padding' id='home'>
        <div className="header__content">
            <h1 className="headtext__red">timeless elegance with cherished memories.</h1>
            <p className="p__golden">Welcome to our antique furniture store, where history's whispers are lovingly preserved in every exquisitely crafted piece.Let the warmth of aged wood and the allure of intricate carvings transport you to an era where craftsmanship reigned supreme.</p>
            <button className="custom__button">Explore World</button>
    

        </div>
        <div className="header__img">
             <img src={images.header1bg} alt="" />
        </div>
      
    </div>
  )
}

export default Header

import React from 'react'
import "./About.css"
import { images } from '../../constants'

const About = () => {
  return (
    <div className='about section__padding' id='about'>
       
       <div className="about__content">

       <div className="about__content-left">
         <h1 className="headtext__red">About us</h1>
         <p className="p__golden">At our antique furniture store, we believe that every piece of furniture carries a unique story, a rich history waiting to be discovered. With a passion for preserving the beauty of the past, we have curated a captivating collection of antique treasures, where nostalgia and craftsmanship intertwine</p>
         <button className="custom__button">know more</button>
       </div>

       <div className="about__center-img">
        <img src={images.about} alt="" />
       </div>

       <div className="about__content-right">
         <h1 className="headtext__red">Our History</h1>
         <p className="p__golden">Antique Asylum was born out of a deep-rooted love for the exquisite craftsmanship and timeless beauty of antique furniture. Established 1972, our store has become a destination for antique enthusiasts and collectors seeking to embrace the allure of the past.</p>
         <button className="custom__button">know more</button>
       </div>
       </div>
       

    </div>
  )
}

export default About

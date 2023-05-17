import React from 'react'
import "./Footer.css"
import {BsInstagram,BsFacebook,BsLinkedin,BsPinterest} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer section__padding' id='contact'>
        <div className="footer__heading">
           <h1 className="headtext__red">Timeless Treasures: Discover the Beauty of Antique Furniture</h1>
        </div>
        <div className="footer__content">
           <div className="footer__contenta">
            <p className="p__heading">Contact us</p>
            <ul className="footer__list">
                <li>+4523523526</li>
                <li>counters</li>
                <li>links</li>
                <li>blog</li>
            </ul>


           </div>
           <div className="footer__contentb">
            <p className="p__heading">Social media</p>
              <div className="footer__icons">

            <BsInstagram size={40} color='#d62976'/>
            <BsFacebook size={40} color='darkblue'/>
            <BsLinkedin size={40} color='blue'/>
            <BsPinterest size={40} color='#c8232c'/>
              </div>
           </div>
           <div className="footer__contentc">
             <p className="p__heading">Company</p>
             <ul className="footer__list">
                <li>policy</li>
                <li>counters</li>
                <li>links</li>
                <li>blog</li>
            </ul>
           </div>
        </div>
        <p className="p__golden">2023 &#169; Antique Asylum All rights reserved</p>
      
    </div>
  )
}

export default Footer

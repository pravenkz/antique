import React, { useState } from 'react'
import "./Navbar.css"
import { images } from '../../constants'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

const Menu =()=>(
    <>
     <p><a href="#home" >Home</a></p>
        <p><a href="#about">About us</a></p>
        <p><a href="#customization">Customization</a></p>
        <p><a href="#find">Find us</a></p>
        <p><a href="#contact">Contact</a></p>
    </>
)

const Navbar = () => {
    const [menu,setMenu] = useState(false);
  return (
    <div className='navbar'>
        <div className="navbar__logo">
           <img src={images.logo} alt="logo" />
        </div>
        <div className="navbar__links">
            <Menu />
        </div>
        <div className="navbar__sign">
            <p><a href=''>Login / Register</a></p>
            <div></div>
            <p><a href=''>Explore</a></p>
        </div>
        
        <div className="navbar__menu">
        {menu?
         <AiOutlineClose size={27} onClick={()=>setMenu(false)}/>:
         <GiHamburgerMenu size={27} onClick={()=>setMenu(true)}/>
        }
        {menu&&(
            <div className="navbar__menu-container shadow-drop-2-center" >
               <div className="navbar__menu-container_links " onClick={()=>setMenu(false)}>
                <Menu />
               </div>
               <div className="navbar__menu-container_sign">
                <p>Login / Register</p>
               </div>
            </div>
        )}

        </div>
      
    </div>
  )
}

export default Navbar

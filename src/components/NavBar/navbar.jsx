import React from 'react'
import './navbar.css'
import menu from '../../assets/menu.png'

import {Link} from 'react-scroll';
import { useState } from 'react';


const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logoContainer">
      
        <span className="logoText">LUTHANDON.</span>
      </div>
     <div className="desktopMenu">
       <Link activeClass='active' to='intro' spy={true}  smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Home</Link> 
       <Link activeClass='active' to='skills' spy={true}  smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
       <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
       <Link activeClass='active' to='contact' spy={true}  smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>

     </div>
       <button className="desktopMenuBtn" onClick={()=> {  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}}>
         Contact Me
       </button>
      <img src={menu}alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
     <div className="navMenu" style={{ display:showMenu?  'flex':  'none'}}>
       <Link activeClass='active' to='intro' spy={true}  smooth={true} offset={-100} duration={500}className="listItem"onClick={()=>setShowMenu(false)}>Home</Link> 
       <Link activeClass='active' to='skills' spy={true}  smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>About</Link>
       <Link activeClass='active' to='works' spy={true}  smooth={true} offset={-100} duration={500} className=" listItem"onClick={()=>setShowMenu(false)}>Portfolio</Link>
       <Link activeClass='active' to='contact' spy={true}  smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Contact</Link>

     </div>
    </nav>
  )
}

export default Navbar
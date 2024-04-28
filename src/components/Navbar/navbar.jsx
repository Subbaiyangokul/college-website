import React, { useEffect, useState } from 'react';
import './navbar.css'
import { Link } from 'react-scroll';
import annauniversity from '../../assets/anna university.jpg'

const Navbar = () => {

  const [value , setValue] = useState([false]);

  useEffect (() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 50 ? setValue(true) : setValue(false);
    })
     
  },[])
  return (
    <div>
        <nav className={`container ${value ? "navchange" : ''}`}>
            <img src={annauniversity} className='university' alt='logo is available'/>
            <ul>
                <li>Home</li>
                <li><Link to='about' smooth={true} offset={-300} duration={500} >About</Link></li>
                <li><Link to='course' smooth={true} offset={-200} duration={500} >Course</Link></li>
                <li><Link to='cards' smooth={true} offset={-200} duration={500} >review</Link></li>
                <li><Link to='contact' smooth={true} offset={-250} duration={500} ><button className='button'>Contact Us</button></Link></li>
            </ul>

        </nav>
      
    </div>
  )
}

export default Navbar;

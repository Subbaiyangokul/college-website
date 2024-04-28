import React from 'react'
import './about.css'
import Ucen from '../../assets/ucen_1.jpg'

const About = () => {
  return (
    <div className='about'>
       
        <div className='left'>
            <img  className='img'src={Ucen} alt='image is unavailable'/>
        </div>
        <div className='right'>
            <h1>Anna University</h1>
            <h2>we send qualify engineers to our nation</h2>
            <p>UCE Nagercoil is situated in the heart of Nagercoil city, located in the southern-most tip of Tamil Nadu and India. It's a constituent college of Anna University, Chennai and funded by Tamil Nadu State Government. The institution was established in the year 2009 with a goal of catering to the needs for deserving engineering students by providing quality technical education.</p>
            <p>The institution offers under graduate engineering programmes in Civil, CSE, ECE, EEE, IT and Mechanical besides MBA through distance education mode. Research programmes leading to doctoral degree are also offered in the above mentioned departments and also in Chemistry, Physics, Mathematics and English.</p>
        </div>
    </div>
  )
}

export default About

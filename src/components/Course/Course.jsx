import React from 'react'
import'./course.css';
import civil from '../../assets/civill.png'
import electrical from '../../assets/electrical.png'
import mechanical from '../../assets/mechanical.png'

const Course = () => {
  return (
  <div>
    
        <div className='courses container'>
            <div className='course'>
                <img  src={civil} alt='image not available'/>
                <div className='courseheading'><p className='coursepara'>computer engineering</p></div>
            </div>
            <div className='course'>
                <img className='courseimg'src={electrical} alt='image not available'/>
                <div className='courseheading'><p className='coursepara'>computer engineering</p></div>
            </div>
            <div className='course'>
                <img className='courseimg' src={mechanical} alt='image not available'/>
                <div className='courseheading'><p className='coursepara'>computer engineering</p></div>
            </div>
        </div>
    </div>
  )
}

export default Course

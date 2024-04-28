import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import './cards.css'
import computer from '../../assets/computer.png'
import nss from '../../assets/nss.jpg'
import sports from '../../assets/sports.jpg'
import independanceday from '../../assets/independenceday.jpg'
import collegeday from '../../assets/collegeday.jpg'

const Cards = () => {

const responsive = {
  mediaQuery: {
  
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
return (
  <div className="cards container">
    <Carousel responsive={responsive}>
    <div className="item">
        <img  src= {nss}className="image"/>
        <h2 className="itemheading">NSS CAMP</h2>
        <p>An Anna university constituent college of engineering nagercoil kanyakumari district</p>
      </div>
      <div className="item">
        <img  src= {sports}className="image"/>
        <h2 className="itemheading">SPORTS </h2>
        <p>An Anna university constituent college of engineering nagercoil kanyakumari district</p>
      </div>
      <div className="item">
        <img  src= {independanceday}className="image"/>
        <h2 className="itemheading">INDEPENDENCE DAY </h2>
        <p >An Anna university constituent college of engineering nagercoil kanyakumari district</p>
      </div>
      <div className="item">
        <img  src= {collegeday}className="image"/>
        <h2 className="itemheading">COLLEGE DAY</h2>
        <p >An Anna university constituent college of engineering nagercoil kanyakumari district</p>
      </div>
  
    </Carousel>
  </div>
)
}

export default Cards;
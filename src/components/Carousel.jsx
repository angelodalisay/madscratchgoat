import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image1 from '../assets/image1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

 function Arrow(props) {
     const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style, display: "block", background: "black" }}
         onClick={onClick}
       />
     );
   }

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />
      };

    return (
      <>  
      <div className="carousel-container">
      <div className="carousel">
        <Slider {...settings}>
          <div className="carousel-slide">
            <div className="img-container">
              <img src={image1} alt='DJ equipment' className="img"/>
              <p className="img-label">MAD SCRATCH<br /><span className="goat">G.O.A.T.</span></p>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="img-container">
              <img src={img2} alt='dancing woman' className="img"/>
              <p className="img-label">MAD SCRATCH<br /><span className="goat">G.O.A.T.</span></p>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="img-container">
              <img src={img3} alt='DJ at sound board' className="img"/>
              <p className="img-label">MAD SCRATCH<br /><span className="goat">G.O.A.T.</span></p>
            </div>
          </div>
          <div className="carousel-slide">
            <div className="img-container">
              <img src={img4} alt='hands raised in fog' className="img"/>
              <p className="img-label">MAD SCRATCH<br /><span className="goat">G.O.A.T.</span>T</p>
            </div>
          </div>
        </Slider>
        <div id='book-now'>
            <a href='#contact'>
              <button className='book-now'>BOOK NOW</button>
            </a>
        </div>
     </div>
     </div>
     </>    
    )
}   

export default Carousel
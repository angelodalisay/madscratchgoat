import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'

import Slider from 'react-slick'


function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <h2 id='header-2' >About Mad Scratch Goat</h2>

<div id="carousel-box">
<div className="carousel">

<Slider {...settings}>
  
<div className="box">
  <img src={img1} alt="" className="img" />
</div>

<div className="box">
<img src={img2} alt="" className="img" />
</div>

<div className="box">
<img src={img3} alt="" className="img" />
</div>

<div className="box">
<img src={img4} alt="" className="img" />
</div>

<div className="box">
<img src={img5} alt="" className="img" />
</div>

</Slider>

</div>
</div>

    <p id='paragraphs'>We are a team of passionate DJs who love to bring the party to life with our music. With years of experience under our belt, we know how to keep the crowd moving and create an unforgettable experience for everyone.</p>
    <p id='paragraphs'>Whether it's a wedding, corporate event, or private party, we have the expertise and equipment to make it a success. Contact us to learn more about our services and how we can make your next event a hit!</p>

    </>
  )
}

export default About
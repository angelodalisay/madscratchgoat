import React from 'react'
import Image1 from '../images/Image1.png'
import Image2 from '../images/Image2.png'
import Image3 from '../images/Image3.png'


function About() {

  return (
    <div>
    <h1 id='header-1'>About Us</h1>

    <div id="images-box">
    <img id='image1' src={Image1} alt="" />
    <img id='image2' src={Image2} alt="" />
    <img id='image3' src={Image3} alt="" />
    </div>

    <div id="chevron-box">
    <h1 id='chevrons'>❮</h1>
    <h1 id='chevrons' >❯</h1>
    </div>

    <p id='paragraphs'>We are a team of passionate DJs who love to bring the party to life with our music. With years of experience under our belt, we know how to keep the crowd moving and create an unforgettable experience for everyone.</p>
    <p id='paragraphs'>Whether it's a wedding, corporate event, or private party, we have the expertise and equipment to make it a success. Contact us to learn more about our services and how we can make your next event a hit!</p>

    </div>
  )
}

export default About
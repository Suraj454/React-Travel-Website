import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import mainImg2 from "../assets/About.jpg"
import Footer from '../Components/Footer'
import AboutCOmp from '../Components/AboutComp'


const About = () => {

  return (
    <>
      <Navbar />
      <Hero
        CName="hero-mid"
        heroImg={mainImg2}
        picClass="pic2"
        title="About"
        btnClass="hide"
      />

      <AboutCOmp/>
      <Footer/>

    </>
  )
}

export default About;

import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import mainImg2 from "../assets/Service.jpg"
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'

const Service = () => {
  return (
    <>
    <Navbar />
    <Hero
      CName="hero-mid"
      heroImg={mainImg2}
      picClass="pic3"
      title="Service"
      btnClass="hide"
    />
    <Trip/>
    <Footer/>

  </>
  )
}

export default Service

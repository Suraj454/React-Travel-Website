import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import mainImg3 from "../assets/Contact.jpg"
import Footer from '../Components/Footer'
import ContactFom from '../Components/ContactFom'

const Contact = () => {
  return (
    <>
    <Navbar />
    <Hero
      CName="hero-mid"
      heroImg={mainImg3}
      picClass="pic4"
      title="Contact"
      btnClass="hide"
    />
    <ContactFom/>
    <Footer/>

  </>
  )
}

export default Contact

import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import mainImg1 from "../assets/Home.jpeg"
import Destination from '../Components/Destianation'
import DestinationSecond from '../Components/Destination2'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'





const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        CName="hero"
        heroImg={mainImg1}
        picClass="pic1"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
       
      <Destination/>
      <DestinationSecond/>
      <Trip/>
      <Footer/>
     
  

    </>
  )
}

export default Home

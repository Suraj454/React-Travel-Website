import React from 'react'
import "./Destination.css"
import pic1 from "../assets/goa1.jpg"
import pic2 from "../assets/goa2.jpg"


const Destination = () => {
  return (
    <>

        <div className='destination'>
        <h1>Popular Desinations</h1>
            <p>Tours give you the opportunity to see a lot , within a time frame </p>

        <div className='first-des'>


            <div className='des-text'>
             <h2>Goa </h2>
             <p>Goa is India's smallest state by its geographical area and the fourth smallest by population.  
            The state has been a very important historical and cultural centre since ancient times.
            Goa is primarily known for its beautiful beaches which are engrossed with oscillating palm trees
             and an astonishing nightlife. It is a wonderful place embraced by joy & happiness only.
             The real beauty of Goa lies in its beautiful beaches, places of worship and world heritage architecture.
             </p>
            </div>

            <div className='image'>
            <img src={pic1} alt="pic1" />
            <img src={pic2} alt="pic1" />

            </div>



        </div>    

        </div>
    </>
  )
}

export default Destination;

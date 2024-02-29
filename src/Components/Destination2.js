import React from 'react'
import "./Destination2.css"
import pic1 from "../assets/manali1.jpg"
import pic2 from "../assets/manali2.jpg"


const DestinationSecond = () => {
  return (
    <>

      <div className='destination'>
        <div className='first-des-s'>


          <div className='des-text'>
            <h2>Manali, Himachal Pradesh</h2>
            <p>Manali is one of the most attractive tourist spot not only of Himachal Pradesh, but of International fame also. 
            Manali is synonymous streams and birdsong, forests and orchards and grandees of snow-capped mountains.
            Manali is the real starting point of an ancient trade route which crosses the Rohtang and Baralacha passes,
             and runs via Lahul and Ladakh to Kashmir while divergent road connects it with Spiti 
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

export default DestinationSecond;

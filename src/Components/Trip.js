import React from 'react'
import "./Trip.css";
import TripData from './TripData';
import Trip1 from "../assets/lakshwdeep.jpg";
import Trip2 from "../assets/ooty (3).jpg";
import Trip3 from "../assets/Chikmangluru.jpg";

const Trip = () => {
  return (
 <>
<div className='trip'>
    <h1>Recent Trips</h1>
    <p>You can discover unique destination using Google Maps. </p>

    <div className='tripcard'>

    <TripData
     image={Trip1}
     heading="Lakshadweep"
     text="Lakshadweep is home to serene beaches. Lakshadweep, the group of 36 islands is known for its exotic and sun-kissed beaches
      and lush green landscape. You can expect summer heat and the temperature 
        rising upto 32°C. Lakshadweep is also very popular among relaxation-seekers."
    />

<TripData
     image={Trip2}
     heading="Ooty"
     text=" Officially called Ootacamund, the hill-town is better known by its nicknameOoty. Ooty is a scenic hill town in southern India. 
     It is surrounded by the Nilgiri Hills and is popularly known as the Queen of Hills It is loved by Bollywood directors,
    families, for its mountains, lakes, gardens, and waterfalls."
    />

<TripData
     image={Trip3}
     heading="Chikmagalur "
     text=" Chikmagalur is a hill station in Karnataka, a state in southwest India. A hill station at the foothills of 
      the Mullayanagiri peak in the Western Ghats in Karnataka,  Chikmagalur entices with trekking trails, 
      coffee plantations, rivers, waterfalls, temples and wildlife."
    />




    </div>

  </div>


 </>
  )
}

export default Trip;

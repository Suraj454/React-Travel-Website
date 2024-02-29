import React from 'react'
import "./AboutComp.css"
import aboutImg from "../assets/grid2.jpg"

const AboutCOmp = () => {
  return (
    <>
      <div className='about'>
        <div className='first-about'>
          <div className='about-info'>
            <h2>About Us </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit autem quam et placeat
              aliquid quas nesciunt id necessitatibus, tempora saepe modi omnis doloribus nisi porro voluptatem ea commodi.
              Libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe, esse obcaecati cupiditate vel commodi maiores,
              nesciunt eum ducimus quibusdam doloribus iusto? Possimus, voluptate!</p>
          
          </div>

          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutCOmp;

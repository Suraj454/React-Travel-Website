import React from 'react';
import "./Hero.css";



function Hero (props) {
  return (

       <div className={props.CName}>
        <img src={props.heroImg} alt='HeroImg' className={props.picClass}/>
        <div className='hero-txt'>
          <h1 >{props.title}</h1>
          <p>{props.text} </p>
          <a href={props.url} className={props.btnClass}> {props.buttonText} </a>
        </div>
       </div>
    
  )
}

export default Hero;

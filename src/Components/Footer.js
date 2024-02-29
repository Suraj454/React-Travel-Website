import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
       <div className='footer'>
        <div className='top'>

            <div>
               <h1>SAFAR</h1>
               <p>Choose Your Favourite Destination</p>
            </div>

             <div>
                <a href='/'><i class="fa-brands fa-instagram"></i> </a>
                <a href='/'><i class="fa-brands fa-facebook"></i> </a>
                <a href='/'><i class="fa-brands fa-twitter"></i> </a>
                <a href='/'> </a>
             </div>
        </div>

     
        <div className='bottom'>
        
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href='/'>GitHub</a>
                <a href='/'>Issues</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
            </div>

            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Trouble Shooting</a>
                <a href='/'>Contact Us</a>
            </div>

            <div>
                <h4>Others</h4>
                <a href='/'>Terms of Service</a>
                <a href='/'>Privacy Policy</a>
                <a href='/'>License</a>
               
            </div>

        </div>

       </div>
    </>
  )
}

export default Footer;

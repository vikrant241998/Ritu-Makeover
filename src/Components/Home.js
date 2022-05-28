import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

export default function Home() {

  return (
    <>
    <div className='home-container'>
      <div className="home-row-one">
        <h1><span>R</span>itu <span>M</span>akeover</h1>
        <p>
          If you never try, you will never look hot.  <br />
          When it comes to makeup, there are no rules. <br />
          Beautify your face to take years off your look. <br />
          So let’s make up our minds. <br />
          Follow your dreams.
        </p>
        
        
        <div className='btn'>
          <button className='btn-left'> <NavLink to="portfolio" >Gallery</NavLink></button>
          <button className='btn-right'><NavLink to="contact">Contact</NavLink></button>
          
        <img src="../images/home-desk.png" alt="logo"/> 
        </div>

          <div className="ul-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/"> <FaFacebookF /> </a>
            </li>
            <li>
              <a href="https://www.instagram.com/"> <FaInstagram /> </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/"> <FaLinkedinIn /> </a>
            </li>
            <li>
              <a href="https://www.twitter.com/"> <FaTwitter /> </a>
            </li>
          </ul>
      </div>
      </div>



      <div className="home-row-two">
      <img src="../images/logo.jpg" alt="logo" className='controller' /> 
      </div>

    </div>
    </>
  )
}

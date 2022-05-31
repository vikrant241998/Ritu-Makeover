import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarLink() {

  return (
    <>
    <div className='main-menu'>
    <div className="logo">
      <Link to="/"> <img src="../images/logo.jpg" alt="logo" /> </Link>
      <h3>
        Ritu Makeover
        </h3>

    </div>

      <ul className='List'>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="about">About</Link>
        </li>

        <li>
          <Link to="portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="services">Services</Link>
        </li>

        <li>
          <Link to="contact">Contact</Link>
        </li>

        <li>
          <a href="https://drive.google.com/file/d/1uAc9mhP0JZ8YtivOgEx2SO4FoGveCpS7/view?usp=sharing">Resume</a>
        </li>
      </ul>

      {/* <button className='btn'>BTN</button> */}
    </div>
    </>
  )
}

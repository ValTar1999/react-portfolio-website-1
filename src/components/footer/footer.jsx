import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='permaLinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com"><FaFacebookF/></a>
        <a href="https://www.instagram.com"><FiInstagram/></a>
        <a href="https://www.twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className='foote__copyright'>
        <small>&copy; EGATOR Tutorials. All rigts reserved.</small>
      </div>
    </footer>
  )
}

export default footer
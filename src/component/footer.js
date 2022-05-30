import {React, useEffect} from 'react'
import { GrTwitter } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import {gsap, Power4, Timeline} from 'gsap';

const Footer = function() {

  let tl = gsap.timeline({defaults: {ease: "Power4.inOut", duration: 2}})

useEffect(() => {
  tl.to('.Footer', { opacity: 1}, "-=2")

  }
)

  return (
    <div className='Footer'> 
    <h1>CREATIVE AGENCY</h1>

    <h1>SHINING@GMAIL.COM</h1>

    <ul>
        <li><GrTwitter /> </li>
        <li><AiFillInstagram /></li>
        <li><FaTelegram /></li>
    </ul>
    </div>
  )
}

export default Footer;

import React, { useRef, useEffect } from "react";
import '../component/styles.css';
import {gsap, Power3} from 'gsap';

const Navbar = function () {
    const slide = useRef();

    useEffect(() => {
        gsap.to(slide.current, {stagger:2.1, opacity: 1, y:20, ease: Power3.easeInOut });
      });

  return (
    <div ref={slide} className="Navbar">
        <h1>SHINING</h1>

        <ul>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
        </ul>

        <ul>
            <li>099 444 44 44</li>
            <li>Order a call back</li>
        </ul>
    </div>
  );
}

export default Navbar;
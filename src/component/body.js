import {React, useRef, useEffect} from 'react';
import { FiArrowRight }  from 'react-icons/fi';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/3.jpg';
import {gsap, Power4, Timeline} from 'gsap';


const Home = function() {

   

  let tl = gsap.timeline({defaults: {ease: "Power4.inOut", duration: 2}})

useEffect(() => {
  tl.to('.content', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
  tl.to('.img-1, .img-2, .img-3, .img-4', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
  tl.to('h3', {opacity: 1, duration: 1})
});

    const button = ['Buy Now'];
    console.log(button)
    
  return (
    <div className='Home'>
        <div className='img-1'>
        <img src={Image1} alt={Image1} />
        </div>
       <h3> Home <FiArrowRight /> Brands </h3>
       <div className='content'>
        BUY THIS NOW <br />
        <div className='img-2'>
        <img src={Image2} alt={Image1} />
        </div> 
        <h4>Brand</h4>
        <p>Large collections of men and <br /> women shoes at affordable price</p>
        BECOME <button>{button}</button>  <br /> 
        <div className='img-3'>
        <img src={Image3} alt={Image1} />
        </div>
        <div className='shin'>
        SHINING
        </div>
        <div className='img-4'>
        </div>
       </div>
    </div>
    
  )

  
}



export default Home;

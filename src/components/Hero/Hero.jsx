import "./hero.scss"
import {motion} from "framer-motion"
import { useEffect,useState } from "react";

import Typed from 'typed.js';



const textVariants={
  initial:{
    x:-500,
    opacity:0,

  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}
const sliderVariants={
  initial:{
    x:0,
    

  },
  animate:{
    x:"-220%",
    transition:{
     repeat:Infinity,
     repeatType:"mirror",
      duration:40,
    
    }
  }
}

export default function Hero() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    // Options for Typed.js
    const options = {
      strings: ['Freelancer','Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'Design Enthusiast'],
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      onComplete: () => {
        // Optional callback when typing is complete
        // You can perform any action here when typing of a string is complete
      }
    };

    // Initialize Typed.js
    const typed = new Typed('#text', options);

    // Cleanup function to destroy Typed.js instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []); 

  
  return (
    <div className="hero">
      <div className="wrapper">
{/*<div className="planet"></div>*/}
      <img className="hero-img" src="hero12.png"/>
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>Hello,I'm</motion.h2>
        <motion.h1 variants={textVariants}>Senthil Pandi</motion.h1>
        <motion.h2 >And I'm a <span className="text" id="text" dangerouslySetInnerHTML={{ __html: typedText }} /></motion.h2>
        
         
         

        <motion.img variants={textVariants} animate="scrollButton"  src="/scroll.png" alt="" />
      </motion.div>
      </div>
       <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        FREELANCER FULL STACK DEVELOPER
       </motion.div>
      

    </div>
  )
}

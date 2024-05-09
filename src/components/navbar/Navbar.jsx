import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'
export const Navbar = () => {
  return (
    <div className="navbar">
        {/*sidebar*/ }
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} >Portfolio</motion.span>
            <div className="social">
                
                <a href='https://github.com/senthilsp41'><img className='github' src="/github.png" alt=""/></a>
                <a href='https://senthilsp41.github.io/Portfolio/'><img src="/portfolio.png" alt=""/></a>
                <a href='https://linkedin.com/in/senthil-pandi-630184191'><img src="/linkedin.png" alt=""/></a>
                <a href='https://www.instagram.com/senthil__sp/'><img src="/instagram.png" alt=""/></a>

            </div>
        </div>
    </div>
  )
}

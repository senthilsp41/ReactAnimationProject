import { useRef } from "react"
import "./skills.scss"
import {motion,useInView} from "framer-motion"
const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Skills = () => {
    const ref=useRef() 
    const isInView= useInView(ref,{margin:"-100px"})
    return(
        <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={isInView &&  "animate"}>
           
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                <h1><b>Embark on a Journey</b> </h1>
                </div>
                <div className="title">
                <h1>Through My Skills </h1>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>FrontEnd Development</h2>
                    <ul> <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li></ul>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                    <h2>BackEnd Development</h2>
                    <ul> <li>Python</li>
              <li>Django</li>
              </ul>
              
                </motion.div>
                <motion.div className="box"  whileHover={{background:"lightgray",color:"black"}}>
                    <h2>DataBase</h2>
                    <ul> <li>SQL</li>
              <li>MYSQL</li>
              </ul>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}
export default Skills
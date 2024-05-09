import { useRef } from "react"
import "./projects.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"


const items=[
    {
        id:1,
        title:"Full-Stack Ecommerce Website",
        img:"https://repository-images.githubusercontent.com/287455106/c63d3ce4-8b1d-4ab9-a4c5-039ee78e784a",
        desc:"Built a dynamic ecommerce platform with robust user authentication product catalog shopping cart  and order processing functionalities",
        link: "https://github.com/senthilsp41/Ecommerce_Website"
    },
    {
        id:2,
        title:"Responsive Personal Portfolio Website",
        img:"PersonalPortfolio.png",
        desc:"Developed a responsive personal portfolio website using  HTML, CSS, and JavaScript",
        link: "https://senthilsp41.github.io/Portfolio/"
    },
    {
        id:3,
        title:"To-Do-List App",
        img:"To-do-list.png",
        desc:"Developed a web-based to-do list application using HTML, CSS, and JavaScript",
        link:"https://senthilsp41.github.io/TO-DO_LIST/"
    },
    {
        id:4,
        title:"React Animated Portfolio",
        img:"ReactPortfolio.png",
        desc:"Built a dynamic ecommerce platform with robust user authentication product catalog shopping cart  and order processing functionalities",
        link: "https://senthilsp.netlify.app"
    },
]

const Single=({item})=>{
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref
        //offset:["start start","end start"]
    })
    const y= useTransform(scrollYProgress,[0,1],[-300,300])
    
    return(
        <section >
           <div className="container">
            <div className="wrapper">
                <div className="imgContainer" ref={ref}>
                <img src={item.img} alt=""/>
                </div>
           
            <motion.div className="textContainer" style={{y}} >
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.link}><button>See Demo</button></a>
            </motion.div>
            </div>
           </div>
        </section>
    )
}
export default function Projects() {
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]})
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
  return (
    <div className="projects" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div  style={{scaleX}}className="progressbar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

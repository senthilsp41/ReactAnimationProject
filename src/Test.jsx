import {
    
    motion} from "framer-motion"


export default function Test() {
    const varients={
        visible:(i)=>({
            opacity:1,
            x:100,
            transition:{delay:i * 0.3},
        }),
        hidden:{opacity:0},
    };
    const items=[
        "item1","item2","item3","item4"
    ]
  return (
    <div className='course'>
        <motion.ul initial="hidden" animate="visible" variants={varients}>
            {items.map((item,i) =>(<motion.li variants={varients}  key={item} custom={i}>
                {item}</motion.li>))}
        </motion.ul>
    
    </div>
  )
}

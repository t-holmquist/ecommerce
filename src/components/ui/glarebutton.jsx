import { motion } from "motion/react"
import { useState } from "react"

const GlareButton = (
    {
        title,
        titleClassname
    }

) => {


  const [isActive, setIsActive] = useState(false);

  return (
    <button 
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="relative text-xl cursor-pointer font-bold w-full shadow-lg text-white overflow-clip bg-primary z-10 py-2 rounded-lg">
        <motion.div 
        initial={{
          y: '-100%'
        }}
        animate={isActive ? {y: '80%'} : {y: '-105%'}}
        transition={{
          duration: 0.4,
          ease: 'circInOut',
        }}
        className="absolute top-0 left-0 w-full h-full glarebutton-gradient blur-sm rounded-full"/>
        <motion.div 
        initial={{
          x: '-115%'
        }}
        animate={{
          x: '110%'
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          
        }}
        className="absolute top-0 left-0 w-full h-full opacity-70 blur-2xl bg-slate-50 "/>
        <p className={`${titleClassname}`}>{title}</p>
      </button>
  )
}

export default GlareButton
import { motion } from "motion/react"

const GlareButton = (
    {
        title,
        titleClassname
    }

) => {
  return (
    <button className="relative text-xl font-bold w-full shadow-lg text-white overflow-clip bg-primary z-10 cursor-default py-2 rounded-lg">
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
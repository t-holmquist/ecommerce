import { motion } from "motion/react"

const GlareButton = (
    {
        title,
        titleClassname
    }

) => {
  return (
    <button className="relative text-xl font-bold w-full text-white  border bg-accent z-10 cursor-default border-brandBorder py-2 rounded-lg">
        <motion.div 
        initial={{
          x: '-130%'
        }}
        animate={{
          x: '220%'
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          
        }}
        className="absolute top-0 left-0 w-full h-full bg-slate-100 opacity-60 blur-2xl"/>
        <p className={`${titleClassname}`}>{title}</p>
      </button>
  )
}

export default GlareButton
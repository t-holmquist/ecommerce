import Button from "./button"
import { motion } from "motion/react"

const Shufflecard = () => {
  return (
    <motion.div 
    initial={{y: -10}}
    animate={{y: 0}}
    className='relative rounded-2xl w-full p-4 bg-linear-to-r dark:border dark:border-slate-600 from-primary/50 to-secondary/40 shadow'>
        <div className='flex flex-col gap-4 max-w-[60%]'>
            <h1 className='font-oswald text-3xl text-white'>JUST ARRIVED</h1>
            <p className='text-white font-source-sans'>Dance like this guy in our new two-piece red super-suit</p>
            <Button title="Shop now" />
            <img className='absolute bottom-0 right-0 brightness-110' width={170} height={200} src="/img/Tenor-unscreen.gif" alt="model with tshirt" />
        </div>
    </motion.div>
  )
}

export default Shufflecard
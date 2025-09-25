import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react';
import { Switch } from './ui/switch';

const ProjectInfo = () => {

    const [isActive, setIsActive] = useState(false);

    const highlights = [
        'Add/remove items from productlist/cart',
        'Custom highlight/gradient animation on checkout button',
        'Layout animation of product carts',
        'Cart price calculator',
        'Empty cart state',
        'Heart/like animation',
        'Dark/light mode toggle'
    ];

  return (
    <section className='absolute left-14 top-10 space-y-4'>
    
        <div className='flex gap-3 items-center'>
            <button
            onClick={() => setIsActive(!isActive)}
            className='border border-text-gray bg-white hover:bg-slate-200 px-2 py-1 rounded-md cursor-pointer font-source-sans font-semibold'>About this project</button>
            {/* Toggles dark/light mode */}
            <Switch />
        </div>
        <AnimatePresence>
            {isActive && (
                <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 10}}
                className='rounded-2xl space-y-3 backdrop-blur-[2px] dark:text-white max-w-md w-full p-4 border border-text-gray shadow-lg'>
                    <h2 className='text-xl font-oswald'>E-commerce hobby project</h2>
                    <p className='font-source-sans text-sm font-semibold'>Functionality highlights:</p>
                    <ul className='flex flex-col gap-1 font-source-sans text-sm'>
                        {highlights.map((highlight, idx) => (
                            <li key={idx} className='list-disc list-inside'>{highlight}</li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  )
}

export default ProjectInfo
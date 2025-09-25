import { useState } from 'react';
import { motion } from 'motion/react';


export const Switch = () => {
  
  const [isDark, setIsDark] = useState(false);

  const handleToggleDarkMode = () => {

    if (document.documentElement.classList.contains('dark')) {

        document.documentElement.classList.remove('dark')
        setIsDark(false)

    } else {

      document.documentElement.classList.add('dark')
      setIsDark(true)
    }

  }

  return (
    <div className="flex items-center gap-1.5">
      <p className='text-sm font-source-sans dark:text-white'>Light</p>
      <button onClick={handleToggleDarkMode} className={`flex cursor-pointer ${isDark ? 'bg-primary' : 'bg-slate-600'} items-center px-1 w-10 h-5 rounded-full`}
      style={{
        justifyContent: isDark ? "flex-end" : "flex-start"
      }}
      >
        <motion.div layout className="bg-slate-300 h-3 w-3 rounded-full"/>
      </button>
      <p className='text-sm font-source-sans dark:text-white'>Dark</p>
    </div>
  );
}
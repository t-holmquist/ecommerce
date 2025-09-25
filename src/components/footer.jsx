import { tabItems } from '../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 rounded-b-4xl p-4 w-full bg-white dark:bg-black dark:border-t dark:border-slate-600 '>
        <div className='flex justify-between px-4'>
          {tabItems.map(({id, icon, title}) => (
            <div 
            key={id}
            className='flex cursor-pointer flex-col gap-1 justify-center items-center'
            >
              <FontAwesomeIcon className={id == 0 ? 'text-accent' : 'text-text-gray'} size='xl' icon={icon}/>
              <p className='text-text-gray text-sm font-source-sans'>{title}</p>
            </div>
          ))}  
        </div>
    </footer>
  )
}

export default Footer
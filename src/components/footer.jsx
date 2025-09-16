import { tabItems } from '../data/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 rounded-b-4xl p-4 w-full bg-white '>
        <div className='flex justify-between px-4'>
          {tabItems.map(({id, icon, title}) => (
            <div 
            key={id}
            className='flex cursor-pointer flex-col gap-1 justify-center items-center'
            >
              <FontAwesomeIcon className={id == 0 ? 'text-blue-500' : 'text-text-gray'} size='xl' icon={icon}/>
              <p className='text-text-gray text-sm'>{title}</p>
            </div>
          ))}  
        </div>
    </footer>
  )
}

export default Footer
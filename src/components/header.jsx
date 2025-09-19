import SearchBar from './ui/searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'motion/react'


const Header = ({setCartIsVisible, cartProducts}) => {
  return (
    <div className='flex items-center gap-2 justify-between'>
        <SearchBar />
        <button onClick={() => setCartIsVisible(true)} className='relative flex z-10 items-center justify-center cursor-pointer rounded-full bg-white w-12 h-12'>
          <FontAwesomeIcon size='lg' icon={faShoppingCart}/>
          {/* Cart item counter. If there is more than one item then display counter */}
          {cartProducts.length > 0 && (
            <motion.div 
            initial={{y: 4}}
            animate={{y: 0}}
            className='absolute flex items-center justify-center top-0 text-sm right-0 bg-red-500 text-white font-source-sans rounded-full w-5 h-5'>{cartProducts.length}</motion.div>
          )}
        </button>
    </div>
  )
}

export default Header
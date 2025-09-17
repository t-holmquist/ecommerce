import React from 'react'
import SearchBar from './ui/searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Header = ({setCartIsVisible}) => {
  return (
    <div className='flex items-center gap-2 justify-between'>
        <SearchBar />
        <button onClick={() => setCartIsVisible(true)} className='flex z-10 items-center justify-center cursor-pointer rounded-full bg-white w-12 h-12'>
        <FontAwesomeIcon size='lg' icon={faShoppingCart}/>
        </button>
    </div>
  )
}

export default Header
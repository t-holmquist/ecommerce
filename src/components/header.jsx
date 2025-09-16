import React from 'react'
import SearchBar from './ui/searchbar'
import Cart from './ui/cart'

const Header = () => {
  return (
    <div className='flex items-center gap-2 justify-between'>
        <SearchBar />
        <Cart />
    </div>
  )
}

export default Header
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const CartModal = () => {
  return (
    <section className='absolute p-4 inset-0 z-20 bg-linear-to-b from-[#c1d3f5] to-[#f3f1f4]'>
      <div className='flex justify-between px-4 items-center gap-4'>
        <div className='flex rounded-full w-10 h-10 bg-white items-center justify-center shadow-md'>
          <FontAwesomeIcon size='lg' icon={faArrowLeft}/>
        </div>
        <h1 className='font-oswald text-3xl'>Cart</h1>
      </div>
      {/* Cart items */}
      
    </section>
  )
}

export default CartModal;
import { faArrowLeft, faBox, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import GlareButton from './glarebutton';
import { AnimatePresence, motion } from 'motion/react';

const CartModal = (
  {
    setCartIsVisible,
    setCurrentProducts,
    currentProducts,
    setCartProducts,
    cartProducts,

  }) => {


    // Tracks the total cart price 
    const [totalCartPrice, setTotalCartPrice] = useState(0)

    // Checks price and update the totalCartPrice depending on changes in the products in the cart
    useEffect(() => {

      let totalItemCost = 0;

      cartProducts.forEach((item) => {
        
        totalItemCost += item.price

      })

      setTotalCartPrice(totalItemCost)

    }, [cartProducts])


    const removeFromCart = (id) => {   

      // Get the item to add to card with a specific id that the user pressed on.
      const itemToAddToProducts = cartProducts.find((product) => product.id == id);
      
      // Add the cart item to the products so that it is available again.
      setCurrentProducts([...currentProducts, itemToAddToProducts])

      // Remove the item from the cart
      setCartProducts([...cartProducts].filter((item) => item.id != id))
  }


  return (
    <section className='absolute p-4 space-y-6 inset-0 z-20 bg-linear-to-b from-[#c1d3f5] to-[#f3f1f4] dark:from-[#062334] dark:to-[#091a3c]'>
      <div className='flex justify-between items-center gap-4'>
        <button onClick={() => setCartIsVisible(false)} className='flex cursor-pointer rounded-full w-10 h-10 bg-white items-center justify-center shadow-md'>
          <FontAwesomeIcon size='lg' icon={faArrowLeft}/>
        </button>
        <p className='font-source-sans dark:text-white'>{cartProducts.length} items total</p>
        <h1 className='font-oswald text-3xl dark:text-white'>Cart</h1>
      </div>
      {/* Cart items renders if it is NOT empty */}
      <AnimatePresence>
      {cartProducts.length > 0 ? (
        <section>
            <ul className='flex flex-col gap-4'>
                {cartProducts.map(({id, imgUrl, size, color, brand, price, title}) => (
                  <motion.li 
                  exit={{opacity: 0, y: 10}}
                  layout
                  key={id} className='bg-white dark:bg-slate-800 dark:border dark:border-slate-600 dark:text-white relative rounded-2xl p-2 shadow'>
                    {/* Delete from cart button */}
                    <button onClick={() => removeFromCart(id)} className='absolute bg-slate-200 dark:bg-transparent dark:border dark:border-slate-600 w-6 h-6 hover:bg-red-500 hover:text-white rounded-md cursor-pointer top-2 right-3'>
                      <FontAwesomeIcon size='xs' icon={faX}/>
                    </button>
                    {/* image and detail text */}
                    <div className='flex items-center gap-3'>
                      <img width={60} height={60} src={imgUrl} alt={title} />
                      <div className='flex flex-col gap-1'>
                        <h2 className='font-oswald text-lg'>{title}</h2>
                        <p className='text-xs font-source-sans'>{brand}</p>
                        <div className="flex items-center gap-2 font-semibold font-source-sans text-xs">
                          <p>Color: </p>
                          {/* Tailwind style transpilaton issue causes the need to use inline style for the color. */}
                          <div style={{backgroundColor: color}} className="rounded-full w-3 h-3 border border-text-gray"></div>
                          <p className="font-semibold font-source-sans text-xs">Size: <span className="font-normal">{size}</span></p>
                          <p className="font-semibold font-source-sans text-xs">Price: <span className="font-normal">{`$${price} USD`}</span></p>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
            </ul>
        </section>
      // Empty cart state
      ) : (
        <div className='flex flex-col items-center gap-6'>
          <h1 className='font-oswald text-2xl dark:text-white'>Your cart is empty</h1>
          <div className='flex items-center justify-center rounded-full bg-linear-to-r bg-slate-200 w-36 h-36'>
            <motion.div
            initial={{y: -4}}
            animate={{y: 4}}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
              ease: 'easeInOut'
            }}
            >
              <FontAwesomeIcon className='text-primary' size='3x' icon={faBox}/>
            </motion.div>
          </div>
          <button onClick={() => setCartIsVisible(false)} className='mt-4 text-sm font-source-sans cursor-pointer py-1 px-2 text-white bg-black dark:bg-white dark:text-black w-fit rounded-md'>
            Continue shoppping
          </button>
        </div>
      )}
      </AnimatePresence>
      {/* Price calc and checkout */}
      <motion.div layout>
        <section className='flex flex-col gap-4 font-source-sans'>
          <div className='flex justify-between'>
            <p className='text-text-gray'>Sub total</p>
            <p className='dark:text-white'>{`$${totalCartPrice} USD`}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-text-gray'>Shipping & Tax</p>
            <p className='dark:text-white'>{cartProducts.length > 0 ? '$15 USD' : '$0 USD'}</p>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold dark:text-white'>Total</p>
            {/* If there are products in cart then set price to include the shipping tax fee */}
            <p className='font-bold dark:text-white'>{`$${totalCartPrice + (cartProducts.length > 0 ? 15 : 0)} USD`}</p>
          </div>
        </section>
        <div className='mt-5'>
          {cartProducts.length > 0 && (
            <GlareButton title={'Checkout'} />
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default CartModal;
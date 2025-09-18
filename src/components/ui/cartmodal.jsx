import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { initialcartContent } from '../../data/data';
import Button from './button';

const CartModal = (
  {
    setCartIsVisible,
    setCurrentProducts,
    currentProducts,
    setCartProducts,
    cartProducts,

  }) => {


    const removeFromCart = (id) => {   

      // Get the item to add to card with a specific id that the user pressed on.
      const itemToAddToProducts = cartProducts.find((product) => product.id == id);
      
      // Add the cart item to the products so that it is available again.
      setCurrentProducts([...currentProducts, itemToAddToProducts])

      // Remove the item from the cart
      setCartProducts([...cartProducts].filter((item) => item.id != id))
  }

  

  return (
    <section className='absolute p-4 space-y-6 inset-0 z-20 bg-linear-to-b from-[#c1d3f5] to-[#f3f1f4]'>
      <div className='flex justify-between items-center gap-4'>
        <button onClick={() => setCartIsVisible(false)} className='flex cursor-pointer rounded-full w-10 h-10 bg-white items-center justify-center shadow-md'>
          <FontAwesomeIcon size='lg' icon={faArrowLeft}/>
        </button>
        <h1 className='font-oswald text-3xl'>Cart</h1>
      </div>
      {/* Cart items. */}
      <section>
          <div className='flex flex-col gap-4'>
            {cartProducts.map(({id, imgUrl, size, color, brand, price, title}) => (
              <div key={id} className='bg-white relative rounded-2xl p-2 shadow'>
                {/* Delete from cart button */}
                <button onClick={() => removeFromCart(id)} className='absolute cursor-pointer top-2 right-3'>
                  <FontAwesomeIcon color='gray' icon={faX}/>
                </button>
                {/* image and detail text */}
                <div className='flex items-center gap-3'>
                  <img width={60} height={60} src={imgUrl} alt="" />
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
              </div>
            ))}
          </div>
      </section>
       {/* TODO: Check current cart items (not from the map function) and calculate the price of all the items  */}
      {/* Price calc and checkout */}
      <section className='flex flex-col gap-4 font-source-sans'>
        <div className='flex justify-between'>
          <p className='text-text-gray'>Sub total</p>
          <p>1234</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-text-gray'>Shipping & Tax</p>
          <p>15</p>
        </div>
        <div className='flex justify-between'>
          <p>Total</p>
          <p>1400</p>
        </div>
      </section>
      <Button classname={'w-full'} title={'Checkout'}/>
    </section>
  )
}

export default CartModal;
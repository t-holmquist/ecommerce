import LikedHeart from "./ui/LikedHeart"
import { motion } from "motion/react";

export const ProductList = (
  {
    setCurrentProducts, 
    currentProducts, 
    setCartProducts,
    cartProducts,
  }) => {

  const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    hidden: {}
  }

  const productVariant = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: 10}
  }

  const addToCart = (id) => {   

    // Get the item to add to card with a specific id that the user pressed on.
    const itemToAdd = currentProducts.find((product) => product.id == id);

    // Update the cart item state with the item to add
    setCartProducts([...cartProducts, itemToAdd])

    // Remove the product from the products data to simulate that the stock is empty
    setCurrentProducts([...currentProducts].filter((item) => item.id != id))
    
  }

  return (
      <motion.ul 
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-4">
          {currentProducts.map(({id, imgUrl, size, color, brand, price, title}) => (
            <motion.li 
            variants={productVariant}
            key={id} 
            className="relative shadow rounded-2xl bg-white p-2">
              <img className="absolute -right-2 bottom-0 brightness-110" src={imgUrl} width={100} height={120} alt="" />
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="font-oswald text-lg">{title}</h2>
                <LikedHeart />
              </div>
              <div className="flex flex-col gap-1 space-y-3">
                {/* Brand */}
                <div className="rounded-sm border mt-1 px-1 w-fit border-slate-300">
                  <p className=" font-source-sans text-xs">{brand}</p>
                </div>
                {/* Details */}
                <div className="space-y-1">
                  <p className="font-semibold font-source-sans text-xs">Size: <span className="font-normal">{size}</span></p>
                  <div className="flex items-center gap-2 font-semibold font-source-sans text-xs">
                    <p>Color: </p>
                    {/* Tailwind style transpilaton issue causes the need to use inline style for the color. */}
                    <div style={{backgroundColor: color}} className="rounded-full w-4 h-4 border border-text-gray"></div>
                  </div>
                  <p className="font-semibold font-source-sans text-xs">Price: <span className="font-normal">{`$${price} USD`}</span></p>
                </div>
              </div>
              {/* The Button gets onclick function with specific product id to get it from the mock database */}
              <button onClick={() => addToCart(id)} className={'text-xs mt-4 font-source-sans cursor-pointer py-1 px-2 text-white bg-black hover:bg-slate-700 w-fit rounded-md'}>Add to cart</button>
            </motion.li>
          ))}
      </motion.ul>
  )
}

export default ProductList
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Shufflecard from './components/ui/shufflecard'
import ProductList from './components/productList'
import CartModal from './components/ui/cartmodal'
import { useState } from 'react'
import { initialcartContent, initialProducts } from './data/data'
import ProjectInfo from './components/projectInfo'



function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  // Product and cart state passed to productlist and cartModal so those components can update data
  // The state is initialized with some products and an empty cart array
  const [currentProducts, setCurrentProducts] = useState(initialProducts);
  const [cartProducts, setCartProducts] = useState(initialcartContent);

  return (
    <div className='min-h-screen flex justify-center pt-8 custom-svg-bg bg-white dark:bg-slate-800'>
      <ProjectInfo />
      <section className='relative overflow-clip shadow-2xl rounded-4xl w-[403px] h-[798px] border border-slate-400 bg-linear-to-b from-[#c1d3f5] to-[#f3f1f4] dark:from-[#020512] dark:to-[#091a3c]'>
        {/* CartModal is rendered if button on header is pushed */}
        {cartIsVisible && (
          <CartModal 
            setCartIsVisible={setCartIsVisible} 
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            currentProducts={currentProducts}
            setCurrentProducts={setCurrentProducts}
            />
        )}
        <div className='flex flex-col gap-4 p-3'>
          <Header setCartIsVisible={setCartIsVisible} cartProducts={cartProducts} />
          <Shufflecard />
          <section className='space-y-4'>
            <h2 className='font-oswald text-2xl dark:text-white'>Products</h2>
            {/* ProductList can change contents of product and cart data */}
            <ProductList 
              setCurrentProducts={setCurrentProducts} currentProducts={currentProducts}
              setCartProducts={setCartProducts} cartProducts={cartProducts}
              />
          </section>
        </div>
        <Footer/>
      </section>
    </div>
  )
}

export default App

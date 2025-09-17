import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Shufflecard from './components/ui/shufflecard'
import ProductList from './components/productList'
import { products } from './data/data'
import CartModal from './components/ui/cartmodal'
import { useState } from 'react'


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(true);


  return (
    <div className='min-h-screen flex justify-center pt-4 custom-svg-bg'>
      <section className='relative overflow-clip shadow-2xl rounded-4xl w-[403px] h-[790px] border border-slate-300 bg-linear-to-b from-[#c1d3f5] to-[#f3f1f4]'>
        {/* CartModal is rendered if button on header is pushed */}
        {cartIsVisible && (
          <CartModal />
        )}
        <div className='flex flex-col gap-4 p-3'>
          <Header setCartIsVisible={setCartIsVisible} />
          <Shufflecard />
          <section className='space-y-4'>
            <h2 className='font-oswald text-2xl'>Products</h2>
            <ProductList apperalProducts={products}/>
          </section>
        </div>
        <Footer/>
      </section>
    </div>
  )
}

export default App

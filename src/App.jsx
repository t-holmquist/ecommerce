import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Shufflecard from './components/ui/shufflecard'
import ProductList from './components/productList'
import { products } from './data/data'


function App() {

  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <section className='relative overflow-clip shadow-2xl rounded-4xl w-[403px] h-[802px] border border-slate-300 z-10 bg-linear-to-b from-primary/20 to-secondary/10'>
        <div className='flex flex-col gap-4 p-3'>
          <Header />
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

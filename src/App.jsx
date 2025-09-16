import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Shufflecard from './components/ui/shufflecard'


function App() {

  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <section className='relative rounded-4xl w-[403px] h-[802px] border border-text-gray z-10 bg-linear-to-b from-primary/20 to-secondary/10'>
        <div className='flex flex-col gap-6 p-6'>
          <Header />
          <Shufflecard />
        </div>
        <Footer/>
      </section>
    </div>
  )
}

export default App

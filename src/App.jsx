import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Shufflecard from './components/ui/shufflecard'


function App() {

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-linear-to-b from-primary/10 to-accent/5 '>
      <section className='relative rounded-4xl w-[403px] h-[802px] border border-text-gray bg-linear-to-b from-sky-200 to-indigo-50'>
        <div className='p-6'>
          <Header />
          <Shufflecard />
        </div>
        <Footer/>
      </section>
    </div>
  )
}

export default App

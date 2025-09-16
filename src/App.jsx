import './App.css'
import Header from './components/header'
import Footer from './components/footer'


function App() {

  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-slate-700'>
      <section className='relative rounded-4xl w-[403px] h-[802px] border bg-linear-to-b from-sky-200 to-indigo-50'>
        <div className='p-6'>
          <Header />
        </div>
        <Footer/>
      </section>
    </div>
  )
}

export default App

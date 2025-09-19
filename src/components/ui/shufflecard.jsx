import Button from "./button"

const Shufflecard = () => {
  return (
    <div className='relative rounded-2xl w-full p-4 bg-linear-to-r from-primary/50 to-secondary/40 shadow'>
        <div className='flex flex-col gap-4 max-w-[60%]'>
            <h1 className='font-oswald text-3xl text-white'>Your new tshirt</h1>
            <p className='text-white font-source-sans'>Really nice design that makes you kinda cool</p>
            <Button title="Shop now" />
            <img className='absolute bottom-0 right-0 brightness-110' width={200} height={200} src="/img/banner1.webp" alt="model with tshirt" />
        </div>
    </div>
  )
}

export default Shufflecard
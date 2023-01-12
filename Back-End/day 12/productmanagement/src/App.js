import './App.css';

import Cards from './components/cards/cards'

let App = () => {
  return(
    <>
    <div className='flex flex-col '>
      <div className='flex flex-row border-b-2 border-black h-[80px] justify-between px-3 py-2 items-center mx-10'>
        <div>
          <h1 className='font-bold text-red-500'>Product Management</h1>
        </div>
        <div>
          <button className='bg-green-500 border border-black rounded-md h-[50px] w-[150px]'>Add Products</button>
        </div>
      </div>
      <div className='mx-10 my-5'>
        <Cards />
      </div>
    </div>
    </>
  )
}

export default App;

import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'


export default function App(){
  const [data, setData] = useState([])

  const getData = async() => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=558d6328be00457187405a99bff3891f`)
    console.log(response.data.articles)
    setData(response.data.articles)
  }

  useEffect(() => {
    getData()
  }, [])

  return(
    <>
    <div>
      {/* navbar */}
      <div className='bg-red-700 h-[80px] border flex flex-cols justify-center items-center gap-3 '>
        <div className='hover:text-white hover:border-b-2'>Home</div>
        <div className='hover:text-white hover:border-b-2'>Nasional</div>
        <div className='hover:text-white hover:border-b-2'>Internasional</div>
        <div className='hover:text-white hover:border-b-2'>Ekonomi</div>
        <div className='hover:text-white hover:border-b-2'>Olahraga</div>
        <div className='hover:text-white hover:border-b-2'>Entertainment</div>
        <div className='hover:text-white hover:border-b-2'>Teknologi</div>
      </div>
      <div className='grid grid-cols-3 flex flex-row'>
      {
        data.map((value, index) => {
          return(
            <div className=''>
              <div className='bg-slate-200 h-[800px] w-[450px] border flex flex-col m-3'>
                <div className=' h-[400px] w-[450px] border' key={index}>
                  <img src={value.urlToImage} alt='pict'></img>
                </div>
                <div className=' h-[200px] w-[450px] my-2 text-2xl font-bold px-2 py-2' key={index}>{value.title}</div>
                {/* <div className=' h-[100px] w-[450px] mb-2 px-2' key={index}>Author: {value.author}</div>
                <div className=' h-[100px] w-[450px] mb-2 px-2' key={index}>Sumber: {value.source.name}</div>
                <div className=' h-[100px] w-[450px] mb-2 px-2' key={index}>Published: {value.publishedAt}</div> */}
                <div className=' h-[450px] w-[450px] mb-2 px-2' key={index}>{value.description}</div>
                <div className=' h-[450px] w-[450px] mb-2 px-2 hover:text-blue-600 hover:border-b-2' key={index}>Link: <a href={value.url}>{value.url}</a></div>
              </div>
            </div>
            
          )
        })
      }
      </div>

      <div>
        {/* footer */}
        <div className='bg-slate-700 h-[200px] border flex flex-row justify-around p-5'>
          <div>
            <div>Logo</div>
            <h3>Copyright 2023</h3>
          </div>
          <div className=''>
            <div className='text-white hover:border-b-2'>Home</div>
            <div className='text-white hover:border-b-2'>Nasional</div>
            <div className='text-white hover:border-b-2'>Internasional</div>
            <div className='text-white hover:border-b-2'>Ekonomi</div>
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

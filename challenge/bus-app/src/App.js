
import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import bus from './assets/images/bustravel.jpeg';

import { Progress } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  let [data, setData] = useState([])
  let [active, setActive] = useState('false')
  
  let getData = async(req, res) => {
    let data = await axios.get(`https://s-challenge-raja-ongkir-api-n5cm.vercel.app/bus/details`)
    console.log(data.data.data[0].category[1].travel.lists)
    setData(data.data.data[0].category[1].travel.lists)
  }

  useEffect(() => {
    getData()
  }, [])
  return(
    <>
    <div className='flex flex-row justify-center mt-5 gap-2'>
      <div className='w-[500px]'>
        <div className='border'>
          <img src={bus} alt='bus' className='w-[500px]'/>
        </div>
        <div className='border flex flex-col gap-2 p-3'>
          {
            data.map((value, index) => {
              return(
                <>
                <h1 className='text-3xl font-bold' key={index}>{value.travel_name}</h1>
                <h5 className='text-md'>Executive Class</h5>
                <h2 className='text-lg' key={index}>Rp.{value.price.toLocaleString()}</h2>
                </>
              )
            })
          }
        </div>
        <div className='p-3'>
          {
            data.map((value, index) => {
              return(
                <>
                <h3 key={index}>{value.total_seat - value.total_seat_booked} seats available</h3>
                <Progress value={16} color='danger' className='my-3' />
                </>
              )
            })
          }
          
        </div>
        <div className='border p-3'>
          <h2>View Seats</h2>
          <div className='grid grid-row-5'>
            {
              data.map((value, index) => {
                return(
                  <>
                  <div className='flex flex-col gap-2 items-center mt-3'>
                    <div className='flex flex-row gap-2'>
                      <button className='bg-red-600 w-[50px] h-[50px]'>a1</button>
                      <button className='bg-gray-600 active:bg-green-600 w-[50px] h-[50px]'>b1</button>
                      <button className='bg-gray-600 active:bg-green-600 w-[50px] h-[50px]'>c1</button>
                      <button className='bg-gray-600 active:bg-green-600 w-[50px] h-[50px]'>d1</button>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <div className='bg-red-600 w-[50px] h-[50px]'>a2</div>
                      <div className='bg-green-600 w-[50px] h-[50px]'>b2</div>
                      <div className='bg-gray-600 w-[50px] h-[50px]'>c2</div>
                      <div className='bg-gray-600 w-[50px] h-[50px]'>d2</div>
                    </div>
                    
                  </div>
                  
                  </>
                ) 
              })
            }
          </div>
        </div>
      </div>
      <div className='w-[500px] '>
        <div className='border text-xl p-3'>Summary</div>
        {
          data.map((value, index) => {
            return(
              <div className='border p-3 text-md'>
                <p>Tanggal berangkat: 25-01-2023</p>
                <p key={index}>Dari: {value.from}</p>
                <p key={index}>Menuju: {value.to}</p>
                <p key={index}>Total seats: {value.total_seat}</p>
                <p>Selected seats:</p>
              </div>
            )
          })
        }
        <div className='border p-3'>
          <h1 className='text-2xl'>Total Price:</h1>
        </div>
        <div>
          <button className='bg-red-600 h-[40px] w-[500px] text-xl'>Book Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

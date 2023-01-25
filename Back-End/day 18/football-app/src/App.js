import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App(){
  const [data, setData] = useState([]);

  let getData = async() => {
    let response = await axios.get('http://localhost:5050/data')
    setData(response.data.football.liga1.season.standings)
  }

  useEffect(() => {
    getData()
  }, []);
  return (
    <>
    {/* navbar */}
    <div className='h-[100px] flex flex-col border bg-red-600'>
      <div className='px-5 py-4'>
        <div>Liga 1</div>
      </div>
      <div className='flex flex-row justify-center gap-4 text-lg'>
        <div className='active:text-white hover:text-white hover:border-b-2'>Pertandingan</div>
        <div className='active:text-white hover:text-white hover:border-b-2'>Berita</div>
        <div className='active:text-white hover:text-white hover:border-b-2'>Klasemen</div>
        <div className='active:text-white hover:text-white hover:border-b-2'>Statistik</div>
        <div className='active:text-white hover:text-white hover:border-b-2'>Pemain</div>
      </div>
    </div>
    <div className='bg-slate-200 h-[70px] px-3 py-3'>
        <div className='flex flex-col'>
          <p>Musim</p>
          <select className='w-[100px]'>
            <option>2022-2023</option>
            <option>2021-2022</option>
            <option>2020-2021</option>
          </select>
        </div>
      </div>
    {/* content */}
    <div className='flex justify-center py-5'>
      <table className='table-auto flex flex-col gap-2 items-start'>
        <thead className='flex flex-row items-start p-2'>
          <tr className='flex gap-3'>
            <th scope='col'>No.</th>
            <th scope='col'>Klub</th>
            <th scope='col'>T</th>
            <th scope='col'>M</th>
            <th scope='col'>S</th>
            <th scope='col'>K</th>
            <th scope='col'>GM</th>
            <th scope='col'>GK</th>
            <th scope='col'>SG</th>
            <th scope='col'>Poin</th>
            <th scope='col'>5 terakhir</th>
          </tr>
        </thead>
        <tbody className='flex flex-col p-2'>
          {
            data.map((value, index) => {
              return(
                <tr className='flex gap-3'>
                  <th scope='row'>{index+1}</th>
                  <td>{value.teamName}</td>
                  {
                    value.tables.split(',').map((value, index) => {
                      return(
                        <>
                        <td>{value.split('|')[1]}</td>
                        {/* <td>10</td>
                        <td>8</td>
                        <td>1</td>
                        <td>33</td>
                        <td>12</td>
                        <td>21</td>
                        <td>38</td> */}
                        </>
                      )
                    })
                  }
                  <td>
                    <div className='flex'>
                      {
                        value.last_match.split(',').map((value, index) => {
                          return(
                            <div className={value === 'w'? 'bg-green-200': value === 'd'? 'bg-slate-200' : 'bg-red-200'}>
                              {value}
                            </div>
                          )
                        })
                      }
                    </div>
                  </td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
    </>
  );
}

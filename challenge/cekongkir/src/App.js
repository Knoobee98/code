import "./App.css";
import axios from 'axios'
import { Table } from 'reactstrap'
import { useState, useEffect, useRef } from 'react'


export default function App() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [province, setProvince] = useState([])
  const [city, setCity] = useState([])
  const [result, setResult] = useState([])
  const [province_id, setProvinceId] = useState('')

  const weight = useRef()

  const onGetProvince = async() => {
    const response = await axios.get('https://jcwd-s-challenge-raja-ongkir-api.vercel.app/rajaongkir/get-province', {
      headers: { 
        "key": "d04463c08e22f8f1660b895b10797463"
      }
    })
    console.log(response.data.data.rajaongkir.province)
    setProvince(response.data.data.rajaongkir.province)

  }

  const onGetCity = async(type, value) => {
    const response = await axios.get(`https://jcwd-s-challenge-raja-ongkir-api.vercel.app/rajaongkir/get-city?province_id=${value}`, {
      headers: {
        "key": "d04463c08e22f8f1660b895b10797463"
      }
    })
    console.log(response.data.data.rajaongkir.city)
    setCity(response.data.data.rajaongkir.city)
  }

  const onGetCost = async() => {
    const response = await axios.post('https://jcwd-s-challenge-raja-ongkir-api.vercel.app/rajaongkir/get-shipping-cost', {
      "origin": "501",
      "destination": "114",
      "weight": "1700",
      "courier": "jne"
    }, {
      headers: {
        "key": "d04463c08e22f8f1660b895b10797463"
      }
    })
    console.log(response.data.data.rajaongkir.result)
    setResult(response.data.data.rajaongkir.result)
  }

  useEffect(() => {
    onGetProvince()
  }, [])

  return (
    <>
      <div className="mx-20 border">
        <div className="my-4 mx-4">
          <h1 className='text-3xl text-blue-500'>cekOngkir</h1>
        </div>

        <div className="grid grid-cols-2">
          <div className="h-[300px] bg-slate-400 p-5 flex flex-col gap-2">
            <h2>origin</h2>
            <div>
              <select>
                {
                  province.map((value, index) => {
                    return(
                      <option key={index} value={value.province_id} className='w-[300px]' onChange={(event) => {onGetCity('origin', event.target.value)}}>{value.province}</option>
                    )
                  })
                }
                {/* <option value="jawa timur">jawa timur</option>
                <option value="jawa barat">jawa barat</option>
                <option value="jawa tengah">jawa tengah</option> */}
              </select>
            </div>
            <div>
              <select>
                {
                  city.map((value, index) => {
                    return(
                      <option value={value.city_id} className='w-[300px]' onChange={() => {}}>{value.city_name}</option>
                    )
                  })
                }
                {/* <option value="surabaya">surabaya</option>
                <option value="malang">malang</option>
                <option value="sidoarjo">sidoarjo</option> */}
              </select>
            </div>
            <h2>destination</h2>
            <div>
              <select>
              {
                  province.map((value, index) => {
                    return(
                      <option value={value.province_id}>{value.province}</option>
                    )
                  })
                }
                {/* <option value="banten">banten</option>
                <option value="jawa timur">jawa timur</option>
                <option value="jawa barat">jawa barat</option> */}
              </select>
            </div>
            <div>
              <select>
                <option value="tangerang selatan">tangerang selatan</option>
                <option value="jakarta">jakarta</option>
                <option value="bekasi">bekasi</option>
              </select>
            </div>

            <h2>courier</h2>
            <select>
              <option value="jne">JNE</option>
              <option value="tiki">TIKI</option>
              <option value="pos">POS Indonesia</option>
            </select>
          </div>

          <div className="bg-slate-200 p-5 flex flex-col gap-2">
            <h2>Summary</h2>
            <div>
              <h3>origin</h3>
              <h3>destination</h3>
              <h3>courier</h3>
            </div>
            <div className='flex justify-center mt-2'>
              <button className='bg-green-400 border rounded-lg w-[200px] h-[50px]'>Cek Ongkir</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-20 border mt-5 p-5">
        <h1>Result</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>No.</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Estimation</th>
              <th>Ongkir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>JNE</td>
              <td>Ongkir Kirim Ekonomi</td>
              <td>1-2 hari</td>
              <td>Rp. 17.000</td>
            </tr>
            <tr>
              <td>2</td>
              {/* {
                result.map((value, index) => {
                  return(
                    <td>{value.service}</td>
                  )
                })
              } */}
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

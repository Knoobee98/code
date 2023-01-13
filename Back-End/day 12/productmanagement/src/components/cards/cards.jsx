import {useState, useEffect} from 'react'

import axios from 'axios'

let Cards = (props) => {
    const [previewImage, setPreviewImage] = useState(null)
    const [dataProducts, setDataProducts] = useState([])
    let onGetData = async() => {
        try {
          let getData = await axios.get('http://localhost:5050/products/getall')
          setDataProducts(getData.data.data)
        } catch (error) {
          
        }
      }
    
      let onClickImage = (index,path) => {
        let temp = [...previewImage]
        temp[index] = path
        setPreviewImage(temp)
      }
    
      useEffect(() => {
        onGetData()
      })

    return(
        <>
        <div className='h-[600px] w-[300px] flex flex-col items-center border border-black p-2 mt-3 mx-3'>
           {
                dataProducts.map((value,index) => {
                    return(
                        <>
                        <div className='h-[200px] w-[200px] flex border border-black'>
                            <img src={`localhost:5050/${value.main_image}`} alt='preview' className='h-[200px] w-[200px]'/>
                        </div>
                        <div className='flex flex-row justify-between gap-2 p-3 mx-3'>
                            {
                                value.products_images.map((val,idx) => {
                                    return(
                                        <div className='h-[90px] w-[90px] border border-black'>
                                            <img src={`localhost:5050/${val.path}`} alt='preview' className='h-[90px] w-[90px]' onClick={() => onClickImage(index,val.path)}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex flex-col p-3 '>
                            <div className='flex align-start'>
                                <h3>Name</h3>
                            </div>
                            <div>
                                <h3>Price</h3>
                            </div>
                            <div>
                                <h3>Stock</h3>
                            </div>
                        </div>
                        <div className='flex self-center'>
                            <button className='h-[50px] w-[200px] bg-red-600 border rounded-md'>Delete Products</button>
                        </div>
                        
                        </>
                    )
                })
           }
        </div>
        </>
    )
}

export default Cards;
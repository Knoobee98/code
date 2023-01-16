import './App.css';

import {useState, useEffect} from 'react'

import axios from 'axios'

import CreateModal from './components/modal/modal'


// import Cards from './components/cards/cards'

let App = () => {
    const [modalOpen, setModalOpen] = useState(false)
    // const [data, setData] = useState(null)
    // const [previewImage, setPreviewImage] = useState(null)
    const [dataProducts, setDataProducts] = useState([])
    const[imagePreview, setImagePreview] = useState('')
    const [selectedImage, setSelectedImage] = useState([])
    const[idImageSelected, setIdImageSelected] = useState([])
    const[onEdit, setOnEdit] = useState(null)

    let onGetData = async() => {
        try {
          let getData = await axios.get('http://localhost:5050/products/getall')
          setDataProducts(getData.data.data)
        } catch (error) {
          
        }
      }
    
      let onClickImage = (index,path, idImage) => {
        let currentDataProducts = [...dataProducts]
        let currentIdImageSelected = [...idImageSelected]
        currentDataProducts[index].main_image = path
        currentIdImageSelected[index] = idImage

        setDataProducts(currentDataProducts)
        setIdImageSelected(currentIdImageSelected)
      }

      let onUpdateImage = (e) => {
        try {
          if(e.target.files[0].type.split('/')[0] !== 'image') throw {message: 'File must be an image'}
          if(e.target.files[0].size > 100000) throw {message: 'File is too large'}
          if(e.target.files.length > 1) throw {message: 'one image only'}

          let files = [...e.target.files]

          let reader = new FileReader()
          reader.readAsDataURL(files[0])
          reader.onload = () => {
            if(reader.readyState === 2) {
              setImagePreview(reader.result)
              setSelectedImage(files)
            }
          }

        } catch (error) {
          console.log(error.message)
        }
      }

      let onSubmitImage = async() => {
        try {
          let fd = new FormData()
          fd.append('images', selectedImage[0])
          await axios.patch(`http://localhost:5050/products/update/${idImageSelected[onEdit]}`, fd)
          alert('successfully updated')
        } catch (error) {
          
        }
        
      }

      let onClickEdit = (index) => {
        setModalOpen(true)
        setOnEdit(index)
      }
    
      useEffect(() => {
        onGetData()
      }, [])

  return(
    <>
    <div className='flex flex-col bg-slate-200'>
      {/* navbar */}
      <div className='flex flex-row border-b-2 border-black h-[80px] justify-between px-3 py-2 items-center mx-10'>
        <div>
          <h1 className='font-bold text-red-500'>Product Management</h1>
        </div>
        <div>
          <CreateModal />
        </div>
      </div>
      {/* cards */}
      <div className='mx-10 my-5 flex flex-row'>
      
           {
                dataProducts.map((value,index) => {
                    return(
                        <>
                        <div className='h-[600px] w-[300px] flex flex-col items-center border border-black p-2 mt-3 mx-3 rounded-xl drop-shadow-xl'>
                            <div className='h-[200px] w-[200px] flex '>
                                <img src={`http://localhost:5050/${value.main_image}`} alt='preview' className='h-[200px] w-[200px]'/>
                            </div>
                            <div className='flex flex-row justify-between gap-2 p-3 mx-3'>
                                {
                                    value.products_images.map((val,idx) => {
                                        return(
                                            <div className='h-[90px] w-[90px] '>
                                                <img src={`http://localhost:5050/${val.path}`} alt='preview' className='h-[90px] w-[90px]' onClick={() => onClickImage(index,val.path)}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='flex flex-col p-3 '>
                                <div className='flex align-start'>
                                    <h3 className='font-bold text-2xl'>{value.name}</h3>
                                </div>
                                <div>
                                    <h3 className='text-md'>{`Rp.${value.price.toLocaleString()}`}</h3>
                                </div>
                                <div>
                                    <h3 className='text-md italic'>{`${value.stock} stock ready to order`}</h3>
                                </div>
                            </div>
                            <div className='flex self-center'>
                                <button className='h-[50px] w-[200px] bg-red-600 border rounded-md'>Delete Products</button>
                            </div>
                        </div>
                        
                        
                        </>
                    )
                })
           }
        </div>
      </div>
    </>
  )
}

export default App;

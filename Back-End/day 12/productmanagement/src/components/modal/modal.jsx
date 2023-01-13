import {useState, useRef} from 'react'
import {Modal, ModalBody} from 'reactstrap'
import axios from 'axios'

export default function CreateModal(){

    let name = useRef()
    let price = useRef()
    let stock = useRef()

    const [modalOpen, setModalOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [selectedImages, setSelectedImages] = useState([])

    let onImagesValidation = (e) => {
        try {
            let files = [...e.target.files]

            //validasi total files
            if(files.length > 3) throw {message: 'select 3 images or less'}

            //validasi filesize
            files.forEach((value) => {
                if(value.size > 100000) throw {message: `file ${value.name} is too large`}
            })

            setSelectedImages(files)
            setMessage('')


        } catch (error) {

            setMessage(error.message)
            
        }
    }

    let onSubmit = async() => {
        try {
            let inputName = name.current.value
            let inputPrice = price.current.value
            let inputStock = stock.current.value

            let fd = new FormData()
            fd.append('data', JSON.stringify({name: inputName, price: inputPrice, stock: inputStock}))
            selectedImages.forEach(value => {
                fd.append('images', value)
            })

            await axios.post('http://localhost:5050/products/create', fd)

            alert('Successfully created product')

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <input type="button" value="insert Product" onClick={() => setModalOpen(true)} className="btn btn-primary rounded-0" />
        <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
            <ModalBody>
                <div className="text-center px-3 py-3">
                    <h3>Insert Product</h3>
                </div>
                <div className="px-3 py-3">
                    <h6>Product Name :</h6>
                    <input type="text" ref={name} className="form-control" />
                </div>
                <div className="px-3 py-3">
                    <h6>Price :</h6>
                    <input type="text" ref={price} className="form-control" />
                </div>
                <div className="px-3 py-3">
                    <h6>Stock :</h6>
                    <input type="text" ref={stock} className="form-control" />
                </div>
                <div className="px-3 pt-3">
                    <h6>Select Image :</h6>
                </div>
                <div className="row border mx-3 px-3 py-3 rounded">
                    <div className="col-12">
                        <div>
                            <input type="file" accept="image/*" multiple onChange={(e) => onImagesValidation(e)} />
                        </div>
                    </div>
                </div>
                <div>
                    {message}
                </div>
                <div className="my-3 px-3 py-3">
                    <input type="button" onClick={onSubmit} value="submit data" className="btn btn-primary w-100"/>
                </div>
            </ModalBody>
        </Modal>
        </>
    )
}
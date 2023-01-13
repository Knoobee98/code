import {useState, useRef, useEffect} from 'react'
import {Modal, ModalBody} from 'reactstrap'
import axios from 'axios'

export default function CreateModal(){

    let name = useRef()
    let price = useRef()
    let stock = useRef()

    const [modalOpen, setModalOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [selectedImages, setSelectedImages] = useState([])

    let onImagesValidation (e) => {
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
            
        } catch (error) {
            
        }
    }
}
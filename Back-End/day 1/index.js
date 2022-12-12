const express = require('express')
const app = express()
app.use(express.json()) //mengambil data yang dikirim oleh client melalui body

const fs = require('fs')

const PORT = 5001

app.get('/', (req, res) => {
    res.status(201).send(`<h1>Welcome to JCWD-2302 API</h1>`)
})

//read data
app.get('/products', (req, res) => {
    // step 1: ambil data dari db.json
    let getData = JSON.parse(fs.readFileSync('./db/db.json'))
    // step 2: kirim data ke client dalam bentuk response
    res.status(201).send({
        isError: false,
        message: 'get data success',
        data: getData
    })
})

//create data
app.post('/products', (req, res) => {
    // step 1: ambil data dari client/postman
    let body = req.body
    // step 2: ambil data ke db.json
    let getData = JSON.parse(fs.readFileSync('./db/db.json'))
    // step 3: manipulasi data
    let generateId = getData.Products.length === 0 ? 1 : getData.Products[getData.Products.length - 1].id + 1
    getData.Products.push({id: generateId, ...body})
    // step 4: simpan data ke db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(getData))
    // step 5: kirim response ke client
    res.status(201).send({
        isError: false,
        message: 'post data success',
        data: getData
    })
    
})

//update data
app.patch('/products/:id', (req, res) => {
    // step 0: ambil id dari url
    let id = parseInt(req.params.id)
    // step 1: ambil data dari client/postman
    let body = req.body
    // step 2: ambil data dari db.json
    let getData = JSON.parse(fs.readFileSync('./db/db.json'))
    // step 3: manipulasi data
    getData.Products.forEach((value, index) => {
        if(value.id === id){
            value.name = body.name
            value.price = body.price
        }
    })
    // step 3: simpan data ke db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(getData))
    // step 4: kirim response ke client
    res.status(201).send({
        isError: false,
        message: 'patch data success',
        data: getData
    })
})

//delete data
app.delete('/products/:id', (req, res) => {
    // step 0: ambil id dari url
    let id = parseInt(req.params.id)
    // step 1: ambil data dari db.json
    let getData = JSON.parse(fs.readFileSync('./db/db.json'))
    // step 2: manipulasi data
    let idx = null
    getData.Products.forEach((value, index) => {
        if(value.id === id){
            idx = index
        }
    })
    getData.Products.splice(idx, 1) //tidak ditaruh di dalam forEach
    // step 3: simpan data ke db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(getData))
    // step 4: kirim response ke client
    res.status(201).send({
        isError: false,
        message: 'delete data success',
        data: getData
    })
})

app.listen(PORT, () => console.log(`API running on port ${PORT}`))


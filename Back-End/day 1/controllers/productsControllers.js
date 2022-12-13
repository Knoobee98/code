const fs = require('fs')

module.exports = {
    getProducts: (req, res) => {
        // step 1: ambil data dari db.json
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))

        // step 2: kirim data ke client dalam bentuk response
        res.status(201).send({
            isError: false,
            message: 'get data success',
            data: getData
        })
    },

    postProducts: (req, res) => {
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
    },

    patchProducts: (req, res) => {
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
    },

    deleteProducts: (req, res) => {
        // step 0: ambil id dari url
        let id = parseInt(req.params.id)
        // step 1: ambil data dari db.json
        let getData = JSON.parse(fs.readFileSync('./db/db.json'))
        // step 2: manipulasi data
        let idx //untuk menyimpan index data yang akan dihapus
        getData.Products.forEach((value, index) => {
            if(value.id === id){
                idx = index
            }
        })

        if(idx === undefined) return res.status(401).send({ isError: true, message: 'id not found', data: null}) //jika tidak ada data yang dihapus

        getData.Products.splice(idx, 1) //tidak ditaruh di dalam forEach

        // step 3: simpan data ke db.json
        fs.writeFileSync('./db/db.json', JSON.stringify(getData))
        // step 4: kirim response ke client
        res.status(201).send({
            isError: false,
            message: 'delete data success',
            data: getData
        })
    }
    
}
const http = require('http')
const fs = require('fs') //file sistem untuk membaca dokumen files

const PORT = 5000;

const server = http.createServer((req, res) => {
    if(req.url == '/products'){
       if(req.method === 'GET'){
         //step 1: ambil db.json
         let getData = fs.readFileSync('./db/db.json')
         // getData = JSON.parse(getData) //untuk mengecek datanya apakah benar2 keambil
         // console.log(getData); //sudah tidak diperlukan
         //step 2: kirim datanya dalam bentuk response
         res.writeHead(201, "Get Data Success")
         res.end(getData)
       } else if(req.method === 'POST'){
        // step 1: ambil data dari client
        let body = []
        req.on('data', (data) => { //params data berfungsi untuk mengambil data dari client/postman
            body.push(data)
        }).on('end', () => {
            body = JSON.parse(body) //untuk mengubah data dari client/postman menjadi bentuk json
            // console.log(body)
            // step 2: simpan datanya kedalam db.json
            let getData = JSON.parse(fs.readFileSync('./db/db.json'))
            getData.Products.push(body)
            fs.writeFileSync('./db/db.json', JSON.stringify(getData))
            // step 3: kirim response
            res.writeHead(200, "post data success")
            res.end(JSON.stringify(getData));
        })
        
       }
    }
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
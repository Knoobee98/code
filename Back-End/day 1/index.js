const express = require('express')
const app = express()
app.use(express.json()) //mengambil data yang dikirim oleh client melalui body

const PORT = 5001

app.get('/', (req, res) => {
    res.status(201).send(`<h1>Welcome to JCWD-2302 API</h1>`)
})

//import router
const {productsRouter} = require('./routers') //akan otomatis mengambil semua router yang ada di folder routers
app.use('/products', productsRouter) //endpoint products

app.listen(PORT, () => console.log(`API running on port ${PORT}`))

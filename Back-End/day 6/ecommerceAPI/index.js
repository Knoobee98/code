const express = require('express')
const app = express()
const port = 3002

app.use(express.json())

app.get('/', (req, res) => {
    res.status(201).send('<h1>WELCOME TO ECOMMERCE API</h1>')
})

const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')
app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
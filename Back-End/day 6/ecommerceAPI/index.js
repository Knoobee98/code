const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.status(201).send('<h1>WELCOME TO ECOMMERCE API</h1>')
})

const {userRouter} = require('./routers')
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
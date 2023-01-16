const express = require('express')
const app = express()
const port = 5002
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.status(201).send('<h1>WELCOME TO ECOMMERCE API</h1>')
})

const {userRouter, productRouter} = require('./routers')
app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// sequelize synchronous
const Sequelize = require('sequelize')
const Models = require('./models')

Models.sequelize.sync({
    force: false,
    alter: true,
    logging: console.log
}).then(function () {
    console.log('database is synchronized')
}).catch(function (error){
    console.log(error, 'something went wrong with the database')
})
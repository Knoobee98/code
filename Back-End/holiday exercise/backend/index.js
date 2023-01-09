const express = require('express')
const app = express()
const port = 5001
app.use(express.json())

const { userRouter, hotelRouter } = require('./routers')
app.use('/users', userRouter)
app.use('/hotels', hotelRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
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


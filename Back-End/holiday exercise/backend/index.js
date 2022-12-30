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


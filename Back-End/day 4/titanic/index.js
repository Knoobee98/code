const express = require('express')
const app = express()
app.use(express.json())

const port = 5004;

//import all routers
const {passangersRouter} = require('./routers')
app.use('/passangers', passangersRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
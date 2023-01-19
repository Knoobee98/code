const express = require('express')
const app = express()
app.use(express.json())

const port = 5005;

//import all routers
const {passangersRouter} = require('./routers')
app.use('/passangers', passangersRouter)

// app.use('/', () => {
//     <h1>Welcome to titanic-api</h1>
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
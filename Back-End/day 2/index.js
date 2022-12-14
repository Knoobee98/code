const express = require('express')
const app = express()
app.use(express.json())

const PORT = 5002

//import all routers
const { usersRouter, moviesRouter } = require('./routers')
app.use('/users', usersRouter)
app.use('/movies', moviesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
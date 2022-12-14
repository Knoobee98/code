const express = require('express')
const app = express()
app.use(express.json())

const PORT = 5004

//import all routers
const { expenseRouter } = require('./routers')
app.use('/expenses', expenseRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

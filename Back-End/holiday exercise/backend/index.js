const express = require('express')
const app = express()
const port = 5001
app.use(express.json())

const { userRouter } = require('./routers/userRouter')
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})


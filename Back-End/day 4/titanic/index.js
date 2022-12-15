const express = require('express')
const app = express()
app.use(express.json())

const port = 5004;

//import all routers

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
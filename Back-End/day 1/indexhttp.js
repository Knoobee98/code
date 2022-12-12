const http = require('http')

const PORT = 5000;

const server = http.createServer((req, res) => {
    if(req.url == '/products'){
        console.log('masuk ke products')
    }
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
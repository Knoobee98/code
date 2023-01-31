//import libraries
const express = require('express')
const http = require('http')
const socket = require('socket.io')
const cors = require('cors')

//initialize variables
const app = express()
app.use(cors())
const httpApp = http.createServer(app)
const io = socket(httpApp, { cors: { origin: '*' } })
const port = 2023

//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

//socket.io -> 2 logic -> On, Emit
let userJoin = []
io.on('connection', (socket) => {
    console.log('user connected')
    console.log(socket.id)

    socket.on('join', ({username, roomname}) => {
        userJoin.push({
            id: socket.id,
            username,
            roomname
        })
        console.log(userJoin)

        //filter users in room
        let usersInRoom = userJoin.filter(value => {
            return value.roomname == roomname
        })
        console.log(usersInRoom)

        socket.join(roomname)
        socket.to(roomname).emit('message-from-server', {message: `${username} has joined the room`})
    })

    socket.on('users-in-room', (roomname) => {
        let usersInRoom = userJoin.filter(value => {
            return value.roomname == roomname
        })

        io.in(roomname).emit('users-in-room-feedback', usersInRoom)
    })

    socket.on('disconnect', (roomname) => {
        let idxToDisconnect = null
        userJoin.forEach((value, index) => {
            if(value.id === socket.id){
                idxToDisconnect = index
            }
        })

        userJoin.splice(idxToDisconnect, 1)

        let usersInRoom = userJoin.filter(value => {
            return value.roomname === roomname
        })
        socket.emit('users-in-room', usersInRoom)
    })
})

//create server
httpApp.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
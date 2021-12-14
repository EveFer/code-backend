const express = require('express')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

// instancias
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
let numUsers = 0

app.use(express.static('./public'))

const messages = [

]


const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => {
    console.log('Server running')
})

// cada que se coencte un cliente nuevo se ejecuta esta funcion
io.on('connection', (socket) => {
    console.log('New User')
    numUsers++

    io.emit('stats', {numUsers})
    console.log('Users:', numUsers)
    socket.emit('messages', messages)

    socket.on('new-message', (msg) => {
        msg.time = new Date().toLocaleTimeString()
        messages.push(msg)
        io.sockets.emit('messages', messages)
    })

    socket.on('disconnect', () => {
        numUsers--
        io.emit('stats', {numUsers})
        console.log('Users:', numUsers)
    })
})
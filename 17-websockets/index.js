const express = require('express')
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const app = express()

const httpServer = new HttpServer(app)

const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname })
})

httpServer.listen(3000, () => {
    console.log('Server Ok')
})

io.on('connection', (socket) => {
    console.log('Se abrio una nueva conexion', new Date().toLocaleTimeString())

    // setInterval(() => {
    //     socket.emit('saludar', `Hola a todos amigos desde el Server ${new Date().toLocaleTimeString()}`)
    // }, 2000)

    // socket.on('saludar', data => {
    //     console.log(data)
    // })

    socket.on('sendMessage', data => {
        console.log(data)
        io.sockets.emit('sendMessage', data)
    })
})
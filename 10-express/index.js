const express = require('express')
let format = require('date-fns/format')

const fs = require('fs')

const app = express()

const PORT = 8080

let visitas = 0

const server = app.listen(PORT, () => {
    try {
        let data = fs.readFileSync("visitas")
        visitas = parseInt(data)
    } catch (error) {
        console.log('No existe Archivo')
    }
    
    console.log(`Servidor corriendo en ${PORT}`)
})

server.on('error', (err) => {
    console.log('Error en el server: ' + err.message)
})

app.get('/', (req, res) => {
    // throw new Error('Esto es error')
    res.send(`
    <h1 style='color:blue;'>
      Bienvenidos a Express
    </h1>`)
})



app.get('/visitas', (req, res) => {
    visitas++
    fs.writeFileSync('visitas', visitas.toString())
    res.send(`La visitas son: ${visitas}`)
})

app.get('/fyh', (req, res) => {
    res.send({
        fyh: format(new Date(), 'MM/dd/yyyy')
    })
})

app.get('/hola', (req, res) => {
    res.send('Ruta Hola')
})


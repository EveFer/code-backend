const express = require('express')

const app = express()

// static para servir archivos desde el server

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('Hola')
})

app.get('/hello' , (req, res) => {
    res.render('hello.pug', {
        message: 'Hello Fer :3'
    })
})

app.get('/datos', (req, res) => {
    const {min, max, level, title} = req.query
    res.render('datos.pug', {min, max, level, title})
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server running')
})
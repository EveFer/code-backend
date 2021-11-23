const express = require('express')

const app = express()

app.use(express.json())

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port: ' + 3000)
})

app.get('/api/messages', (req, res) => {
    // valida se hay querys
    if(Object.entries(req.query).length > 0) {
        res.json({
            result: "Messajes with query params",
            query: req.query
        })
    }else {
        res.json({result: 'All Messages'})
    }
})

// EJERCICIO

const phrase = 'Hola mundo como estan'

app.get('/api/phrase', (req, res) => {
    res.json({
        phrase
    })
})

app.get('/api/letters/:num', (req, res) => {
    const {num} = req.params
    const numParsed = parseInt(num) - 1
    if(num > phrase.length || num <= 0) {
        return res.json({
            error: 'El rango es mayor'
        })
    }
    if(isNaN(numParsed)) {
        return res.json({
            error: 'Invalid params'
        })
    }
    return res.json({
        letter: phrase[numParsed]
    })
})


app.get('/api/words/:num', (req, res) => {
    const {num} = req.params
    const numParsed = parseInt(num) - 1
    if(num > phrase.split(' ').length || num <= 0) {
        return res.json({
            error: 'El rango es mayor'
        })
    }
    if(isNaN(numParsed)) {
        return res.json({
            error: 'Invalid params'
        })
    }
    return res.json({
        letter: phrase.split(' ')[numParsed]
    })
})


app.post('/api/saludo', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.json({
        greeting: 'hi'
    })
})

// Ejercicio 2

app.get('/api/sumar/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params
    res.json({
        result: parseInt(num1) + parseInt(num2)
    })
})

app.get('/api/sumar', (req, res) => {
    const {num1, num2} = req.query
    res.json({
        result: parseInt(num1) + parseInt(num2)
    })
})

app.get('/api/operacion/:oper', (req, res) => {
    const [num1, num2] = req.params.oper.split('+')
    res.json({
        result: parseInt(num1) + parseInt(num2)
    })
})
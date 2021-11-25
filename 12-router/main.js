const express = require('express')
const { Router } = express

const router = Router()

const app = express()

// Statics files

app.use(express.static('public'))

// prefijo virtual
// app.use('/static', express.static(__dirname + 'public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pets = []
const people = []

router.post('/pets', (req, res) => {
    try {
        const {name, raz, age} = req.body
        const pet = {name, raz, age}
        pets.push(pet)
        // res.json({
        //     pet
        // })
        res.redirect('/')
    } catch (error) {
        res.status(400).json({error: 'Hubo un error'})
    }
})

router.get('/pets', (req, res) => {
    try {
        res.json({
            pets
        })
    } catch (error) {
        res.status(400).json({error: 'Hubo un error'})
    }
})

router.post('/people', (req, res) => {
    try {
        const {name, lastName, age} = req.body
        const person = {name, lastName, age}
        people.push(person)
        // res.json({
        //     person
        // })
        res.redirect('/')
    } catch (error) {
        res.status(400).json({error: 'Hubo un error'})
    }
})

router.get('/people', (req, res) => {
    try {
        res.json({
            people
        })
    } catch (error) {
        res.status(400).json({error: 'Hubo un error'})
    }
})

app.use('/api', router)




app.listen(8080, () => {
    console.log('Server corriendo')
})
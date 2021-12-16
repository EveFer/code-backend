import express from 'express'
import {getTime} from './libs/utils'
import Person from './persona'

const person:Person = new Person('Fernanda', 'Palacios')

const app = express()

app.get('/', (req, res) => {
    res.json({
        time: getTime(),
        person
    })
})


app.listen(8000, () => {
    console.log('server running')
})
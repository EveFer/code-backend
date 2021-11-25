const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('Raiz')
})


// Statics files

app.use(express.static('public'))

app.listen(8080, () => {
    console.log('Server corriendo')
})
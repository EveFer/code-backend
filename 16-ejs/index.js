const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('ejs/mensaje.ejs', {
        message: 'Holis Fer'
    })
})


app.listen(3001, () => {
    console.log('Server Running')
})
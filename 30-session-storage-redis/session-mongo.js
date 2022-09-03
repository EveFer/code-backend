const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const MongoStore = require('connect-mongo')
const advancedOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const app = express()

app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://db_devkoore:holamundo12345@devkoore.ytyfa.mongodb.net/sessions?retryWrites=true&w=majority',
        mongoOptions: advancedOptions
    }),
    secret: 'my secret',
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req, res) => {
    if(req.session.views){
        req.session.views++
        res.end(`<h2>Views: ${req.session.views}</h2>`)
    }else {
        req.session.views = 1
        res.end("Welcome")
    }
})

app.get('/info', (req, res) => {
    console.log(req.session)
    console.log(req.sessionID)
    console.log(req.cookies)
    console.log(req.sessionStore)
})

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})
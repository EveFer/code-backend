const express = require('express')
const session = require('express-session')
const sessionFile = require('session-file-store')
const FileStore = sessionFile(session)

const app = express()

app.use(session({
    store: new FileStore(),
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

app.listen(4000, () => {
    console.log('Server listening on port 8080')
})
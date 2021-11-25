const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use('/static', express.static(__dirname + '/uploads'))
app.use(express.static('public'))
app.use(express.static('uploads'))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    }, 
    filename: function (req, file, cb) {
        cb(null, file.originalname.replaceAll(' ', ''))
    }
})

const upload = multer({storage})

app.post('/upload', upload.single('myFile'), (req, res) => {
    const file = req.file
    if(!file){
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    
    const fullUrl = `${req.protocol}://${req.get('Host')}/static/${file.originalname.replaceAll(' ', '')}`;
    res.json({url: fullUrl})
})

app.listen(8080, () => {
    console.log('Server corriendo')
})
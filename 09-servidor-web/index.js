const http = require('http')
const moment = require('moment')

const server = http.createServer((request, response) => {
    console.log('Someone request page')

    let date = new Date()
    hour = date.getHours()

    let format = 'HH:mm:ss'
    let time = moment(date,format)
    console.log(time)
    
    if(time.isBetween(moment('06:00:00', format), moment('12:59:59', format))) {
        response.end('Buenos días')
    }else if(time.isBetween(moment('13:00:00', format), moment('19:59:59', format))) {
        response.end('Buenos tardes')
    }else {
        response.end('Buenos noches')
    }
    // response.end('<h1>Hola Mundo!!!</h1>')
})


const connect = server.listen(3000, ()=> {
    // console.log(connect.address())
    const port = connect.address().port
    console.log(`Escuchando por puerto ${port}`)
})
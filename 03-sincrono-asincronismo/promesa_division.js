function dividir (dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if(divisor === 0){
            reject('No se puede dividir por cero')
        }else {
            resolve(dividendo/divisor)
        }
    })
}

const resuelto = result => console.log('El resultado es: ', result)
const errorHandler = error => console.log('Error: ', error)

dividir(10, 2)
.then(resuelto)
.catch(errorHandler)


function dividiCall (dividendo, divisor, callback) {
    if(divisor === 0) {
        callback('Error, el divisor es cero')
    }else {
        let r = dividendo / divisor
        console.log('El resultado es: ', r)
        callback(null)
    }
}

const callback = error => {
    if(error) console.log(error)
}

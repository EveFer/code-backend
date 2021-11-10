function writeLog(text, callbackParaLoggear) {
    // proceso de escritura
    console.log('Texto...')
    console.log(text)

    callbackParaLoggear('Se ha escrito el texto')
}

writeLog('Registrando koders', (message) => {
    const today = new Date().toTimeString()
    console.log(`${today} -- ${message}`)
})

// Desafio

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const producto = (a,b) => a * b
const division = (a,b) => a / b
const modulo = (a,b) => a % b

const operacion = (a,b, callback) => callback(a,b)

console.log('Resultado de la suma: ', operacion(10,20, suma))
console.log('Resultado de la resta: ', operacion(10,20, resta))
console.log('Resultado de la producto: ', operacion(5,2, producto))
console.log('Resultado de la division: ', operacion(10,2, division))
console.log('Resultado de la modulo: ', operacion(10, 2, modulo))
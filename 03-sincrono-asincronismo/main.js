// funciones - parte 1

function addition(a,b) {
    let result = a + b
    return result
}

const sumar = function (a,b) {
    let result = a + b
    return result
}

let resultSuma = addition(10,10)
console.log(`El resultado es: ${resultSuma}`) 

console.log(`El resultado es: ${sumar(15,20)}`)

// funciones flecha

const suma = (a,b) => console.log("El valor es", a + b)
console.log('----')
console.log(suma(10,20))


let variable1 = "Hola"
console.log(variable1)

let variable // indefined

console.log(variable)

// indefined es un valor par aindicar que no hay valor por que no se ha definido todavia
// null se usa para indicar que no hay valor porque así lo hemos querido indicar expresamente.

// SCOPE

if(true) {
    let primera = 34
    console.log("Uno",primera)

    if(false === false) {
        console.log('Dos',primera)
    }
}

// console.log(primera)

// mutabilidad
const array = ["a", "b", "c"]

array.push("d")

console.log(array)

// Clases

class Client {
    constructor(nombre, apellido, edad) {
        Client.contador++
        this.id = Client.contador
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    static contador = 0

    calcularYear () {
        console.log(`El año de nacimitneo es: ${2021 - this.edad}` )
    }
}

const client1 = new Client("Fernanda", "Palacios", 25)
const client2 = new Client("Fernanda", "Palacios", 26)
const client3 = new Client("Fernanda", "Palacios", 27)

console.log(client1)
console.log(client2)
console.log(client3)


class Counter {
    constructor(name) {
        this.name = name
        this.counter = 0
    } 

    static counterGlobal = 0

    obtenerResponsable () {
        return `Reponsable de la cuenta es: ${this.name} `
    }

    obtenerCuentaIndividual () {
        return `Contador de la cuenta es: ${this.counter}`
    }

    obtenerCuentaGlobal () {
        return `Contador global: ${Counter.counterGlobal}`
    }

    count(num) {
        this.counter += num
        Counter.counterGlobal += num
    }
}

const counterFer = new Counter("Fernanda")

console.log(counterFer.obtenerResponsable())
console.log(counterFer.obtenerCuentaIndividual())
console.log(counterFer.obtenerCuentaGlobal())
console.log(counterFer.count(10))

console.log(counterFer.obtenerResponsable())
console.log(counterFer.obtenerCuentaIndividual())
console.log(counterFer.obtenerCuentaGlobal())

module.exports = Counter

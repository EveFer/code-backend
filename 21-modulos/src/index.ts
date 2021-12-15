/*
 Compilar:
    .node_modules/.bin/tsc ./index.ts
 
 Inicializar
    ./node_modules/.bin/tsc --init  -> configuraciones
*/

import * as operations from './libs/operations'

const message:string = "Hola amigos!!!"
console.log(message)

let num1:number = 10
let num2:number = 25

console.log(`La suma de ${num1} y ${num2} es: ${operations.sumar(num1, num2)}`)
console.log(`La multiplicación entre ${num1} y ${num2} es: ${operations.multiplicar(num1, num2)}`)
console.log(`La resta entre ${num1} y ${num2} es: ${operations.restar(num1, num2)}`)
console.log(`La division entre ${num1} y ${num2} es: ${operations.dividir(num1, num2)}`)
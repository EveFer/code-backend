let koders = 46

console.log(`Numero de koders ${koders}`)


// Práctica 1

// Crear un programa que genere 10,000 números aleatorios entre el rango de 1 - 20
// Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salío dicho número.
// Representar por consola los resultados


function generateNumberRandom(min=1, max=21) {
    let objeto = {}
    for (var i = 0; i < 10000; i++) {
        let numberRandom = Math.floor(Math.random() * (max - min) + min); 
        let cont = 0
        if(objeto[numberRandom]) cont = objeto[numberRandom]
        objeto = {...objeto, [numberRandom]: cont + 1}
    }
    console.log(objeto)
    console.log(Object.values(objeto).reduce((accum, cant)=> accum + cant,0))
}

generateNumberRandom()


// Práctica 2

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

// 1 Los nombres de los productos en un string separados por comas
// 2 El precio total
// 3 El precio promedio
// 4 El producto con menor precio
// 5 El prodcuto con mayor precio
// 6 Con los datos del los puntos 1 -5 crear un objeto y representarlo por consola

// Todos los valores monetarios serán expresados con 2 decimales


function getDataProducts (products = productos) {
    const data = {}

    const namesWithComa = productos.map((product) => product.nombre).join()

    data.namesWithComa = namesWithComa

    const precioTotal = (productos.reduce((accum, product) => accum+product.precio,0)).toFixed(2)
    data.precioTotal = precioTotal

    const averagePrice = (precioTotal / productos.length).toFixed(2)
    data.averagePrice = averagePrice

    // get mayor - menor
    const prices = productos.map(product=> product.precio)

    const min = Math.min(...prices)
    const max = Math.max(...prices)

    const productMayor = productos.find(product=> product.precio === max)
    const productMenor = productos.find(product=> product.precio === min)

    data.productMayor = productMayor
    data.productMenor = productMenor

    console.log(data)
}


getDataProducts()

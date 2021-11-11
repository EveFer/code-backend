const Contenedor = require('./main')


const productsArray = [
    {
        title: 'Sabritas Sal',
        price: 14,
        thumbnail: 'url'
    },
    {
        title: 'Sabritas Flamin',
        price: 14,
        thumbnail: 'url'
    },
    {
        title: 'Donas Espolvoriadas',
        price: 15,
        thumbnail: 'url'
    },
    {
        title: 'Choco-roles',
        price: 16,
        thumbnail: 'url'
    }
]

const products = new Contenedor('./products.json')

// PROBANDO FUNCIONES
// PARA PROBARLO DESCOMENTAR LA INVOCACIÓN DE LAS FUNCIONES


// probando agregar un producto

async function addedProduct (product) {
    const idProduct = await products.save(product)
    return idProduct
}

// addedProduct(productsArray[2])
//     .then(idProduct => {
//         // obtenemos el id
//         console.log(idProduct)
//     })
//     .catch(err => console.log(err))

// probando obtener un producto por id
async function getProductById(id){
    const product = await products.getById(id)
    return product
}

// getProductById(6)
//     .then(product => {
//         console.log(product)
//     })
//     .catch(err => console.log(err))


// probando eliminar producto

async function deleteProductById(id) {
    const response = await products.deleteById(id)
    return response
}

// deleteProductById(3)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => console.log(err))

// probando borrar todos los productos

async function deleteAllProducts() {
    await products.deleteAll()
}

// deleteAllProducts()





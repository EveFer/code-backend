const fs  = require('fs')

// Leer archivo with then/catch

fs.promises.readFile('./fyh.txt', 'utf-8')
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err))

// async - await

async function readFile () {
    try {
        const content = await fs.promises.readFile('./fyh.txt', 'utf-8')
        console.log(content)
    } catch (error) {
        console.log(error)
    }
}

readFile()

// sobreescribir un archivo

async function writeFile() {
    try {
       await fs.promises.writeFile('./file-promises.txt', 'Archivo creado desde una promesa \n')
        console.log('Se ha creado')
    } catch (error) {
        console.log(error)
    }
}

writeFile()

async function addeContent(content='Algo') {
    try {
        await fs.promises.appendFile('./file-promises.txt', content)
        console.log('Se ha Agregado')
     } catch (error) {
         console.log(error)
     }
}

addeContent()


// renombrar un archivo

async function rename() {
    try {
        await fs.promises.rename('./archivo.txt', './archivo1.txt')
        console.log('Renombrado')
    } catch (error) {
        console.log(error)
    }
}

// rename()

// Ejercicio

// then - catch
function updateFileOne (file='./info.txt') {
    fs.promises.readFile(file, 'utf-8')
    .then(content => {
        const info = JSON.parse(content)
        console.log(info)
        info.author = 'Fernanda Palacios'
        fs.promises.writeFile('./package.json.coder', JSON.stringify(info, null, 2))
        .then(() => console.log('Todo Cool'))
        .catch(err => console.error(err))
    })
    .catch(error => console.error(error))
}
// llamada a la funcion
// updateFileOne()


// async - await
async function updateFile(file='./info.txt') {
    try {
        const content = await fs.promises.readFile(file, 'utf-8')
        const info = JSON.parse(content)
        console.log(info)
        info.author = '@EveFer'

        await fs.promises.writeFile('./package.json.coder', JSON.stringify(info, null, 2))
    } catch (error) {
        console.error(error)
    }
}
// llamada a la funcion
updateFile()
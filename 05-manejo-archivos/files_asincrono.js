
const fs  = require('fs');
// async


// leer archivo

fs.readFile('./archivo_nuevo.txt', 'utf-8', (error, data)=>{
    if(error) throw new Error(`Error: ${error}`)
    console.log(data)
})

// Escritura

fs.writeFile('./file_async.txt', 'utf8', (error) => {
    if(error) throw new Error(`Error: ${error}`)
    console.log('Guardado')
})

// Agregar contenido

fs.appendFile('./file_async.txt', '\n Nuevo contenido', error => {
    if(error) throw new Error(`Error: ${error}`)
    console.log('nuevo contenido agregado')
})

// eliminar archivo
// fs.unlink('./eliminar.txt', error => {
//     if(error) throw new Error(`Error: ${error}`)
//     console.log('Archivo eliminado')
// })

// crear un directorio

// fs.mkdir('nuevacarpeta', error => {
//     if(error) throw new Error(error)
//     console.log('Directorio Creado')
// })

// leer contenido de un directorio

fs.readdir('./nuevacarpeta', (error, contenido) => {
    if(error) throw new Error(error)
    console.log(contenido)
})

// Ejercicio - Lectura y escritura de archivos - Modo asincrono

function readPackage() {
    fs.readFile('./package.json', 'utf-8', (error, data) => {
        if(error) throw new Error(error)

        const info = {
            contentStr: data,
            content: JSON.parse(data, null, 2)
        }

        fs.lstat('./package.json', (err, stats) => {
            if(err) throw new Error(err)
            const {size} = stats
            info.size = size
            console.log(info)
            fs.writeFile('./info.txt', JSON.stringify(info, null, 2), (err) => {
                if(err) throw new Error(err)
                console.log('Creado info.txt')
            })
        })
    })
}

readPackage()
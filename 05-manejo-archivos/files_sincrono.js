const fs = require('fs')

// modo sincrono | bloqueante

// busca el archivo desde donde se ejecuta el script - relativa
/*
8-bit Unicode Transformation Format
cuando lee el archivo, gracias al encoding sabe como representar los bytes que están guardados como caracteres
*/





// manejar errores

try {
    // Leer un archivo
    const data = fs.readFileSync('./archivo.txt', 'utf-8')
    console.log(data)

    // Escribir un archivo

    fs.writeFileSync('./archivo_nuevo.txt', 'Hola Nuevamente \n')

    // agregar más texto

    fs.appendFileSync('./archivo_nuevo.txt', '\n \nAlo!!!')

    // Eliminar archivo
    fs.unlinkSync('./archivo_eliminar.txt')


    const data1 = fs.readFileSync('./archivo_no_existe.txt', 'utf-8')
    console.log(data1)
} catch (error) {
    console.log('Error: ' + error.message)
}

// Fecha y hora - Ejercicio

function createAndReadFile(file='fyh.txt'){
    try {
        const today = new Date
        const dateFormat = `${today.toDateString()} - ${today.toLocaleTimeString()}`
        fs.writeFileSync(file, dateFormat)

        const content = fs.readFileSync(file, 'utf-8')
        console.log(content)
    } catch (error) {
        throw new Error(`Failed to create/read ${file} D:`)
    }
    
}

createAndReadFile()
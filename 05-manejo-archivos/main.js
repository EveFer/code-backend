// repaso sincrono, asincrono

const fin = () => console.log('Se termino')


function mostrarLetras(str, time, cb) {
    setTimeout(() => {
        if(str.length > 0) {
            console.log(str[0])
            str = str.slice(1)
            mostrarLetras(str, time, cb)
        }else {
            cb()
        }
    }, time)
}

mostrarLetras('hola', 1000, fin)
mostrarLetras('hola', 3000, fin)
mostrarLetras('hola', 2000, fin)
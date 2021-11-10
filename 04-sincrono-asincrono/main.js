function getCatalog() {
    const catalog = {id:12, name: "Catalogue"}
    setTimeout(() =>{}, 3000)
    return catalog
}


function getUser() {

    return new Promise(function(resolve, reject) {
        let user
        setTimeout(() =>{
            user = {name: "Fernanda", lastName: "Palacios"}
            resolve(user)
        }, 3000)
    })
}



getUser().then((user) => {
    console.log('User', user)
}).catch(error => console.log('Error', error))

console.log('Hola ejecutate primero')
// const catalog = getCatalog()

// console.log('Mostrar usuario', user)
// console.log('Mostrar catalogo', catalog)


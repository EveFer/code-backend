const ejecutar = unaFunction => unaFunction()

const saludar = () => console.log("Hola a todos!!!")

ejecutar(saludar)

ejecutar(function() {
    console.log("Soy fernanda")
})

ejecutar(() => console.log("Soy fernanda otravez"))

// funcion ejecutar con argumentos

const ejecutar2 = (name, aFunction) => aFunction(name)

const hiKoder = name => console.log(`Hola ${name}`)

ejecutar2("Evelyn", hiKoder)

// 
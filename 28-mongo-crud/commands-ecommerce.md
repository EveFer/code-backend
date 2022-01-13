
0. crear una base de datos llamada ecommerce que contenga dos colecciones: mensajes y productos.

```sh
$ use ecommerce;
$ db.createCollection('products');
$ db.createCollection('messages');
```

1. Agregar 10 documentos con valores distintos a las colecciones mensajes y productos. 

2. Definir las claves de los documentos en relación a los campos de las tablas de esa base. En el caso de los productos, poner valores al campo precio entre los 100 y 5000 pesos(eligiendo valores intermedios, ej: 120, 580, 900, 1280, 1700, 2300, 2860, 3350, 4320, 4990). 

```sh
$ db.products.insertMany([
    { name: 'Frijoles lata', price: 4500, url: 'http://tienda/frijole-lata.png' },
    { name: 'Gel extreme', price: 3500, url: 'http://tienda/gel-extreme.png' },
    { name: 'Sabritas Sal', price: 250, url: 'http://tienda/sabrita-sal.png' },
    { name: 'Queso Crema', price: 468, url: 'http://tienda/queso-crema.png' },
    { name: 'Jabon Zote 400gr', price: 239, url: 'http://tienda/zote-400.png' },
    { name: 'Suavitel Floral', price: 250, url: 'http://tienda/suvitel-floral.png' },
    { name: 'Atún dolores 200gr', price: 120, url: 'http://tienda/atun-200.png' },
    { name: 'Sardina Calmex', price: 100, url: 'http://tienda/sardina-calmex.png' },
    { name: 'Cereal Chococrispi', price: 500, url: 'http://tienda/cereal.png' },
    { name: 'Escoba', price: 5000, url: 'http://tienda/escoba.png' },
])

$ db.messages.insertMany([
    { email: 'fernanda@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'luis@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'abril@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'jose@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'evelyn@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'abraham@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'victor@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'alex@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'lupita@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
    { email: 'julian@gmail.com', message: 'Hola ¿cómo estás?', date: '12/14/2021 8:28:57 PM' },
])
```


3. Listar todos los documentos en cada colección.

```sh
$ db.products.find();
$ db.messages.find();
```

4. Mostrar la cantidad de documentos almacenados en cada una de ellas.

```sh
$ db.messages.estimatedDocumentCount();
$ db.products.estimatedDocumentCount();
```

5. Realizar un CRUD sobre la colección de productos:
    - Agregar un producto más en la colección de productos 
        ```sh
        $ db.products.insertOne({name: 'Vic vaporub', price: 250, url: 'http://tienda/vicvaporub.png'})
        ```
    - Realizar una consulta por nombre de producto específico:

            ```sh
                $ db.products.find({name: 'Vic vaporub'})
            ```
        - Listar los productos con precio menor a 1000 pesos.
            ```sh
                $ db.products.find({ price: { $lt: 1000}}) 
            ```
        - Listar los productos con precio entre los 1000 a 3000 pesos.
            ```sh
                $ db.products.find({ price: { $gte: 1000, $lte: 3000}})
            ```
        - Listar los productos con precio mayor a 3000 pesos.
            ```sh
                $ db.products.find({ price: { $gte: 3000 }})
            ```
        - Realizar una consulta que traiga sólo el nombre del tercer producto más barato.
            ```sh
                $ db.products.find({}, { name: 1, _id: 0}).sort({price: 1}).limit(1)
            ```
    - Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100. 
        ```sh
            $ db.products.updateMany({}, {$set: {stock: 100}})
        ```
    - Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
        ```sh
            $ db.products.updateMany({price: {$gt: 4000}}, {$set: {stock: 0}})
        ```
    - Borrar los productos con precio menor a 1000 pesos 
        ```sh
            $ db.products.deleteMany({price: {$lt: 1000}})
        ```

6. Crear un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. 

    ```sh
        $ db.createUser({
                user: 'fer-lectura',
                pwd: 'hola123',
                roles: [
                    {role: 'read', db: 'ecommerce'}
                ]
            })
    ```
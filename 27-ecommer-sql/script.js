const options = {
    client: 'mysql2',
    version: process.env.MYSQL_VERSION || "8",
    connection: {
        host : 'localhost',
        port : 3306,
        user: 'root',
        password: 'root',
        database: 'db_test'
    }
}
const knex = require('knex')(options);


(async () => {
    try {
        console.log('Creamos tabla productos')
        await knex.schema.createTable('products', (table) => {
            table.increments('id')
            table.string('name', 15)
            table.float('price')
            table.integer('stock')
            table.string('code', 10)
            table.timestamps()
        })

        console.log('Insertamos productos')
        await knex('products').insert([
            {
                name: 'Modem',
                price: 205.00,
                stock: 10,
                code: '101'
            },
            {
                name: 'Teclado',
                price: 205.00,
                stock: 10,
                code: '102'
            },
            {
                name: 'Monitor',
                price: 205.00,
                stock: 10,
                code: '102'
            },
            {
                name: 'Mouse',
                price: 205.00,
                stock: 10,
                code: '103'
            }
        ])

        console.log('Mostrar productos')
        let rows = await knex.from('products').select('*')
        console.log(rows)

        console.log('Borramos producto con id 3')
        await knex.from('products').where('id', 3).del()

        console.log('Update stock para el producto de id 2')
        await knex("products").where('id', 2).update({ stock: 0})

        console.log('Mostrar productos otra vez')
        rows = await knex.from('products').select('*')
        console.log(rows)
    } catch (error) {
        console.log(error)
    } finally {
        knex.destroy()
    }
}) ()
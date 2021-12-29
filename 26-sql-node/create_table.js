const { options } = require('./options/db')
const knex = require('knex')(options)

knex.schema.createTable('ciudades', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('poblacion')
})
.then(() => console.log('Table created successfully'))
.catch(err => console.error(err))
.finally(() => {
    knex.destroy()
})


const { options } = require('./options/db')
const knex = require('knex')(options)

knex.from('ciudades')
.where('id', '1') // se pueden agregar más where
.update({ name: 'Bogotá'})
.then(() => {
    console.log('City updated successfully')
})
.catch(err => console.error(err))
.finally(() => {
    knex.destroy()
})
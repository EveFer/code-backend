const { options } = require('./options/db')
const knex = require('knex')(options)

knex.from('ciudades').where('id', 1).del()
.then(() => console.log('City deleted'))
.catch(err => console.error(err))
.finally(() => {
    knex.destroy()
})
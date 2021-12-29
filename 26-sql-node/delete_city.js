const { options } = require('./options/db')
const knex = require('knex')(options)

knex.from('ciudades').del()
.then(() => console.log('Cities deleted'))
.catch(err => console.error(err))
.finally(() => {
    knex.destroy()
})
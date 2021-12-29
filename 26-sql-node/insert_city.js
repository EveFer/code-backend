const { options } = require('./options/db')
const knex = require('knex')(options)

const cities = [
    {
        name: 'Bogota',
        poblacion: 7181,
    },
    {
        name: 'Buenos Aires',
        poblacion: 3075,
    },
    {
        name: 'CDMX',
        poblacion: 8855,
    }
]

knex('ciudades').insert(cities)
.then(() => console.log('Datos insertados'))
.catch(err => console.error(err))
.finally(() => {
    knex.destroy()
})
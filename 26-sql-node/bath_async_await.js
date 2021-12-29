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

(async () => {
    try {
        console.log("Borramos todos los datos")
        await knex('ciudades').del()

        console.log('Insertamos las ciudades')
        await knex('ciudades').insert(cities)

        console.log('Leer data')
        let rows = await knex.from('ciudades').select('*')
        console.log(rows)
    } catch (error) {
        console.log(error)
    } finally {
        knex.destroy()
    }
})()
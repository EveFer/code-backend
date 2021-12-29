const { options } = require('./options/db')
const knex = require('knex')(options)

knex.from('ciudades').select('*').orderBy('poblacion', "desc")
    .then(rows => {
        // console.log(rows)
        for (const row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['poblacion']}`)
        }
    })
    .catch(err => console.error(err))
    .finally(() => {
        knex.destroy()
    })
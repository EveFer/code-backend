const moment = require('moment')

let birthday = new Date('1996/06/24')

console.log('Hoy es', moment().format('M/D/YYYY'))
console.log('Naci el ', moment(birthday).format('M/D/YYYY'))
console.log(`Desde mi nacimiento has pasado ${moment(birthday).fromNow()}`)
console.log(`Desde mi nacimiento has pasado ${moment().diff(moment(birthday), 'days')} dias`)
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

module.exports = { options }
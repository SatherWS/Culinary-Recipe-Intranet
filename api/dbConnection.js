var mysql = require('mysql')
var db = null

module.exports = () => {
    if(!db) {
        db = mysql.createConnection({
            host:       'localhost',
            database:   'killerr',
            user:       'root',
            password:   'toor'
        })
    }
    return db
}


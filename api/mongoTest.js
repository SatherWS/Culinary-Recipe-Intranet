const mconn = require('./api/mongoModule')

var db = mconn.getDb()
db.collection('sr').insertOne(recipe)
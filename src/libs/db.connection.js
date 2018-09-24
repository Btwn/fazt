const mongoose = require('mongoose')

let db

module.exports = function Connection() {
    if(!db) {
        db = mongoose.connect('mongodb://localhost/crud-example', {
            useNewUrlParser: true
        })
    }
    console.log('as',db);
    return db
}

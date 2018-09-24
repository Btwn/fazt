module.exports = function(){
    var db = require('../libs/db.connection')()
    const Schema = require('mongoose').Schema
    var Task = Schema({
        title: String,
        description: String,
        status: Boolean
    })
    //console.log(db);
    return db.model('tasks',Task)
}
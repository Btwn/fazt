const express = require('express')
const router = express.Router()
const model = require('../models/task')()


router.get('/', (req, res) => {
    console.log(model);
    // model.find({}, (err, tasks) => {
    //     if(err) throw err
    //     res.render('index', {
    //         title: 'CRUD',
    //         task: tasks
    //     })
    // })
    // res.render('index.pug', {
    //     title: 'CRUD',
    //     tasks: [
    //         {
    //             title: 'algo',
    //             description: 'algodon'
    //         }
    //     ]
    // })
})


module.exports = router

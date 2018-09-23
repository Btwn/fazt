const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        miApi: 'Works'
    })
})

module.exports = router
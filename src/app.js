const express = require('express')
const app = express()
const morgan = require('morgan')
const routes = require('./routes/index')

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

// middleware
app.use(morgan('dev'))

// router
app.use('/', routes)

app.get('*', (req, res) => {
    res.end('Archivo no encontrado')
})

app.listen(3000, () => {
    console.log('Running in port ' + app.get('port'))
})

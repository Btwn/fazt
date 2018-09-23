const express = require('express')
const app = express()
const morgan = require('morgan')
const routes = require('./routes')
const routesApi = require('./router.api')

// settings
app.set('appName', 'myServer')
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// middleware
app.use(morgan('short'))

// router
app.use(routes)
app.use('/api',routesApi)

app.get('*', (req, res) => {
    res.end('Archivo no encontrado')
})

app.listen(3000, () => {
    console.log('Running in port 3000')
    console.log('Nombre del servidor: ' + app.get('appName'));
})

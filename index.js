const express = require('express')
var app = express();


app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    })
})

app.get('/clientes', (req, res) => {
    res.sendFile('./static/clientes.html',{
        root: __dirname
    })
})

app.get('/productos', (req, res) => {
    res.sendFile('./static/productos.html',{
        root: __dirname
    })
})

app.use((req, res) => {
    res.status(404).send('No se encontro tu pagina...!!!')
})

app.listen('5000')
console.log('Server on port ${5000}')


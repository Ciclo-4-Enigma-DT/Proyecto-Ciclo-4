const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//Importar conexion mongoDB

const archivoBD = require('./conexion')

//Importacion de archivo de rutas y modelos
const rutaproducto = require('./rutas/producto') 

//Importar body parser
constbodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/producto', rutaproducto)

app.get('/',(req, res) => {
    res.end('Ruta / en el sevrer backend')
})

//configuracion servidor
app.listen(5000, function(){
    console.log('El servidor NODE corriendo OK')
})
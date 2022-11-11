const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaproducto = new eschema({
    nombre: String,
    precio: String,
    detalle: String,
    idproducto: String,
    cantidad: String
})

const ModeloProducto = mongoose.model('producto', eschemaproducto)
module.exports = router

//router.get('/ejemplo', (req, res) => {
  //  res.end('Respuesta desde ruta ejemplo get usuario')
//})


//ruta para ageragr producto
router.post('/agregarproducto', (req, res) => {
    const nuevoproducto = new ModeloProducto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        detalle: req.body.detalle,
        idproducto: req.body.idproducto,
        cantidad: req.body.cantidad
        
    })

    nuevoproducto.save(function(err){
        if(!err){
            res.send('Producto agregado correctamente')
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los productos
router.get('/obtenerproducto', (req, res) =>{
    ModeloProducto.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
    
})


//Obtener data producto
router.post('/obtenerdataproducto', (req, res) =>{
    ModeloProducto.find({idproducto:req.body.idproducto}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
    
})


//ruta para actualizar producto
router.post('/actualizaproducto', (req, res) => {
    
    ModeloProducto.findOneAndUpdate({idproducto:req.body.idproducto},{
        nombre: req.body.nombre,
        precio: req.body.precio,
        detalle: req.body.detalle,
        cantidad: req.body.cantidad
    }, (err) =>{
        if(!err){
            res.send('Prodcuto actualizado correctamente')
        }else{
            res.send(err)
        }

    })

})

//ruta para borrar producto
router.post('/borrarproducto', (req, res) => {
    
    ModeloProducto.findOneAndDelete({idproducto:req.body.idproducto}, (err) => {
        if(!err){
            res.send('Prodcuto borrado correctamente')
        }else{
            res.send(err)
        }


    })

})


    



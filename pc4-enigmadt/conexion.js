const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/crudmern');
mongoose.connect('mongodb+srv://userenigma:userenigma@cluster0.iylhamb.mongodb.net/dbenegima');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log('Conexion OK MongoDB')})
objetobd.on('error', ()=>{console.log('Conexion fallida MongoDB')})

module.exports = mongoose
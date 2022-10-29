
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://userenigma:userenigma@cluster0.iylhamb.mongodb.net/dbenegima"

mongoClient.connect(url, function (err, db) {
    if (err) throw err
    var dbo = db.db("pruebita")
    dbo.createCollection("Coleccion VSC", function (err, db) {
        if (err) throw err
        console.log("DB creada con éxito")
    })
})
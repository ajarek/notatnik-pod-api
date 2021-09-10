//C:\Users\ajare\mongodb>bin\mongod --dbpath data <--POŁACZENIE Z BAZĄ DANYCH NA SERVERZE
const express = require('express')
const app = express()
const {port} = require('./config')
const bodyParser=require('body-parser')
//routes
const apiRouter = require('./routes/api')
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
//db
require('./db/mongoose')
//dołączenie ścieżek'' do app
app.use('/api/', apiRouter)

app.listen(port, function () {
    console.log('serwer słucha...http://localhost:3000');
})
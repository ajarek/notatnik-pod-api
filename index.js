//C:\Users\ajare\mongodb>bin\mongod --dbpath data <--POŁACZENIE Z BAZĄ DANYCH NA SERVERZE
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const {port} = require('./config')

//routes
const apiRouter = require('./routes/api')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.text())

//db
require('./db/mongoose')
//dołączenie ścieżek'' do app
app.use('/api/', apiRouter)

app.listen(port, function () {
    console.log('serwer słucha...http://localhost:3000');
})
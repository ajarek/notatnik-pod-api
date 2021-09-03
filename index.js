const express=require('express')
const app=express()
const {port}=require('./config')


//routes
const apiRouter = require('./routes/api')
//dołączenie ścieżek'' do app
app.use('/',apiRouter)

app.listen(port,function(){
    console.log('serwer słucha...http://localhost:3000');
})
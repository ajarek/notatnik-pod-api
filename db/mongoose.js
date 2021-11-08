const mongoose=require('mongoose')
const {database}=require('../config')

mongoose.connect(database,()=>{
    console.log('connected to database')
})


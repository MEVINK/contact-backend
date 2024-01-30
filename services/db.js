 //node + mongodb connection

const mongoose= require('mongoose');

 //connection string
 mongoose.connect('mongodb://localhost:27017/Contact')

 //create a model

 const agent=mongoose.model('agent',{
    id:String,
    name:String,
    age:String,
    phone:String,
     email:String
 })

 module.exports={
    agent
 }
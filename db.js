const mongoose=require('mongoose')
require('dotenv').config();
//define the mongodb connection url
// const mongoURL='mongodb://localhost:27017/hotels' // replace hotels with your database name , connect to local database
const mongoURL=process.env.MONGODB_URL;
mongoose.connect(mongoURL);
const db=mongoose.connection // mongoose maintain a default connection object representing the mongodb connection
// define event listner for database connection
db.on('connected',()=>{
    console.log('connected to mongodb server')
});
db.on('error',(err)=>{
    console.log('mongodb connection error:',err)
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected')
});
module.exports=db;

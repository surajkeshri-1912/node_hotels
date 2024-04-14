const mongoose=require('mongoose')
//define the mongodb connection url
const mongoURL='mongodb://localhost:27017/hotels' // replace hotels with your database name
mongoose.connect(mongoURL);
const db=mongoose.connection // mongoose maintain a default connection object representing the mongodb connection
// definr event listner for database connection
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

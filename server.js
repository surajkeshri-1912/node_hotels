const express=require('express')
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); // req.body (store)
const PORT=process.env.PORT || 2000;
app.get('/',(req,res)=>{
    res.send('welcome to our hotel')
})
//Import the Router Files
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

// use the Router files
app.use('/person',personRoutes)
app.use('/menu',menuItemRoutes);

app.listen(PORT,()=>{
    console.log("listening on port number 2000")
})
//